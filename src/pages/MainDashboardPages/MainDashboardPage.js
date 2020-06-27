import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSummaryComponent from '../../components/GoalSummaryComponents/GoalSummaryComponent';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';
import {
  addComma2Number,
  convertStrToDate,
  calculateRealTimeTotalAmount,
  getFractionPart,
  getCategoryName,
} from '../../js/CommonFunc';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import rightArrowButton from '../../../public/assets/icon/rightArrowButton.svg';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import MyGoal from '../../components/MainDashboard/MyGoal';
import * as _ from 'lodash';

import { goals, goalsLiked } from '../../api/main-dashboard-api';

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
`;

const BackgroundHeader = styled.div`
  width: 100%;
  height: 18rem;
  background: linear-gradient(
      180deg,
      rgba(162, 227, 201, 0.83) 0%,
      rgba(162, 227, 201, 0.52) 0.01%,
      rgba(255, 255, 255, 0) 55.2%
    ),
    #16b877;
  background-blend-mode: soft-light, normal;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  padding-top: 3.5rem;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.2rem;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;
const SubHeader = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`;

const HeaderBox = styled.div`
  position: relative;

  flex: display;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
`;

const SwiperWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  height: 24rem;
`;
const GoalSummaryComponentBox = styled.div`
  margin-top: 2rem;
  display: flex;
`;
const GoalSummaryComponentSplateer = styled.div`
  width: 1rem;
`;

const SubPropRow = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 1.8rem;
`;
const MyGoalHeader = styled(SubPropRow)`
  margin-top: 16.4rem;
`;
const AddGoalButton = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  height: 5rem;
  line-height: 5rem;
  background: #118a59;
  border-radius: 5px;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  color: #ffffff;
`;
const OtherGoalsHeader = styled(SubPropRow)`
  margin-top: 2.9rem;
`;
const SubProp = styled.div`
  margin-right: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const ArrowButton = styled.img`
  margin-left: auto;
  line-height: 3.2rem;
`;
const MyGoalWrapper = styled.div``;

const SearchOtherGoalsButton = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  height: 5rem;
  line-height: 5rem;
  background: #ffffff;
  border-radius: 5px;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
  color: #118a59;
  border: 1px solid #118a59;
`;
var totalAmount = 0;
var currentAmount = 0;
var isMounted;
var pageNumber = 1;
const colorParams = {
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
};
const goalLikedList4Render = (list) => {
  const goalLikedList = list;
  const ROW_COUNT = 2;
  const size = (goalLikedList.length - (goalLikedList.length % ROW_COUNT)) / ROW_COUNT;
  const countArray = new Array(size).fill(0);
  const renderArray = countArray.map((array, index) => {
    const result = [];
    const newIndex = index * 2;
    result.push(goalLikedList[newIndex]);
    if (goalLikedList[newIndex + 1]) result.push(goalLikedList[newIndex + 1]);

    return result;
  });

  return renderArray.map((colArray, rowIndex) => {
    return (
      <div key={rowIndex}>
        <GoalSummaryComponentBox>
          {colArray.map((goalLikedSummary, colIndex) => {
            return (
              <GoalSummaryComponent
                key={colIndex}
                percentage={goalLikedSummary.percentage}
                Dday={goalLikedSummary.Dday}
                goalAmount={addComma2Number(goalLikedSummary.targetAmount)}
                goalName={goalLikedSummary.title}
                goalTag={goalLikedSummary.tags}
                isLike={goalLikedSummary.isLike}
              />
            );
          })}
        </GoalSummaryComponentBox>
      </div>
    );
  });
};
const MainDashboardPage = (props) => {
  const [randomNumber, setRandomNumber] = useState('');
  const [totalSavingAmount, setTotalSavingAmount] = useState(0);
  const [goalList, setGoalList] = useState([]);
  const [goalLikedList, setGoalLikedList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [nickname, setNickname] = useState('홍길동');
  //const [isMounted, setIsMounted] = useState(false);
  const convertJSONRes = (jsonArray) => {
    var goalObjectArray = [];
    totalAmount = 0;
    _.map(jsonArray, (v, i) => {
      currentAmount = calculateRealTimeTotalAmount(
        Number(v.currentAmount),
        Number(v.savingAmount),
        v.goalStartDate,
        v.goalEndDate,
        v.savingCode,
        v.savingDetailCode
      );
      totalAmount += currentAmount;
      goalObjectArray.push({
        _id: v._id,
        title: v.title,
        targetAmount: Number(v.targetAmount),
        currentAmount: currentAmount,
        category: v.category,
        dueDate: Math.round((convertStrToDate(v.goalEndDate) - new Date()) / (1000 * 60 * 60 * 24)),
        tagList: v.tags,
        likeCount: v.likeCount,
        isLike: v.isLike,
      });
    });

    return goalObjectArray;
  };
  useEffect(() => {
    const requestGoals = async () => {
      // 내 목표 요청
      const response = await goals();
      const { code, data } = response.data;
      setGoalList(data);

      // 닉네임 확인
      if (window.ABridge) setNickname(window.ABridge.getPreference('nickname'));
    };
    const requestGoalsLiked = async () => {
      const response = await goalsLiked({
        pageNumber: pageNumber,
      });
      const { code, data } = response.data;
      setGoalLikedList(data);
      console.log(data);
      setLoader(false);
    };
    requestGoals();
    requestGoalsLiked();
  }, []);
  useEffect(() => {
    isMounted = true;

    return () => {
      isMounted = false;
    };
  });
  useEffect(() => {
    setTimeout(() => {
      if (isMounted === true) {
        setRandomNumber(String(Math.random()));
      }
    }, 4000);
  }, [randomNumber, isMounted]);
  return (
    <React.Fragment>
      <Background>
        <BackgroundHeader>
          <HeaderBox>
            <Header>홍길동님</Header>
            <SubHeader>도전 잘하고 계신가요?</SubHeader>
          </HeaderBox>
        </BackgroundHeader>

        <MyGoalHeader
          onClick={() => {
            props.history.push('/myGoalList');
          }}
        >
          <SubProp>내 목표</SubProp>
          <ArrowButton src={rightArrowButton} />
        </MyGoalHeader>
        <MyGoalWrapper>
          {_.map(convertJSONRes(goalList), (v, i) => (
            <Row justify="center" key={i}>
              <Col span={22}>
                <MyGoal target={v} />
              </Col>
            </Row>
          ))}
        </MyGoalWrapper>
        <MainDashboardComponent
          header={'현재까지'}
          integer={Math.floor(totalAmount)}
          fraction={getFractionPart(totalAmount)}
          footer={'지치지 말고 목표를 향하여 열심히! 당신의 도전을 응원합니다.'}
          footerLen={true}
        />
        <AddGoalButton
          onClick={() => {
            props.history.push('/goalSetting');
          }}
        >
          목표 추가
        </AddGoalButton>

        <OtherGoalsHeader
          onClick={() => {
            props.history.push('/myCheerGoals');
          }}
        >
          <SubProp>내가 응원한 목표</SubProp>
          <ArrowButton src={rightArrowButton} />
        </OtherGoalsHeader>
        <SwiperWrapper>
          <Swiper rebuildOnUpdate={true} shouldSwiperUpdate={true}>
            {goalLikedList4Render(goalLikedList)}
          </Swiper>
        </SwiperWrapper>
        <SearchOtherGoalsButton
          onClick={() => {
            props.history.push('/searchGoal');
          }}
        >
          다른 목표 더보기
        </SearchOtherGoalsButton>
      </Background>
    </React.Fragment>
  );
};
export default MainDashboardPage;
