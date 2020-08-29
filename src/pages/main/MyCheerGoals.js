import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';
import GoalPopup from '../../components/main/GoalPopup';

import { getMyCheerGoals } from '../../api/mygoal-list-api';

import {
  addComma2Number,
  convertStrToDate,
  createNewDateTime,
  getCategoryName,
} from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import styled from 'styled-components';

const dummyTarget = {
  category: '여행',
  title: '코로나 끝나고 여행가자!',
  targetAmount: 6000000,
  currentAmount: 3000000,
  dueDate: 365,
  tagList: ['자동차', '스포츠카'],
  isLike: true,
  likeCount: 100,
};

const GoalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`;

let block = false;
const MyCheerGoals = ({ history }) => {
  const [cheerGoalList, setCheerGoalList] = useState([]);
  const [togglePopupDisplay, setTogglePopupDisplay] = useState(false);
  const [goalPopupTarget, setGoalPopupTarget] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const requestCheerGoal = async () => {
    const response = await getMyCheerGoals(pageNumber);
    const { data, code } = response.data;

    const responseList = data.map((v) => {
      const {
        _id,
        title,
        targetAmount,
        currentAmount,
        goalStartDate,
        goalEndDate,
        tags,
        isLike,
        category,
        likeCount,
      } = v;
      return {
        _id,
        title,
        percentage: Math.floor((currentAmount / targetAmount) * 100),
        Dday: Math.round(
          (createNewDateTime(convertStrToDate(goalEndDate)) -
            createNewDateTime(convertStrToDate(goalStartDate))) /
            (1000 * 60 * 60 * 24)
        ),
        goalAmount: currentAmount,
        goalName: title,
        goalTags: `#${tags.join('#')}`,
        isLike,
        category,
        goalTagList: tags,
        targetAmount,
        currentAmount,
        likeCount,
      };
    });
    if (responseList.length !== 0 && responseList.length % 10 === 0) {
      setPageNumber(pageNumber + 1);
    } else {
      block = true;
    }
    return responseList;
  };

  const requestUseEffect = async () => {
    const response = await requestCheerGoal();
    setCheerGoalList([...response]);
  };

  useEffect(() => {
    requestUseEffect();
  }, []);

  useEffect(() => {}, [pageNumber]);

  useEffect(() => {}, [cheerGoalList]);

  useEffect(() => {
    const afterLikeList = cheerGoalList.map((goal) => {
      if (goal._id === goalPopupTarget._id) {
        goal.isLike = !goal.isLike;
        if (goal.isLike) {
          goal.likeCount += 1;
        } else {
          goal.likeCount -= 1;
        }
      }
      return goal;
    });
    setCheerGoalList(afterLikeList);
  }, [goalPopupTarget]);

  const togglePopup = (goal) => {
    setTogglePopupDisplay(!togglePopupDisplay);
    const {
      _id,
      category,
      goalName,
      goalTagList,
      currentAmount,
      targetAmount,
      Dday,
      isLike,
      percentage,
      likeCount,
    } = goal;
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
      likeCount,
    };
    setGoalPopupTarget(Goal4Popup);
  };

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight === scrollTop + clientHeight) {
      if (block) return;
      const response = await requestCheerGoal();
      if (response.length === 0 || cheerGoalList.length === 0) return;
      setCheerGoalList([...cheerGoalList, ...response]);
    }
  };

  window.addEventListener('scroll', infiniteScroll);
  let goalSummaryComponentList = cheerGoalList.map((goal, index) => {
    return (
      <div
        key={goal._id}
        onClick={(e) => togglePopup(goal)}
        style={{
          flexBasis: '47%',
          borderRadius: '6px',
          border: '0.5px solid #F2F2F2',
          margin: '10 5',
          boxShadow: '0 2 4 rgba(0,0,0,0.1)',
        }}
      >
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

  return (
    <Layout>
      <GoalPopup display={togglePopupDisplay} toggle={togglePopup} target={goalPopupTarget} />
      <div style={{ backgroundColor: '#F2F2F2', height: '100vh' }}>
        <BackHeader title={`응원한 목표`} history={history} />
        <GoalList>{goalSummaryComponentList}</GoalList>
      </div>
    </Layout>
  );
};

export default MyCheerGoals;
