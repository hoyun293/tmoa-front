import React, { useState } from 'react';
import BackHeader from '../../components/main/BackHeader';

import Layout from '../Layout';

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
  }
];

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display:flex;
  margin: 20px;
  margin-bottom: 0;
  padding: 25px 20px;
  border-radius: 5px;
  background: #ffffff;
`;

const MyGoalList = ({ history }) => {

  return(
    <Layout>
      <div style={{backgroundColor:'#E5E5E5', width: '100%', height: '100%'}}>
        <BackHeader title={`목표리스트`} history={history}/>
        <CardList>
          {dumpGoalSummary.map((goal, index) => {
            return (
              <Card key={index}>
                <div>글이 들어갈 곳</div>
                <img src="" alt="준비중"/>
              </Card>
            );
          })}
        </CardList>
      </div>
    </Layout>
  );
}

export default MyGoalList;