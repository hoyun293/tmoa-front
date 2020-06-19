import React, { useState } from 'react';
import BackHeader from '../../components/main/BackHeader';
import MyGoalCard from '../../components/main/MyGoalCard';

import Layout from '../Layout';

import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const dumpMyGoalList = [
  {
    _id: "5e317ef9483493ffd",
    title : "맥북구입",
    targetAmount : "2134000", 
    goalStartDate : "202006021500", 
    goalEndDate : "202008251500",
    tags : ["애플","비싸당","신품" ],
    category : "DA",
    savingAmount : "100000",
    savingTime : "21",  
    currentAmount : "180000",
    likeNumber : "15",
    isLike : true,
    status: "진행중"
  },
  {
    _id: "5e317ef9483493aad",
    title : "여행가장",
    targetAmount : "2134000", 
    goalStartDate : "2020.06.02", 
    goalEndDate : "2020.08.25",
    tags : ["수영","재밌당","호텔" ],
    category : "T",
    savingAmount : "100000",
    savingTime : "21",  
    currentAmount : "180000",
    likeNumber : "15",
    isLike : true,
    status: "다시도전"
  }
]

const MyGoalList = ({ history }) => {

  return(
    <Layout>
      <div style={{backgroundColor:'#E5E5E5', width: '100%', height: '100%'}}>
        <BackHeader title={`목표리스트`} history={history}/>
        <CardList>
          {dumpMyGoalList.map(goal => {
            return (
              <MyGoalCard goal={goal} />
            )
          })}
        </CardList>
      </div>
    </Layout>
  );
}

export default MyGoalList;