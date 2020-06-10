import React from 'react';
import { useState, useCallback } from 'react';

import { addComma2Number } from '../../js/CommonFunc';

import Layout from '../Layout';
import BadgeGroup from '../../components/goalSearch/BadgeGroup';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';

import 'antd/dist/antd.css';
import { Row, Col, Input } from 'antd';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';

import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

const searchGoal = () => {
  const [searchWord, setSearchWord] = useState('');

  const dumpBadgeList = [
    {
      index: 1,
      link: '/searchResult',
      name: '자동차',
    },
    {
      index: 2,
      link: '/searchResult',
      name: '비행기',
    },
    {
      index: 3,
      link: '/searchResult',
      name: '헬리콥터',
    },
    {
      index: 4,
      link: '/searchResult',
      name: '일이삼사요육칠팔',
    },
  ];

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
    }
  ];

  const onChangeSearchWorld = useCallback((e) => {
    setSearchWord(e.target.value);
  }, []);

  const searchPressEnter = (e) => {
    console.log(`${searchWord} 검색!`);
  };

  const linkRecentTargetList = () => {
    console.log('최근 등록 목표');
  };

  const goalSummaryList4Render = () => {
    // API 요청: 최근 등록 목표
    const goalSummaryList = [...dumpGoalSummary];
    // 한번에 두 개씩 보여주기
    const ROW_COUNT = 2;
    const size = ((goalSummaryList.length - goalSummaryList.length%ROW_COUNT) / ROW_COUNT) + (goalSummaryList.length%ROW_COUNT);
    const countArray = new Array(size).fill(0);
    const renderArray = countArray.map((array, index) => {
      const result = [];
      const newIndex = index * 2
      result.push(goalSummaryList[newIndex]);
      if(goalSummaryList[newIndex+1]) result.push(goalSummaryList[newIndex+1]);
      return result;
    });

    return renderArray.map((colArray, rowIndex) => {
      return (
        <Row key={rowIndex}>
          {colArray.map((goalSummary, colIndex) => {
            return (
              <Col key={rowIndex*ROW_COUNT + colIndex} span={12} style={{padding:12}}>
                <GoalSummaryComponent
                  percentage={goalSummary.percentage}
                  Dday={goalSummary.Dday}
                  goalAmount={addComma2Number(goalSummary.goalAmount)}
                  goalName={goalSummary.goalName}
                  goalTags={goalSummary.goalTags}
                  isLike={goalSummary.isLike}
                />
              </Col>
            );            
          })}
        </Row>
      );

    });
  }

  return (
    <Layout>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#E5E5E5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 260,
          backgroundColor: '#118A59',
        }}
      ></div>
      <Row justify="center">
        <Col span={22}>
          <Row style={{ paddingTop: 90 }}>
            <Col span={24}>
              <Input
                size="large"
                suffix={<SearchOutlined />}
                style={{ borderRadius: 6 }}
                placeholder="검색어를 입력해 주세요"
                value={searchWord}
                onChange={onChangeSearchWorld}
                onPressEnter={(e) => searchPressEnter(e)}
              ></Input>
            </Col>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <Col span={24}>
              <BadgeGroup badgeList={dumpBadgeList} />
            </Col>
          </Row>
          <Row style={{ paddingTop: 30 }}>
            <Col span={23}>
              <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>최근 등록 목표</p>
            </Col>
            <Col span={1}>
              <p style={{ paddingTop: '0.5rem' }} onClick={linkRecentTargetList}>
                <ArrowRightOutlined style={{ color: '#222222' }} />
              </p>
            </Col>
          </Row>
          <Row>
            <Swiper>
              {goalSummaryList4Render()}
            </Swiper>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default searchGoal;
