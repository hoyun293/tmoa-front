import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from 'styled-components';
import 'swiper/css/swiper.css';
const CommonStyle = style.div`
    font-style: normal;
    letter-spacing: 0.05px;
    font-feature-settings: 'pnum' on, 'lnum' on;  
`;
const SummaryCard = style.div`
    height: 22rem;
    border-radius: 0.6rem;
    background: #FFFFFF;
    padding-top: 1.7rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 1;
`;
const CircularProgessWarpper = style.div`
    width: 12rem;
    height: 12rem;
    margin-top: 1.7rem;
    margin-bottom: 1.3rem;
    margin: 0 auto;
`;
const CircularString = style.div`
    width:8.7rem;
    height: 4rem;
    text-align: center;
`;
const CircularDay = style(CommonStyle)`
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.8rem;
`;
const CircularAmount = style(CommonStyle)`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.8rem;
`;

const Splitter = style.div`
  width: 13rem;
  height: 0rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: 1px solid rgba(170, 170, 170, 0.3);
`;

const GoalSummaryBox = style.div`
  width: 12rem;
  height: 2rem;
  margin: 0 auto;
  display:flex;  
`;
const GoalTagsBox = style.div`
  width: 12rem;
  height: 2rem;
  margin: 0 auto;
`;
const GoalTitle = style(CommonStyle)`
  margin-right: auto;
  font-weight: 500;
  line-height: 2.2rem;
`;
const HeartIcon = style.img`
  width: 2rem;
  height: 1.8rem;
  margin-left: auto;
`;
const GoalTag = style(CommonStyle)`
  margin: 0 auto;
  font-size: 0.9rem;
  color: grey;
  font-weight: 500;
  line-height: 2.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;
const GoalSummaryComponent = (props) => {
  return (
    <SummaryCard>
      <CircularProgessWarpper>
        <CircularProgressbarWithChildren value={props.percentage}>
          <CircularString>
            <CircularDay>D-{props.Dday}</CircularDay>
            <CircularAmount>{props.goalAmount}원</CircularAmount>
          </CircularString>
        </CircularProgressbarWithChildren>
      </CircularProgessWarpper>
      <Splitter />
      <GoalSummaryBox>
        <GoalTitle>{props.goalName}</GoalTitle>
        <HeartIcon src="/public/assets/icon/heartIcon.svg" />
      </GoalSummaryBox>
      <GoalTagsBox>
        <GoalTag>{props.goalTags}</GoalTag>
      </GoalTagsBox>
    </SummaryCard>
  );
};
export default GoalSummaryComponent;
