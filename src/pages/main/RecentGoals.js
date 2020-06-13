import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';

import { addComma2Number } from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import styled from 'styled-components';

const dumpGoalSummary = [
  {
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 50,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 10,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 20,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 30,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 40,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  },
  {
    percentage: 50,
    Dday: 50,
    goalAmount: 1000000,
    goalName: '베트남여행',
    goalTags: '#신짜오#저가로가자',
    isLike: true
  }
];

const GoalList = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const RecentGoals = () => {

  const [cheerGoalList, setCheerGoalList] = useState([...dumpGoalSummary]);

  useEffect(() => {
    // 테스트용
    // API 요청: 응원한 목표 (10건 생각중)
  }, []);

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
    return(
      <div style={{flexBasis: '40%', border: '1.5px solid #F2F2F2', borderRadius: '5px', margin: '10 5'}} key={index}>
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
      <div style={{backgroundColor:'#E5E5E5'}}>
        <BackHeader title={`최근 등록 목표`} history={history}/>
        <GoalList>
          {goalSummaryComponentList}  
        </GoalList>
      </div>
    </Layout>
  );
}

export default RecentGoals;