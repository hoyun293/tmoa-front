import React from 'react';
import styled from 'styled-components';
import { addComma2Number, getPercent, getFractionPart } from '../../js/CommonFunc';

import 'antd/dist/antd.css';
import { Row, Col, Card, Progress } from 'antd';
import tripImg from '../../../public/assets/img/goalSetting/tripImg.svg';
import heartIconImg from '../../../public/assets/icon/heartIcon.svg';
import heartBlankIconImg from '../../../public/assets/icon/heartBlankIcon.svg';
import FlipNumbers from 'react-flip-numbers';
const TargetIcon = styled.img`
  height: 3rem;
  margin-left: auto;
`;
const HeartIcon = styled.img`
  width: 2rem;
  height: 1.8rem;
  margin-left: auto;
`;
const RowInCol = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  margin-left: auto;
  display: flex;
`;
const RowInColWrapper = styled.div`
  display: flex;
`;

/*
 * example props
 * target = {
 *  category: '여행',
 *  targetAmount: 6000000,
 *  currentAmount: 3000000,
 *  dueDate: 365,
 *  tagList: ['자동차', '스포츠카'],
 *  isLike: true,
 *  likeCount: 100
 * }
 */
const MyGoal = (props) => {
  const { target } = props;
  return (
    <Card>
      <Row>
        <Col span={6}>
          <TargetIcon src={tripImg}></TargetIcon>
          <span>{target.category}</span>
        </Col>
        <Col span={18} style={{ textAlign: 'right', paddingTop: '0.5rem' }}>
          <span style={{ fontWeight: 500, fontSize: '1.5rem' }}>
            목표금액 {addComma2Number(target.targetAmount)}원
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={6} style={{ paddingLeft: '0.7rem', fontWeight: 600 }}>
          <span style={{ fontSize: '2.7rem' }}>
            {getPercent(target.targetAmount, target.currentAmount)}
          </span>
          <span style={{ fontSize: '2rem' }}>%</span>
        </Col>
        <Col span={18} style={{ textAlign: 'right', paddingTop: '1.1rem' }}>
          <RowInColWrapper>
            <RowInCol>
              {addComma2Number(target.currentAmount)}
              <FlipNumbers
                height={13}
                width={8}
                color="red"
                background="white"
                play
                duration={3}
                perspective={200}
                numbers={getFractionPart(target.currentAmount)}
              />
              원
            </RowInCol>
          </RowInColWrapper>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Progress
            percent={getPercent(target.targetAmount, target.currentAmount)}
            strokeColor="green"
            showInfo={false}
          />
        </Col>
      </Row>
      <Row justify="end">
        <Col span={3}>
          <span style={{ fontWeight: 600 }}>D-{target.dueDate}</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p style={{ fontWeight: 600, fontSize: '1.7rem', margin: 0 }}>{target.title}</p>
        </Col>
        <Col span={24}>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            {target.tagList.map((tag, index) => {
              return (
                <li key={index} style={{ fontColor: '#dddddd' }}>
                  #{tag}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
      <Row style={{ paddingTop: 4 }}>
        <Col span={2}>
          {target.isLike === true && <HeartIcon src={heartIconImg} />}
          {target.isLike === false && <HeartIcon src={heartBlankIconImg} />}
        </Col>
        <Col span={22} style={{ fontWeight: 500 }}>
          <span>{target.likeCount}</span>
          <span>명이 응원합니다</span>
        </Col>
      </Row>
    </Card>
  );
};

export default MyGoal;
