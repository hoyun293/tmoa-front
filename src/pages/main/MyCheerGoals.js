import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';
import GoalPopup from '../../components/main/GoalPopup';

import { addComma2Number } from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import styled from 'styled-components';

const dumpGoalSummary = [
  {
    _id: 1,
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 2,
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 3,
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 4,
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 5,
    percentage: 50,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 6,
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 7,
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 8,
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 9,
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 10,
    percentage: 50,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  }
];

const dummyTarget = {
  category: '여행',
  targetAmount: 6000000,
  currentAmount: 3000000,
  dueDate: 365,
  tagList: ['자동차', '스포츠카'],
  isLike: true,
  likeCount: 100
}

const GoalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;


const MyCheerGoals = ({ history }) => {

  const [cheerGoalList, setCheerGoalList] = useState([...dumpGoalSummary]);
  const [togglePopupDisplay, setTogglePopupDisplay] = useState(false);
  const [goalPopupTarget, setGoalPopupTarget] = useState({});

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if(scrollHeight === scrollTop + clientHeight) {
      // API 요청: 응원한 목표 (10건 생각중 // Await)
      setCheerGoalList([...cheerGoalList, ...dumpGoalSummary]);
    }
  }

  const togglePopup = (goal) => {
    console.log(goal);
    setTogglePopupDisplay(!togglePopupDisplay);
    setGoalPopupTarget(dummyTarget);
  }

  window.addEventListener('scroll', infiniteScroll);
  let goalSummaryComponentList = cheerGoalList.map((goal, index) => {
    /* key goal.id로 변경예정*/
    return(
      <div key={index} 
        style={{flexBasis: '40%', border: '1.5px solid #F2F2F2', borderRadius: '5px', margin: '10 5'}}
        onClick={(e) => togglePopup(goal)}>
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
      <div style={{backgroundColor:'#E5E5E5'}}>
        <BackHeader title={`응원한 목표 ${cheerGoalList.length}건`} history={history}/>
        <GoalList>
          {goalSummaryComponentList}  
        </GoalList>
      </div>
    </Layout>
  );
}

export default MyCheerGoals;