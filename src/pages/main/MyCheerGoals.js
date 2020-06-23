import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';
import GoalPopup from '../../components/main/GoalPopup';

import { getMyCheerGoals } from '../../api/mygoal-list-api';

import { addComma2Number } from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import styled from 'styled-components';

const dumpGoalSummary = [
  {
    _id: 1,
    title: '코로나 끝나고 여행가자!',
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 2,
    title: '코로나 끝나고 여행가자!',
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 3,
    title: '코로나 끝나고 여행가자!',
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 4,
    title: '코로나 끝나고 여행가자!',
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 5,
    title: '코로나 끝나고 여행가자!',
    percentage: 50,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 6,
    title: '코로나 끝나고 여행가자!',
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 7,
    title: '코로나 끝나고 여행가자!',
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 8,
    title: '코로나 끝나고 여행가자!',
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 9,
    title: '코로나 끝나고 여행가자!',
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    _id: 10,
    title: '코로나 끝나고 여행가자!',
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
  title: '코로나 끝나고 여행가자!',
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
  margin-top: 5px;
`;


const MyCheerGoals = ({ history }) => {

  const [cheerGoalList, setCheerGoalList] = useState([...dumpGoalSummary]);
  const [togglePopupDisplay, setTogglePopupDisplay] = useState(false);
  const [goalPopupTarget, setGoalPopupTarget] = useState({});
  let pageNumber = 1;

  const requestCheerGoal = async () => {
    const response = await getMyCheerGoals(pageNumber);
    const { data, code } = response;

    console.log(data);
    
  }

  useEffect(() => {
    requestCheerGoal();
  }, []);

  const togglePopup = (goal) => {
    console.log(goal);
    setTogglePopupDisplay(!togglePopupDisplay);
    setGoalPopupTarget(dummyTarget);
  }

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if(scrollHeight === scrollTop + clientHeight) {
      // API 요청: 응원한 목표 (10건 생각중 // Await)
      setCheerGoalList([...cheerGoalList, ...dumpGoalSummary]);
    }
  }

  window.addEventListener('scroll', infiniteScroll);
  let goalSummaryComponentList = cheerGoalList.map((goal, index) => {
    /* key goal.id로 변경예정*/
    return(
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

  return (
    <Layout>
      <GoalPopup display={togglePopupDisplay} toggle={togglePopup} target={goalPopupTarget} />
      <div style={{backgroundColor:'#F2F2F2'}}>
        <BackHeader title={`응원한 목표`} history={history}/>
        <GoalList>
          {goalSummaryComponentList}  
        </GoalList>
      </div>
    </Layout>
  );
}

export default MyCheerGoals;