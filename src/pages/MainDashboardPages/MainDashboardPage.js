import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';
import {
  addComma2Number,
  convertStrToDate,
  calculateRealTimeTotalAmount,
  getFractionPart,
  getCategoryName,
  createNewDateTime,
  getPercent,
} from '../../js/CommonFunc';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import rightArrowButton from '../../../public/assets/icon/rightArrowButton.svg';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import MyGoal from '../../components/MainDashboard/MyGoal';
import Spinner from '../../components/CommonUIComponents/SpinnerComponent';
import * as _ from 'lodash';

import { goals, goalsLiked } from '../../api/main-dashboard-api';
import SpinnerComponent from '../../components/CommonUIComponents/SpinnerComponent';

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: ${(props) => (props.height === 'true' ? 'auto' : '100%')};
  padding-bottom: 2rem;
`;

const BackgroundHeader = styled.div`
  width: 100%;
  height: 18rem;
  background: linear-gradient(
      180deg,
      rgba(162, 227, 201, 0.83) 0%,
      rgba(162, 227, 201, 0.52) 0.01%,
      rgba(255, 255, 255, 0) 55.2%
    ),
    #16b877;
  background-blend-mode: soft-light, normal;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  padding-top: 3.5rem;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;
const SubHeader = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;

const HeaderBox = styled.div`
  position: relative;

  flex: display;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
`;

const SwiperWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  height: 24rem;
`;
const GoalSummaryComponentBox = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
const GoalSummaryComponentSplateer = styled.div`
  width: 1rem;
`;

const SubPropRow = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 1.8rem;
`;
const MyGoalHeader = styled(SubPropRow)`
  margin-top: 16.4rem;
`;
const AddGoalButton = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  height: 5rem;
  line-height: 5rem;
  background: #118a59;
  border-radius: 5px;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  color: #ffffff;
`;
const OtherGoalsHeader = styled(SubPropRow)`
  margin-top: 2.9rem;
`;
const SubProp = styled.div`
  margin-right: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const ArrowButton = styled.img`
  margin-left: auto;
  line-height: 3.2rem;
`;
const MyGoalWrapper = styled.div``;

const SearchOtherGoalsButton = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  height: 5rem;
  line-height: 5rem;
  background: #ffffff;
  border-radius: 5px;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  color: #118a59;
  border: 1px solid #118a59;
`;

const DummyDiv = styled.div`
  margin-top: 14rem;
  position: relative;
  height: 12rem;
`;
const DummyDiv2 = styled.div`
  margin-top: 2rem;
  position: relative;
  height: 12rem;
`;
const RedirectionCard = styled.div`
  position: relative;
  top: 14rem;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 10rem;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 0.6rem;
  padding-top: 1.8rem;
