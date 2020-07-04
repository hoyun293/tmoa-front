import React, { useState } from 'react';

import styled from 'styled-components';

import {
  addComma2Number,
  getPercent,
  getFractionPart,
  getCategoryName,
  calculateRealTimeTotalAmount,
} from '../../js/CommonFunc';

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
  const { goal, moveGoalDetail } = props;
  const Card = styled.div`
    width: 80%;
    padding: 20px;
    padding-right: 25px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  `;

  const ContentCastle = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  `;

  const GoalName = styled.div`
    font-size: 1.5rem;
    font-weight: 550;
  `;

  const CurrentAmount = styled.div`
    font-size: 1.4rem;
    font-weight: 550;
  `;

  const TargetAmount = styled.div`
    font-size: 1.2rem;
  `;

  const EndDate = styled.div`
    font-size: 1.2rem;
  `;

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
    background: ${goal.dday > 0 ? '#FF8A45' : '#16B877'};
    border-radius: 100px;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 4px 5px;
  `;

  const getCategoryImage = (code) => {
    let name;
    switch (code) {
      case 'H':
        name = CategoryImg01;
        break;
      case 'D':
        name = CategoryImg02;
        break;
      case 'AM':
        name = CategoryImg03;
        break;
      case 'T':
        name = CategoryImg04;
        break;
      case 'I':
        name = CategoryImg05;
        break;
      case 'GL':
        name = CategoryImg06;
        break;
      case 'A':
        name = CategoryImg07;
        break;
      case 'UE':
        name = CategoryImg08;
        break;
      case 'M':
        name = CategoryImg09;
        break;
      case 'S':
        name = CategoryImg10;
        break;
      case 'PR':
        name = CategoryImg11;
        break;
      case 'R':
        name = CategoryImg12;
        break;
      case 'PE':
        name = CategoryImg13;
        break;
      case 'B':
        name = CategoryImg14;
        break;
      case 'BC':
        name = CategoryImg15;
        break;
      case 'DA':
        name = CategoryImg16;
        break;
    }
    return name;
  };

  return (
    <Card key={goal._id} onClick={(e) => moveGoalDetail(e, goal._id)}>
      <ContentCastle>
        <GoalName>{goal.title}</GoalName>
        <CurrentAmount>
          {addComma2Number(
            calculateRealTimeTotalAmount(
              goal.currentAmount,
              goal.savingAmount,
              goal.startDate,
              goal.endDate,
              goal.savingCode,
              goal.savingDetailCode
            )
          )}
          원
        </CurrentAmount>
        <TargetAmount>(목표 {addComma2Number(goal.targetAmount)}원)</TargetAmount>
        <EndDate>
          {goal.goalEndDate}
          <span style={{ color: '#FF8A45' }}> (D-{goal.dday})</span>
        </EndDate>
      </ContentCastle>
      <ImageArea>
        <img src={getCategoryImage(goal.category)} alt="카테고리 이미지" />
        <BadgeCastle>
          <Badge>{goal.dday > 0 ? '진행중' : '도전완료'}</Badge>
        </BadgeCastle>
      </ImageArea>
    </Card>
  );
};

export default MyGoalCard;
