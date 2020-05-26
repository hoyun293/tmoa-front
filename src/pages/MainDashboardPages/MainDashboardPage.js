import React, { useState } from 'react';
import styled from 'styled-components';
import GoalSummaryComponent from '../../components/GoalSummaryComponent/GoalSummaryComponent';
import MainDashboardComponent from '../../components/MainDashboardStepComponents/MainDashboardComponent';
import { addComma2Number } from '../../js/CommonFunc';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const Background = styled.div`
  background-color: #e3e3e3;
  border-top: 26rem solid #118a59;
  width: 100%;
  height: auto;
`;
const SwiperWrapper = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;
const GoalSummaryComponentBox = styled.div`
  margin-top: 10rem;
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
  margin-top: 12.4rem;
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
const ArrowButton = styled.div`
  margin-left: auto;
`;

const MainDashboardPage = () => {
  const [tempTotalAmountFraction, setTempTotalAmountFraction] = useState('');

  setTimeout(() => {
    setTempTotalAmountFraction(String(Math.floor(Math.random() * 1000)));
  }, 3000);
  return (
    <React.Fragment>
      <Background>
        <MainDashboardComponent
          header={'현재까지'}
          integer={3000000}
          fraction={tempTotalAmountFraction}
          footer={'지치지 말고 목표를 향하여 열심히! 당신의 도전을 응원합니다.'}
          footerLen={true}
        />
        <MyGoalHeader>
          <SubProp>내 목표</SubProp>
          <ArrowButton>></ArrowButton>
        </MyGoalHeader>
        <OtherGoalsHeader>
          <SubProp>내가 응원한 목표</SubProp>
          <ArrowButton>></ArrowButton>
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
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
                  percentage={60}
                  Dday={30}
                  goalAmount={addComma2Number(300000)}
                  goalName={'등록금내자'}
                  goalTags={'#넘나비싼것#대출'}
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
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
                  percentage={80}
                  Dday={50}
                  goalAmount={addComma2Number(2000000)}
                  goalName={'베트남여행'}
                  goalTags={'#신짜오#저가로가자'}
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