`;
const RedirectionTitleString = styled.div`
  margin-left: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const RedirectionSubtitle = styled.div`
  margin-left: 3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  display: inline-block;
`;
const RightArrowButton = styled.img`
  display: inline-block;
  height: 1.2rem;
  margin-left: 1rem;
`;
var totalAmount = 0;
var currentAmount = 0;
var isMounted;
var pageNumber = 1;
var nickname;
var backgroundFlag = 'false';
const colorParams = {
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
};
const goalLikedList4Render = (list) => {
  var goalLikedList = list.map((v, i) => {
    return {
      percentage: getPercent(
        v.targetAmount,
        calculateRealTimeTotalAmount(
          v.currentAmount,
          v.savingAmount,
          v.goalStartDate,
          v.goalEndDate,
          v.savingCode,
          v.savingDetailCode
        )
      ),
      Dday:
        Math.ceil(
          createNewDateTime(convertStrToDate(v.goalEndDate)) - createNewDateTime(new Date())
        ) /
        (1000 * 60 * 60 * 24),
      title: v.title,
      targetAmount: v.targetAmount,
      tags: `#${v.tags.join('#')}`,
      isLike: v.isLike,
    };
  });
  const ROW_COUNT = 2;
  const size = (goalLikedList.length - (goalLikedList.length % ROW_COUNT)) / ROW_COUNT;
  var countArray;
  if (size > 0 && list.length % 2 == 1) {
    countArray = new Array(size + 1).fill(0);
  } else if (list.length === 1) {
    countArray = new Array(1).fill(0);
  } else {
    countArray = new Array(size).fill(0);
  }
  const renderArray = countArray.map((array, index) => {
    const result = [];
    const newIndex = index * 2;
    result.push(goalLikedList[newIndex]);
    if (goalLikedList[newIndex + 1]) {
      result.push(goalLikedList[newIndex + 1]);
    }
    return result;
  });
  return renderArray.map((colArray, rowIndex) => {
    return (
      <div key={rowIndex}>
        <GoalSummaryComponentBox>
          {colArray.map((goalLikedSummary, colIndex) => {
            return (
              <GoalSummaryComponent
                key={colIndex}
                percentage={goalLikedSummary.percentage}
                Dday={goalLikedSummary.Dday}
                goalAmount={addComma2Number(goalLikedSummary.targetAmount)}
                goalName={goalLikedSummary.title}
                goalTags={goalLikedSummary.tags}
                isLike={goalLikedSummary.isLike}
              />
            );
          })}
        </GoalSummaryComponentBox>
      </div>
    );
  });
};
const MainDashboardPage = (props) => {
  const [randomNumber, setRandomNumber] = useState('');
  const [totalSavingAmount, setTotalSavingAmount] = useState(0);
  const [goalList, setGoalList] = useState([]);
  const [goalLikedList, setGoalLikedList] = useState([]);
  const [loader, setLoader] = useState(true);
  const convertJSONRes = (jsonArray) => {
    var goalObjectArray = [];
    totalAmount = 0;
    _.map(jsonArray, (v, i) => {
      currentAmount = calculateRealTimeTotalAmount(
        v.currentAmount,
        v.savingAmount,
        v.goalStartDate,
        v.goalEndDate,
        v.savingCode,
        v.savingDetailCode
      );
      totalAmount += currentAmount;
      goalObjectArray.push({
        _id: v._id,
        title: v.title,
        targetAmount: Number(v.targetAmount),
        currentAmount: currentAmount,
        category: v.category,
        dueDate: Math.ceil((convertStrToDate(v.goalEndDate) - new Date()) / (1000 * 60 * 60 * 24)),
        tagList: v.tags,
        likeCount: v.likeCount,
        isLike: v.isLike,
      });
    });
    return goalObjectArray;
  };
  var goalListArr = [];
  goalListArr = convertJSONRes(goalList);
  useEffect(() => {
    const requestGoals = async () => {
      // 내 목표 요청
      const response = await goals();
      const { code, data } = response.data;
      setGoalList(data);

      // 닉네임 확인
      if (window.ABridge) setNickname(window.ABridge.getPreference('nickname'));
    };
    const requestGoalsLiked = async () => {
      const response = await goalsLiked({
        pageNumber: pageNumber,
      });
      const { code, data } = response.data;

      setGoalLikedList(data);
      setLoader(false);
    };
    requestGoals();
    requestGoalsLiked();
  }, [loader]);
  useEffect(() => {
    isMounted = true;
    return () => {
      isMounted = false;
    };
  }, [isMounted]);
  useEffect(() => {
    setTimeout(() => {
      if (isMounted === true) {
        setRandomNumber(String(Math.random()));
      }
    }, 4000);
  }, [randomNumber]);

  if (window.ABridge) {
    nickname = window.ABridge.getPreference('nickname');
  } else {
    nickname = '웹으로 접속하신 유저';
  }

  if (goalList.length === 0 && goalLikedList.length === 0) {
    backgroundFlag = 'false';
  } else {
    if (goalList.length > 0) {
      backgroundFlag = 'true';
    } else if (goalLikedList.length > 0) {
      backgroundFlag = 'false';
    } else {
      backgroundFlag = 'true';
    }
  }
  return (
    <React.Fragment>
      <Background height={backgroundFlag}>
        {loader && <SpinnerComponent />}
        <BackgroundHeader>
          <HeaderBox>
            <Header>{`${nickname}님`}</Header>
            <SubHeader>도전 잘하고 계신가요?</SubHeader>
          </HeaderBox>
        </BackgroundHeader>
        {goalList.length === 0 && (
          <MainDashboardComponent
            header={'현재까지'}
            integer={0}
            footer={' 아직 진행중인 도전이 없습니다. 목표를 만들어 도전해보세요!'}
            footerLen={false}
          />
        )}
        {goalList.length > 0 && (
          <MainDashboardComponent
            header={'현재까지'}
            integer={Math.floor(totalAmount)}
            fraction={getFractionPart(totalAmount)}
            footer={'지치지 말고 목표를 향하여 열심히! 당신의 도전을 응원합니다.'}
            footerLen={true}
          />
        )}
        {goalLikedList.length === 0 && (
          <RedirectionCard>
            <RedirectionTitleString>다른 사람들 도전을 보고 싶다면?</RedirectionTitleString>
            <RedirectionSubtitle
              onClick={() => {
                props.history.push('/searchGoal');
              }}
            >
              응원 하러 가기
            </RedirectionSubtitle>
            <RightArrowButton
              src={rightArrowButton}
              onClick={() => {
                props.history.push('/searchGoal');
              }}
            />
          </RedirectionCard>
        )}
        {goalList.length > 0 && (
          <MyGoalHeader
            onClick={() => {
              props.history.push('/myGoalList');
            }}
          >
            <SubProp>내 목표</SubProp>
            <ArrowButton src={rightArrowButton} />
          </MyGoalHeader>
        )}
        <MyGoalWrapper>
          {_.map(goalListArr, (v, i) => (
            <Row justify="center" key={i}>
              <Col span={22}>
                <MyGoal
                  target={v}
                  reRender={() => {
                    setLoader(true);
                  }}
                  onClick={() => {
                    props.history.push('/mainGoalDetail' + `/${v._id}`);
                  }}
                />
              </Col>
            </Row>
          ))}
        </MyGoalWrapper>
        {goalList.length === 0 && goalLikedList.length === 0 && <DummyDiv />}
        {goalList.length === 0 && goalLikedList.length > 0 && <DummyDiv2 />}
        <AddGoalButton
          onClick={() => {
            props.history.push('/goalSetting');
          }}
        >
          목표 추가
        </AddGoalButton>
        {goalLikedList.length > 0 && (
          <OtherGoalsHeader
            onClick={() => {
              props.history.push('/myCheerGoals');
            }}
          >
            <SubProp>내가 응원한 목표</SubProp>
            <ArrowButton src={rightArrowButton} />
          </OtherGoalsHeader>
        )}
        {goalLikedList.length > 0 && (
          <SwiperWrapper>
            <Swiper shouldSwiperUpdate={true}>{goalLikedList4Render(goalLikedList)}</Swiper>
          </SwiperWrapper>
        )}
        {goalLikedList.length > 0 && (
          <SearchOtherGoalsButton
            onClick={() => {
              props.history.push('/searchGoal');
            }}
          >
            다른 목표 더보기
          </SearchOtherGoalsButton>
        )}
      </Background>
    </React.Fragment>
  );
};
export default MainDashboardPage;
