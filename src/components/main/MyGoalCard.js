import React from 'react';

import styled from 'styled-components';

import { addComma2Number, getPercent, getFractionPart, getCategoryName } from '../../js/CommonFunc';

import CategoryImg01 from '../../../public/assets/img/categoryPng/list_1_house.png';
import CategoryImg02 from '../../../public/assets/img/categoryPng/list_2_donate.png';
import CategoryImg03 from '../../../public/assets/img/categoryPng/list_3_wedding.png';
import CategoryImg04 from '../../../public/assets/img/categoryPng/list_4_trip.png';
import CategoryImg05 from '../../../public/assets/img/categoryPng/list_5_interior.png';
import CategoryImg06 from '../../../public/assets/img/categoryPng/list_6_game.png';
import CategoryImg07 from '../../../public/assets/img/categoryPng/list_7_car.png';
import CategoryImg08 from '../../../public/assets/img/categoryPng/list_8_plan.png';
import CategoryImg09 from '../../../public/assets/img/categoryPng/list_9_medi.png';
import CategoryImg10 from '../../../public/assets/img/categoryPng/list_10_running.png';
import CategoryImg11 from '../../../public/assets/img/categoryPng/list_11_bag.png';
import CategoryImg12 from '../../../public/assets/img/categoryPng/list_12_old.png';
import CategoryImg13 from '../../../public/assets/img/categoryPng/list_13_dog.png';
import CategoryImg14 from '../../../public/assets/img/categoryPng/list_14_beauty.png';
import CategoryImg15 from '../../../public/assets/img/categoryPng/list_15_company.png';
import CategoryImg16 from '../../../public/assets/img/categoryPng/list_16_elec.png';

const MyGoalCard = (props) => {

  const { goal } = props;

  const Card = styled.div`
    width: 80%;
    padding: 20px;
    padding-right: 40px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  `;

  const ContentCastle = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const GoalName = styled.div`
    font-size: 2rem;
    font-weight: 550;
  `;

  const CurrentAmount = styled.div`
    font-size: 1.8rem;
    font-weight: 550;
  `;

  const TargetAmount = styled.div`
    font-size: 1.7rem;
  `;

  const EndDate = styled.div`
    font-size: 1.5rem;
  `

  const ImageArea = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BadgeCastle = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Badge = styled.div`
    display: inline-block;
    background: #FF8A45;
    border-radius: 100px;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 4px 5px;
  `;

  return (
    <Card>
      <ContentCastle>
        <GoalName>{goal.title}</GoalName>
        <CurrentAmount>{addComma2Number(goal.currentAmount)}원</CurrentAmount>
        <TargetAmount>(목표 {addComma2Number(goal.targetAmount)}원)</TargetAmount>
        <EndDate>{goal.goalEndDate}<span style={{color: '#FF8A45'}}>(D-{goal.savingTime})</span></EndDate>
      </ContentCastle>
      <ImageArea>
        <img src={CategoryImg01} alt="카테고리 이미지"/>
        <BadgeCastle>
          <Badge>{goal.status}</Badge>
        </BadgeCastle>
      </ImageArea>
    </Card>
  );
}

export default MyGoalCard;