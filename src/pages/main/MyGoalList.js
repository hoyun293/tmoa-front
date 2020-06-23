import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';
import MyGoalCard from '../../components/main/MyGoalCard';

import { getCategoryName, convertStrToDate, createNewDateTime } from '../../js/CommonFunc';
import { getMyGoals } from '../../api/mygoal-list-api';

import Layout from '../Layout';

import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const MyGoalList = ({ history }) => {

  const [myGoalList, setMyGoalList] = useState([]);

  const sliceStrDate = (strDate) => {
    const yyyymmdd = strDate.slice(0, 8);
    const yyyy = yyyymmdd.slice(0, 4);
    const mm = yyyymmdd.slice(0, 2);
    const dd = yyyymmdd.slice(0, 2);

    return `~${yyyy}.${mm}.${dd}`;
  }

  useEffect(() => {
    const requestGoals = async () => {
      const response = await getMyGoals();
      const { data, code } = response.data;

      const list = data.map((value, index) => {
        
        const { _id, category, title, currentAmount, targetAmount, goalEndDate, goalStartDate } = value;
        
        return {
          _id,
          category,
          status: "진행중",
          title,
          currentAmount,
          targetAmount,
          goalEndDate: sliceStrDate(goalEndDate),
          dday: Math.round((createNewDateTime(convertStrToDate(goalEndDate)) - createNewDateTime(convertStrToDate(goalStartDate))) / (1000 * 60 * 60 * 24))
        }
      });

      setMyGoalList(list);
    }

    requestGoals();
  }, []);

  const moveGoalDetail = (e, id) => {
    console.log(id);
    history.push('/mainGoalDetail')
  }

  return(
    <Layout>
      <div style={{backgroundColor:'#F2F2F2', width: '100%', height:'100vh'}}>
        <BackHeader title={`목표리스트`} history={history}/>
        <CardList>
          {myGoalList.map(goal => {
            return (
              <MyGoalCard goal={goal} key={goal._id} moveGoalDetail={moveGoalDetail} />
            )
          })}
        </CardList>
      </div>
    </Layout>
  );
}

export default MyGoalList;