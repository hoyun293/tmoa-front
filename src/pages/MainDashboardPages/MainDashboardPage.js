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

import { goals } from '../../api/main-dashboard-api';

const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
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

var totalAmount = 0;
var currentAmount = 0;
const MainDashboardPage = () => {
  const [randomNumber, setRandomNumber] = useState('');
  const [totalSavingAmount, setTotalSavingAmount] = useState(0);
  const [goalList, setGoalList] = useState([]);
  const convertJSONRes = (jsonArray) => {
    console.log(jsonArray);
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
        category: getCategoryName(v.category),
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
      const response = await goals();
      const { code, data } = response.data;
      setGoalList(data);
    };
    requestGoals();
  }, []);

  setTimeout(() => {
    setRandomNumber(String(Math.random()));
  }, 4000);

  return (
    <React.Fragment>
      <Background>
        <BackgroundHeader>
          <HeaderBox>
            <Header>홍길동님</Header>
            <SubHeader>도전 잘하고 계신가요?</SubHeader>
          </HeaderBox>
        </BackgroundHeader>
        <MyGoalHeader>
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
        <OtherGoalsHeader>
          <SubProp>내가 응원한 목표</SubProp>
          <ArrowButton src={rightArrowButton} />
        </OtherGoalsHeader>
        <SwiperWrapper>
          <Swiper>
            <div>
              <GoalSummaryComponentBox>
                <GoalSummaryComponent
                  percentage={40}
                  Dday={20}
                  goalAmount={addComma2Number(40000000)}
                  goalName={'벤츠사자'}
                  goalTags={'#자동치#스포츠카'}
                  isLike={false}
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
                  percentage={60}
                  Dday={30}
                  goalAmount={addComma2Number(300000)}
                  goalName={'등록금내자'}
                  goalTags={'#넘나비싼것#대출#취업해도그게그거'}
                  isLike={true}
                />
              </GoalSummaryComponentBox>
            </div>
            <div>
              <GoalSummaryComponentBox>
                <GoalSummaryComponent
                  percentage={35}
                  Dday={100}
                  goalAmount={addComma2Number(10000000)}
                  goalName={'맞춤정장'}
                  goalTags={'#비쌈#하나쯤은'}
                  isLike={true}
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
                  percentage={80}
                  Dday={50}
                  goalAmount={addComma2Number(2000000)}
                  goalName={'베트남여행'}
                  goalTags={'#신짜오#저가로가자'}
                  isLike={true}
                />
              </GoalSummaryComponentBox>
            </div>
          </Swiper>
        </SwiperWrapper>
      </Background>
    </React.Fragment>
  );
};
export default MainDashboardPage;
