import React, { useState, useEffect } from 'react';
import BackHeader from '../../components/main/BackHeader';

import { addComma2Number } from '../../js/CommonFunc';

import Layout from '../Layout';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

const MyCheerGoals = () => {

  const [cheerGoalList, setCheerGoalList] = useState([]);

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

  const infiniteScroll = async (e) => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, documnet.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, documnet.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if(scrollHeight === scrollTop + clientHeight) {
      // API 요청: 응원한 목표 (10건 생각중 // Await)
      setCheerGoalList([...cheerGoalList, ...dumpGoalSummary]);  
    }
  }

  const cheerGoalList4Render = () => {
    // cheerGoalList
    const ROW_COUNT = 2;
    const size = ((cheerGoalList.length - cheerGoalList.length%ROW_COUNT) / ROW_COUNT) + (cheerGoalList.length%ROW_COUNT);
    const countArray = new Array(size).fill(0);
    const renderArray = countArray.map((array, index) => {
      const result = [];
      const newIndex = index * 2
      result.push(cheerGoalList[newIndex]);
      if(cheerGoalList[newIndex+1]) result.push(cheerGoalList[newIndex+1]);
      return result;
    });

    return renderArray.map((colArray, rowIndex) => {
      <Row key={rowIndex}>
        {colArray.map((goal, colIndex) => {
          return (
            <Col key={rowIndex*ROW_COUNT + colIndex} span={12} style={{padding:12}}>
              <GoalSummaryComponent
                  percentage={goal.percentage}
                  Dday={goal.Dday}
                  goalAmount={addComma2Number(goal.goalAmount)}
                  goalName={goal.goalName}
                  goalTags={goal.goalTags}
                  isLike={goal.isLike}
                />
            </Col>
          );
        })}
      </Row>
    });
  }

  useEffect(() => {
    // 테스트용
    // API 요청: 응원한 목표 (10건 생각중)
    setCheerGoalList([...cheerGoalList, ...dumpGoalSummary]);
    window.addEventListener('scroll', infiniteScroll);
  }, []);

  return (
    <Layout>
      <BackHeader title={`응원한 목표 ${cheerGoalList.length}건`} history={history}/>
    </Layout>
  );
}

export default MyCheerGoals