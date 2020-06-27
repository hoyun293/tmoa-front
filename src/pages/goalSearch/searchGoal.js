import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import GoalPopup from '../../components/main/GoalPopup';

import { addComma2Number, convertStrToDate, createNewDateTime, getCategoryName } from '../../js/CommonFunc';
import { getFamousKeyword, getSearch, getRecentGoals } from '../../api/mygoal-list-api';

import Layout from '../Layout';
import styled from 'styled-components';
import BadgeGroup from '../../components/goalSearch/badgeGroup';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';
import BackHeader from '../../components/main/BackHeader';

import 'antd/dist/antd.css';
import { Row, Col, Input } from 'antd';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';

import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

const GoalList = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
`;

const searchGoal = ({ history }) => {
  const [searchWord, setSearchWord] = useState('');
  const [cheerGoalList, setCheerGoalList] = useState([]);
  const [togglePopupDisplay, setTogglePopupDisplay] = useState(false);
  const [goalPopupTarget, setGoalPopupTarget] = useState({});
  const [badgeList, setBadgeList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [recentGoalList, setRecentGoalList] = useState([]);
  let pageNumber = 1;

  const requestKeyword = async () => {
    const response = await getFamousKeyword();
    const { data, code } = response.data;

    const keywordList = data.map((v) => {
      const { id, name } = v;
      return { index: id, name}
    });

    setBadgeList(keywordList);
  }

  const requestRecentGoals = async() => {
    const response = await getRecentGoals(pageNumber);
    const { data, code } = response.data;
    const responseList = data.map(v => {
      const { _id, title, targetAmount, currentAmount, goalStartDate, goalEndDate, tags, isLike, category, likeCount } = v;
      return {
        _id,
        title,
        percentage: Math.floor((currentAmount / targetAmount) * 100),
        Dday: Math.round((createNewDateTime(convertStrToDate(goalEndDate)) - createNewDateTime(convertStrToDate(goalStartDate))) / (1000 * 60 * 60 * 24)),
        goalAmount: currentAmount,
        goalName: title,
        goalTags: `#${tags.join("#")}`,
        isLike,
        category,
        goalTagList: tags,
        targetAmount,
        currentAmount,
        likeCount
      }
    });
    setRecentGoalList(responseList);
  }

  const requestSearch = async (word) => {
    const response = await getSearch(word, pageNumber);
    const { data, count, code } = response.data;
    if(data.length === 0) return [];
    setTotalCount(count);
    console.log(data);
    const responseList = data.map(v => {
      const { _id, title, targetAmount, currentAmount, goalStartDate, goalEndDate, tags, isLike, category, likeCount } = v;
      return {
        _id,
        title,
        percentage: Math.floor((currentAmount / targetAmount) * 100),
        Dday: Math.round((createNewDateTime(convertStrToDate(goalEndDate)) - createNewDateTime(convertStrToDate(goalStartDate))) / (1000 * 60 * 60 * 24)),
        goalAmount: currentAmount,
        goalName: title,
        goalTags: `#${tags.join("#")}`,
        isLike,
        category,
        goalTagList: tags,
        targetAmount,
        currentAmount,
        likeCount
      }
    });

    return responseList;
  }

  const requestUseEffect = async () => {
    if(searchWord.length !== 0) {
      const response = await requestSearch(searchWord);
      setCheerGoalList([...response]);
    }
  }

  useEffect(() => {
    requestKeyword();
    requestRecentGoals();
  }, []);

  useEffect(() => {
    requestUseEffect();
  }, [searchWord]);

  useEffect(() => {
  }, [cheerGoalList]);

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if(scrollHeight === scrollTop + clientHeight && searchWord.length > 0) {
      // 무한스크롤
      if(cheerGoalList.length % 10 === 0) {
        pageNumber++;
        const response = await requestSearch(searchWord);
        if(response.length === 0 || cheerGoalList.length === 0) return;
        setCheerGoalList([...cheerGoalList, ...response]);
      }
    }
  }

  const togglePopup = (goal) => {
    console.log(goal)
    setTogglePopupDisplay(!togglePopupDisplay);
    const { _id, category, goalName, goalTagList, currentAmount, targetAmount,Dday, isLike, percentage, likeCount } = goal;
    const Goal4Popup = {
      _id,
      category,
      title: goalName,
      tagList: goalTagList,
      targetAmount,
      currentAmount,
      dueDate: Dday,
      isLike,
      percentage,
      likeCount
    }
    setGoalPopupTarget(Goal4Popup);
  }

  window.addEventListener('scroll', infiniteScroll);
  let goalSummaryComponentList = cheerGoalList.map((goal, index) => {
    return(
      /* key goal.id로 변경예정*/
      <div key={index} 
        onClick={(e) => togglePopup(goal)}
        style={{flexBasis: '40%', borderRadius: '6px', border: '0.5px solid #F2F2F2', margin: '10 5', boxShadow: '0 2 4 rgba(0,0,0,0.1)'}}>
        <GoalSummaryComponent
          percentage={goal.percentage}
          Dday={goal.Dday}
          goalAmount={addComma2Number(goal.goalAmount)}
          goalName={goal.goalName}
          goalTags={goal.goalTags}
          isLike={goal.isLike}
        />
      </div>
    );
  });

  const onChangeSearchWorld = useCallback((e) => {
    setSearchWord(e.target.value);
  }, []);

  const searchPressEnter = (e) => {

  };

  const linkRecentTargetList = () => {
    history.push('/recentGoals');
  };

  const badgeClickHandler = (target) => {
    setSearchWord(target.innerText.replace("#", ""));
  }

  const goalSummaryList4Render = () => {
    // API 요청: 최근 등록 목표
    const goalSummaryList = [...recentGoalList];
    // 한번에 두 개씩 보여주기
    const ROW_COUNT = 2;
    const size = ((goalSummaryList.length - goalSummaryList.length%ROW_COUNT) / ROW_COUNT) + (goalSummaryList.length%ROW_COUNT);
    const countArray = new Array(size).fill(0);
    const renderArray = countArray.map((array, index) => {
      const result = [];
      const newIndex = index * 2
      result.push(goalSummaryList[newIndex]);
      if(goalSummaryList[newIndex+1]) result.push(goalSummaryList[newIndex+1]);
      return result;
    });

    return renderArray.map((colArray, rowIndex) => {
      return (
        <Row key={rowIndex}>
          {colArray.map((goalSummary, colIndex) => {
            return (
              <Col key={rowIndex*ROW_COUNT + colIndex} span={12} style={{padding:12}}>
                <GoalSummaryComponent
                  percentage={goalSummary.percentage}
                  Dday={goalSummary.Dday}
                  goalAmount={addComma2Number(goalSummary.goalAmount)}
                  goalName={goalSummary.goalName}
                  goalTags={goalSummary.goalTags}
                  isLike={goalSummary.isLike}
                />
              </Col>
            );            
          })}
        </Row>
      );

    });
  }

  const goalSummaryListEl = goalSummaryList4Render();

  return (
    <Layout>
      <GoalPopup display={togglePopupDisplay} toggle={togglePopup} target={goalPopupTarget}/>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#F2F2F2',
        }}></div>
      {searchWord.length === 0 ?
      <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '18rem',
          borderBottomLeftRadius: '1.2rem',
          borderBottomRightRadius: '1.2rem',
          backgroundColor: '#16b877',
        }}></div>
        <Row>
          <BackHeader history={history} backgrondColor='#16b877' />
        </Row>
      </>
      :
        <Row>
          <BackHeader history={history} backgrondColor='#F2F2F2' />
        </Row>}
      <Row justify="center">
          <Col span={22}>
            <Row>
              <Col span={24}>
                <Input
                  size="large"
                  suffix={<SearchOutlined />}
                  style={{ borderRadius: 6 }}
                  placeholder="검색어를 입력해 주세요"
                  value={searchWord}
                  onChange={onChangeSearchWorld}
                  onPressEnter={(e) => searchPressEnter(e)}
                ></Input>
              </Col>
            </Row>
            
            {searchWord.length === 0 ?
              <>
                <Row style={{ marginTop: 24 }}>
                  <Col span={24}>
                    <BadgeGroup badgeList={badgeList} clickBadge={badgeClickHandler}/>
                  </Col>
                </Row>
                <Row style={{ paddingTop: 30 }}>
                  <Col span={23}>
                    <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>최근 등록 목표</p>
                  </Col>
                  <Col span={1}>
                    <p style={{ paddingTop: '0.5rem' }} onClick={linkRecentTargetList}>
                      <ArrowRightOutlined style={{ color: '#222222' }} />
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Swiper>
                    {goalSummaryListEl}
                  </Swiper>
                </Row>
              </>
              :
              <>
                <Row style={{marginTop: 15}}>
                  <Col span={24}>
                    <p style={{margin: 0, fontSize: '2rem', fontWeight: 600}}>{`검색결과 ${totalCount}건`}</p>
                  </Col>
                </Row>
                <Row style={{ marginTop: 24 }}>
                  <Col span={24}>
                    <GoalList>
                      {goalSummaryComponentList}
                    </GoalList>
                  </Col>
                </Row>
              </>
            }
          </Col>
        </Row>
    </Layout>
  );
};

export default searchGoal;
