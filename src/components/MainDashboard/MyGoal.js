import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { insertLike } from '../../api/mygoal-list-api';

import { addComma2Number, getPercent, getFractionPart, getCategoryName } from '../../js/CommonFunc';
import { deleteGoal } from '../../api/main-detail-goal-api';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import heartIconImg from '../../../public/assets/icon/heartIcon.svg';
import heartBlankIconImg from '../../../public/assets/icon/heartBlankIcon.svg';
import FlipNumbers from 'react-flip-numbers';
import ModalComponent from '../../components/CommonUIComponents/ModalComponent';
import ModalBackground from '../../components/CommonUIComponents/ModalBackground';
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
import editIcon from '../../../public/assets/icon/editIcon.svg';
import closeIcon from '../../../public/assets/icon/smallCloseIcon.svg';
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

const Card = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
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
  margin-right: auto;
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

const Row = styled.div`
  display: flex;
`;
const ModalRow = styled.div`
  width: 6rem;
  height: 3.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 3.5rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  padding-left: 0.5rem;
`;
const EditIcon = styled.img`
  margin-left: auto;
`;
const CloseIcon = styled.img`
  margin-bottom: 1.8rem;
  margin-left: 1.1rem;
`;
const ModalSplatter = styled.div`
  border: 1px solid #e3e3e3;
`;
const SmallModal = styled.div`
  position: absolute;
  right: 3rem;
  top: 10.5rem;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
`;
const MyGoal = (props) => {
  let { target } = props;
  const [like, setLike] = useState(false);
  const [likeTotalCount, setLikeTotalCount] = useState();
  const [toggleLikePopup, setToggleLikePopup] = useState(false);
  const [toggleSmallModal, setToggleSmallModal] = useState(false);
  const [toggleModalMessage, setToggleModalMessage] = useState(false);
  let preventer;

  const LikePopup = styled.div`
    align-self: center;
    display: flex;
    position: absolute;
    margin: 50px auto;
    margin-bottom: 0;
    width: calc(100% - 90px);
    align-items: center;
    justify-content: center;
    z-index: 200;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    padding: 35px 0;
  `;

  const LikePopupContent = styled.div`
    align-self: center;
    padding-top: 10.5px;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 22px;
  `;

  const likeClickHandler = async (id, isLike) => {
    const params = {
      goalId: id,
      isLike: !like,
    };
    const response = await insertLike(params);
    const { data, code } = response.data;

    if (data.nModified === 1) {
      setLike(!like);
      if (like) {
        setLikeTotalCount(+likeTotalCount - 1);
      } else {
        setLikeTotalCount(+likeTotalCount + 1);
      }
    }
    setToggleLikePopup(true);
    if (!preventer) {
      preventer = setTimeout(() => {
        setToggleLikePopup(false);
        preventer = null;
      }, 2000);
    }
  };

  useEffect(() => {
    setLike(target.isLike);
    setLikeTotalCount(target.likeCount);
  }, []);

  useEffect(() => {}, [like]);

  useEffect(() => {}, [likeTotalCount]);

  return (
    <Card
      onClick={() => {
        props.onClick();
      }}
    >
      {toggleLikePopup ? (
        <LikePopup>
          {like ? (
            <img
              src={heartIconImg}
              alt="좋아요"
              style={{ width: 30, height: 30 }}
              onClick={(e) => {
                likeClickHandler(target._id, target.isLike);
              }}
            />
          ) : (
            <img
              src={heartBlankIconImg}
              alt="누를예정"
              onClick={(e) => {
                likeClickHandler(target._id, target.isLike);
              }}
            />
          )}
          {like ? (
            <LikePopupContent>응원합니다.</LikePopupContent>
          ) : (
            <LikePopupContent>응원을 취소합니다.</LikePopupContent>
          )}
        </LikePopup>
      ) : null}
      <CategoryBar>
        <CategoryName>{getCategoryName(target.category)}</CategoryName>
        <CategoryAmount>
          ${addComma2Number(target.targetAmount) + '원'} |{' '}
          {target.dueDate >= 0 && 'D-' + target.dueDate}
          {target.dueDate < 0 && 'D+' + -1 * target.dueDate}
        </CategoryAmount>
        <CategoryImage>
          <img
            src={getCategoryImage(target.category)}
            alt="카테고리 이미지"
            style={{ width: 40, height: 40 }}
          />
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
        <Row>
          <GoalTitle>{target.title}</GoalTitle>
          {target.achieveCode && (
            <EditIcon
              onClick={() => {
                setToggleSmallModal(true);
              }}
              src={editIcon}
            />
          )}
        </Row>
        {toggleSmallModal === true && (
          <SmallModal>
            <Row></Row>
            <ModalRow
              onClick={() => {
                props.history.push(`/goalSetting/${target._id}`);
              }}
            >
              수정
              <CloseIcon
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleSmallModal(false);
                }}
                src={closeIcon}
              />
            </ModalRow>
            <ModalSplatter />
            <ModalRow
              onClick={() => {
                setToggleModalMessage(true);
              }}
            >
              삭제
            </ModalRow>
          </SmallModal>
        )}
        {toggleModalMessage && <ModalBackground />}
        {toggleModalMessage && (
          <ModalComponent
            message={'목표를 정말 삭제하시겠습니까?'}
            shortMessage={true}
            leftButton={'취소'}
            rightButton={'삭제'}
            cancel={() => {
              setToggleModalMessage(false);
            }}
            ok={() => {
              deleteGoal({ goalId: target._id });
              props.history.push('/mainDashboard');
            }}
          />
        )}
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
              onClick={(e) => {
                likeClickHandler(target._id, target.isLike);
                e.stopPropagation();
                if (props.reRender) {
                  props.reRender();
                }
              }}
            />
          ) : (
            <img
              src={heartBlankIconImg}
              alt="누를예정"
              onClick={(e) => {
                likeClickHandler(target._id, target.isLike);
                e.stopPropagation();
                if (props.reRender) {
                  props.reRender();
                }
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
