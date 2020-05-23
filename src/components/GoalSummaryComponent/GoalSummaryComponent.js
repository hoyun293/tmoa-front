import React from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const SummaryCard = style.div`
    width: 15.5rem;
    height: 22rem;
    border-radius: 6px;
    background: #FFFFFF;
    padding-top: 1.7rem;
    margin-left: 2rem;
`;
const CircularProgessWarpper = style.div`
    width: 12rem;
    height: 12rem;
    margin-left: 1.7rem;
    margin-top: 1.7rem;
    margin-right: 1.8rem;
    margin-bottom: 1.3rem;
`;
const CircularString = style.div`
    width:8.7rem;
    height: 4rem;
    text-align: center;
`;
const CircularDay = style.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.8rem;
  letter-spacing: 0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const CircularAmount = style.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const Splitter = style.div`
  width: 13rem;
  height: 0rem;
  margin-left: 1.2rem;
  margin-right: 1.3rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(170, 170, 170, 0.3);
`;

const GoalSummaryBox = style.div`
  width: 12rem;
  height: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.6rem;
  display:flex;  
`;

const GoalTitle = style.div`
  margin-right: auto;
  font-style: normal;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const HeartIcon = style.img`
  width: 2rem;
  height: 1.8rem;
  margin-left: auto;
`;
const GoalTag = style.div`
  font-style: normal;
  font-size: 0.9rem;
  color: grey;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-left: 1.5rem;
  margin-right: 1.6rem;
`;
const GoalSummaryComponent = () => {
  const percentage = 66;
  return (
    <React.Fragment>
      <Swiper>
        <div>
          <SummaryCard>
            <CircularProgessWarpper>
              <CircularProgressbarWithChildren value={percentage}>
                <CircularString>
                  <CircularDay>D-20</CircularDay>
                  <CircularAmount>40,000,000원</CircularAmount>
                </CircularString>
              </CircularProgressbarWithChildren>
            </CircularProgessWarpper>
            <Splitter />
            <GoalSummaryBox>
              <GoalTitle>벤츠사자</GoalTitle>
              <HeartIcon src="/public/assets/img/heartIcon.svg" />
            </GoalSummaryBox>
            <GoalTag>#자동차#스포츠카</GoalTag>
          </SummaryCard>
          <SummaryCard>
            <CircularProgessWarpper>
              <CircularProgressbarWithChildren value={percentage} text={'500,000원'}>
                <div>
                  <strong>66%</strong> mate
                </div>
              </CircularProgressbarWithChildren>
            </CircularProgessWarpper>
          </SummaryCard>
        </div>
        <div>
          <SummaryCard>
            <CircularProgressbarWithChildren value={percentage} text={'600,000원'}>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>66%</strong> mate
              </div>
            </CircularProgressbarWithChildren>
          </SummaryCard>
          <SummaryCard>
            <CircularProgressbarWithChildren value={percentage} text={'700,000원'}>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>66%</strong> mate
              </div>
            </CircularProgressbarWithChildren>
          </SummaryCard>
        </div>
      </Swiper>
    </React.Fragment>
  );
};
export default GoalSummaryComponent;
