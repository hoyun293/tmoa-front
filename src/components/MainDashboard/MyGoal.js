import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { insertLike } from '../../api/mygoal-list-api';

import { addComma2Number, getPercent, getFractionPart, getCategoryName } from '../../js/CommonFunc';

import 'antd/dist/antd.css';
import { Progress } from 'antd';
import heartIconImg from '../../../public/assets/icon/heartIcon.svg';
import heartBlankIconImg from '../../../public/assets/icon/heartBlankIcon.svg';
import FlipNumbers from 'react-flip-numbers';

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

const getCategoryImage = (code) => {
  let name;
  switch (code) {
    case 'H':
      name = CategoryImg01;
      break;
    case 'D':
      name = CategoryImg02;
      break;
    case 'AN':
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

const Card = styled.div`
  margin: 10px 0;
`;

const CategoryBar = styled.div`
  display: flex;
  background-color: #d0f1e4;
  border-radius: 5px;
`;

const CategoryName = styled.div`
  padding: 20px;
  padding-right: 10px;
  flex-grow: 1;
  font-weight: 600;
  align-self: center;
  font-size: 1.6rem;
`;

const CategoryAmount = styled.div`
  padding: 20px;
  padding-left: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.4);
  flex-grow: 2;
  align-self: center;
`;

const CategoryImage = styled.div`
  padding: 10px;
  flex-grow: 0;
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
  display: flex;
  color: #aaaaaa;
  list-style-type: none;
`;

const GoalCheerUp = styled.div`
  margin: 5px 0;
  display: flex;
`;

const MyGoal = (props) => {
  let { target } = props;
  const [like, setLike] = useState(false);
  const [likeTotalCount, setLikeTotalCount] = useState()

  const likeClickHandler = async (id, isLike) => {
    const params = {
      goalId: id,
      isLike: !like
    }
    const response = await insertLike(params);
    const { data, code } = response.data;

    if(data.nModified === 1) {
      setLike(!like);
      if(like) {
        setLikeTotalCount(+likeTotalCount - 1);
      } else {
        setLikeTotalCount(+likeTotalCount + 1);
      }
    }
  };

  useEffect(() => {
    setLike(target.isLike);
    setLikeTotalCount(target.likeCount);
  }, []);

  useEffect(() => {
  }, [like]);

  useEffect(() => {
  }, [likeTotalCount]);

  return (
    <Card>
      <CategoryBar>
        <CategoryName>{getCategoryName(target.category)}</CategoryName>
        <CategoryAmount>
          {addComma2Number(target.targetAmount)}원 | D-{target.dueDate}
        </CategoryAmount>
        <CategoryImage>
          <img src={getCategoryImage(target.category)} alt="카테고리 이미지" style={{ width: 40, height: 40 }} />
        </CategoryImage>
      </CategoryBar>
      <GoalBar>
        <GoalAmount>
          {addComma2Number(target.currentAmount)}
          <FlipNumbers
            height={17}
            width={9}
            color="red"
            background="white"
            play
            duration={3}
            perspective={200}
            numbers={getFractionPart(target.currentAmount)}
          />
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
          {like ? (
            <img
              src={heartIconImg}
              alt="좋아요"
              onClick={() => {
                likeClickHandler(target._id, target.isLike);
              }}
            />
          ) : (
            <img
              src={heartBlankIconImg}
              alt="누를예정"
              onClick={() => {
                likeClickHandler(target._id, target.isLike);
              }}
            />
          )}
          <span>&nbsp;{likeTotalCount}명이 응원합니다.</span>
        </GoalCheerUp>
      </GoalBar>
    </Card>
  );
};

export default MyGoal;
