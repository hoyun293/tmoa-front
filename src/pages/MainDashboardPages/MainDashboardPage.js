import React, { useState } from 'react';
import style from 'styled-components';
import { addComma2Number } from '../../js/CommonFunc';
import FlipNumbers from 'react-flip-numbers';
import GoalSummaryComponent from '../../components/GoalSummaryComponent/GoalSummaryComponent';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const Background = style.div`
  background-color: #e3e3e3;
  border-top: 26rem solid #118a59;
  width: 100%;
  height: auto;
`;

const TotalAmountCard = style.div`
  position: absolute;
  top:16.4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 18rem;
  background: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  text-align: center;
`;
const TotalAmountCardHeader = style.div`
  position: absolute;
  margin-top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const TotalAmountCardBody = style.div` 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-top: 5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.2rem;
`;
const TotalAmountCardFooter = style.div`
  position: absolute;
  width: 23rem;
  margin-top: 10.3rem;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const SwiperWrapper = style.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;
const GoalSummaryComponentBox = style.div`
  margin-top: 10rem;
  display:flex;
`;
const GoalSummaryComponentSplateer = style.div`
  width: 1rem;
`;

const SubPropRow = style.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 1.8rem;
`;
const MyGoalHeader = style(SubPropRow)`
  margin-top: 12.4rem;
`;
const OtherGoalsHeader = style(SubPropRow)`
  margin-top: 2.9rem;
`;
const SubProp = style.div`
  margin-right: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const ArrowButton = style.div`
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
        <TotalAmountCard>
          <TotalAmountCardHeader>현재까지</TotalAmountCardHeader>
          <TotalAmountCardBody>
            {addComma2Number(3000000)}.
            <FlipNumbers
              height={18}
              width={10}
              color="red"
              background="white"
              play
              duration={3}
              perspective={200}
              numbers={tempTotalAmountFraction}
            />
            원
          </TotalAmountCardBody>
          <TotalAmountCardFooter>
            지치지 말고 목표를 향하여 열심히! 당신의 도전을 응원합니다.
          </TotalAmountCardFooter>
        </TotalAmountCard>
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
                  Dday={20}
                  goalAmount={addComma2Number(40000000)}
                  goalName={'벤츠사자'}
                  goalTags={'#자동치#스포츠카'}
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
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
                  Dday={100}
                  goalAmount={addComma2Number(10000000)}
                  goalName={'맞춤정장'}
                  goalTags={'#비쌈#하나쯤은'}
                />
                <GoalSummaryComponentSplateer />
                <GoalSummaryComponent
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
