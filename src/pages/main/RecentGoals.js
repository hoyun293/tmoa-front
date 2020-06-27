import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';
import GoalPopup from '../../components/main/GoalPopup';

import { getRecentGoals } from '../../api/mygoal-list-api';
import { addComma2Number, convertStrToDate, createNewDateTime, getCategoryName } from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import styled from 'styled-components';

let block = false;
const RecentGoals = () => {

  const GoalList = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  `;

  const [cheerGoalList, setCheerGoalList] = useState([]);
  const [togglePopupDisplay, setTogglePopupDisplay] = useState(false);
  const [goalPopupTarget, setGoalPopupTarget] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const requestRecentGoals = async() => {
    if(block) return;
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
    if(responseList.length !== 0 && responseList.length%10 === 0) {
      setPageNumber(pageNumber + 1);
    } else {
      block = true;
    }
    return responseList;
  }

  const requestUseEffect = async () => {
    const response = await requestRecentGoals();
    setCheerGoalList([...response]);
  }

  useEffect(() => {
    requestUseEffect();
  }, []);

  useEffect(() => {
  }, [pageNumber]);

  useEffect(() => {
  }, [cheerGoalList]);


  const togglePopup = (goal) => {
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

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if(scrollHeight === scrollTop + clientHeight && !block) {
      // API 요청: 응원한 목표 (10건 생각중 // Await)
      if(block) return;
      const response = await requestRecentGoals();
      if(response.length === 0 || cheerGoalList.length === 0) return;
      setCheerGoalList([...cheerGoalList, ...response]);
    }
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

  return (
    <Layout>
      <GoalPopup display={togglePopupDisplay} toggle={togglePopup} target={goalPopupTarget} />
      <div style={{backgroundColor:'#F2F2F2'}}>
        <BackHeader title={`최근 등록 목표`} history={history}/>
        <GoalList>
          {goalSummaryComponentList}  
        </GoalList>
      </div>
    </Layout>
  );
}

export default RecentGoals;