import React from 'react';
import styled from 'styled-components';
import { addComma2Number, getPercent, getFractionPart, getCategoryName } from '../../js/CommonFunc';

import 'antd/dist/antd.css';
import { Progress } from 'antd';
import tripImg from '../../../public/assets/img/goalSetting/tripImg.svg';
import heartIconImg from '../../../public/assets/icon/heartIcon.svg';
import heartBlankIconImg from '../../../public/assets/icon/heartBlankIcon.svg';
import FlipNumbers from 'react-flip-numbers';

const Card = styled.div`
  margin: 10px 0;
`;

const CategoryBar = styled.div`
  display: flex;
  background-color: #D0F1E4;
  border-radius: 5px;
`;

const CategoryName = styled.div`
  padding: 20px;
  padding-right:10px;
  flex-grow: 1;
  font-weight: 600;
  align-self: center;
  font-size : 1.6rem;
`;

const CategoryAmount = styled.div`
  padding: 20px;
  padding-left:10px;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.4);
  flex-grow: 2;
  align-self: center;
`;

const CategoryImage = styled.div`
  padding: 10px;
  flex-grow:0;
`;

const GoalBar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;

const GoalAmount = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 2rem;
  font-weight: 600;
`;

const GoalProgressBar = styled.div`
  margin: 10px 0;
`;

const GoalPercentage = styled.div`
  align-self: flex-end;
  font-size: 1.6rem;
  font-weight: 600;
`;

const GoalTitle = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
`;

const GoalHashTag = styled.ul`
  margin: 0;
  padding: 0;
  display:flex;
  color: #AAAAAA;
  list-style-type: none;
`;

const GoalCheerUp = styled.div`
  margin: 5px 0;
  display:flex;
`;

/*
 * example props
 * target = {
 *  category: '여행',
 *  title: '코로나 끝나고 여행가기'
 *  targetAmount: 6000000,
 *  currentAmount: 3000000,
 *  dueDate: 365,
 *  tagList: ['자동차', '스포츠카'],
 *  isLike: true,
 *  likeCount: 100
 * }
 */
const MyGoal = (props) => {
  let { target } = props;

  const likeClickHandler = (isLike) => {
    const msg = isLike ? "좋아요를 취소하였습니다." : "좋아요!";
    target.isLike = !isLike;
    alert(msg);
  }

  return (
    <Card>
      <CategoryBar>
        <CategoryName>{target.category}</CategoryName>
        <CategoryAmount>{addComma2Number(target.targetAmount)}원 | D-{target.dueDate}</CategoryAmount>
        <CategoryImage>
          <img src={tripImg} alt="카테고리 이미지" style={{width: 40, height: 40}}/>
        </CategoryImage>
      </CategoryBar>
      <GoalBar>
        <GoalAmount>
          {addComma2Number(target.currentAmount)}
          <FlipNumbers
            height={13}
            width={8}
            color="red"
            background="white"
            play
            duration={3}
            perspective={200}
            numbers={getFractionPart(target.currentAmount)}/>
          원
        </GoalAmount>
        <GoalProgressBar>
          <Progress
              percent={getPercent(target.targetAmount, target.currentAmount)}
              strokeColor="#16B877"
              showInfo={false}
            />
        </GoalProgressBar>
        <GoalPercentage>{getPercent(target.targetAmount, target.currentAmount)}%</GoalPercentage>
        <GoalTitle>{target.title}</GoalTitle>
        <GoalHashTag>            
          {target.tagList.map((tag, index) => {
              return (
                <li key={index} style={{ fontColor: '#dddddd' }}>
                  #{tag}
                </li>
              );
          })}
        </GoalHashTag>
        <GoalCheerUp>
          {target.isLike ? 
            <img src={heartIconImg} alt="좋아요" onClick={() => { likeClickHandler(target.isLike) }}/>
            :
            <img src={heartBlankIconImg} alt="누를예정" onClick={() => { likeClickHandler(target.isLike) }} />}
          <span>  {target.likeCount}명이 응원합니다.</span>
        </GoalCheerUp>
      </GoalBar>
    </Card>
  );
};

export default MyGoal;