import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  addComma2Number,
  calculateRealTimeTotalAmount,
  convertStrToDate,
  convertDateToStr,
  getLastDepositDate,
  getNextDepositDate,
} from '../../js/CommonFunc';
import * as _ from 'lodash';
import MyGoal from '../../components/MainDashboard/MyGoal';
import { Row, Col } from 'antd';

const TransactionHeader = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const TransactionTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  margin-right: auto;
`;
const DepositWithdrawButton = styled.button`
  width: 8.5rem;
  height: 3rem;
  margin-left: auto;

  background: #ffffff;
  border: 1px solid #16b877;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 3rem;
  color: #16b877;
  outline: 0;
  &:active {
    background: #16b877;
    color: #ffffff;
  }
`;
const TransactionHistoryWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
`;
const TransactionFirstRow = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TransactionSecondRow = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TransactionDate = styled.div`
  font-size: 1.5rem;
  margin-right: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #222222;
`;

const AmountFont = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const TransactionAmount = styled(AmountFont)`
  color: ${(props) => props.color || 'black'};
`;
const TransactionTime = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #aaaaaa;
`;
const TransactionSplatter = styled.div`
  border: 0.5px dashed #cccccc;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const List = styled.li`
  list-style-type: none;
`;
const Stamp = styled.div`
  position: fixed;
  width: 10rem;
  height: 10rem;
  background-color: red;
  transform: translateX(-50%);
  left: 50%;
`;
const mockUpData = [
  { _id: '9a5lgd34fef949kad', historyDate: '202006031500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006021500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006011500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005311500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005301500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005300800', amount: '50000', depositCode: 'M' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005291500', amount: '20000', depositCode: 'A' },
  { _id: '34Glgd34fef9493ad', historyDate: '202005281125', amount: '-3000', depositCode: 'M' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005281500', amount: '20000', depositCode: 'A' },
];

const mockUpData2 = {
  _id: '5e317ef9483493ffd',
  title: '맥북구입',
  targetAmount: '2134000',
  goalStartDate: '202006021500',
  goalEndDate: '202008251500',
  createDate: '202006022100',
  tagList: ['애플', '비싸당', '신품'],
  category: 'H',
  savingCode: 'M',
  savingDetailCode: '24',
  savingAmount: '20000',
  savingTime: '21',
  currentAmount: '180000',
  achieveCode: 'P',
  likeNumber: '100',
  islike: true,
};
const getTransactionTime = (strDate) => {
  var hour = strDate.substring(8, 10);
  var minute = strDate.substring(10, 12);
  return hour + ':' + minute;
};
const getTransactionDate = (strDate) => {
  var month = strDate.substring(4, 6);
  var day = strDate.substring(6, 8);
  if (Number(month) < 10) {
    month = month.substring(1, 2);
  }
  return month + '.' + day;
};

const mainGoalDetailPage = () => {
  var convertedData;
  var currentAmount = 0;
  var lastDepositDateMilliSec = getLastDepositDate(
    mockUpData2.savingCode,
    mockUpData2.savingDetailCode
  ).getTime();
  var startDateMilliSec = convertStrToDate(mockUpData2.goalStartDate).getTime();
  var nextDepositDate;

  if (lastDepositDateMilliSec < startDateMilliSec) {
    nextDepositDate = getNextDepositDate(
      mockUpData2.savingCode,
      mockUpData2.savingDetailCode,
      convertStrToDate(mockUpData2.goalStartDate),
      true
    );
  } else {
    nextDepositDate = getNextDepositDate(
      mockUpData2.savingCode,
      mockUpData2.savingDetailCode,
      convertStrToDate(mockUpData2.goalStartDate),
      false
    );
  }

  const [ranmonNumber, setRandomNumber] = useState('0');
  setTimeout(() => {
    if (mockUpData2.achieveCode === 'P') {
      setRandomNumber(String(Math.random()));
    }
  }, 4000);

  currentAmount = calculateRealTimeTotalAmount(
    Number(mockUpData2.currentAmount),
    Number(mockUpData2.savingAmount),
    mockUpData2.goalStartDate,
    mockUpData2.goalEndDate,
    mockUpData2.savingCode,
    mockUpData2.savingDetailCode
  );
  convertedData = {
    _id: mockUpData2._id,
    title: mockUpData2.title,
    targetAmount: Number(mockUpData2.targetAmount),
    currentAmount: currentAmount,
    category: mockUpData2.category,
    dueDate: Math.round(
      (convertStrToDate(mockUpData2.goalEndDate) - new Date()) / (1000 * 60 * 60 * 24)
    ),
    achieveCode: mockUpData2.achieveCode,
    tagList: mockUpData2.tagList,
    likeCount: mockUpData2.likeNumber,
    isLike: mockUpData2.isLike,
  };
  return (
    <React.Fragment>
      <Row justify="center">
        <Col span={22}>
          <MyGoal target={convertedData} />
        </Col>
      </Row>
      <TransactionHeader>
        <TransactionTitle>거래내역</TransactionTitle>
        <DepositWithdrawButton>추가 입출금</DepositWithdrawButton>
      </TransactionHeader>
      {convertedData.achieveCode === 'F' && <Stamp />}
      {convertedData.achieveCode === 'C' && <Stamp />}
      <TransactionHistoryWrapper>
        <TransactionFirstRow>
          <TransactionDate>
            {getTransactionDate(convertDateToStr(nextDepositDate)) + '(예정)'}
          </TransactionDate>
          <TransactionAmount color={'#16B877'}>
            {'+' + addComma2Number(mockUpData2.savingAmount)}
          </TransactionAmount>
          <AmountFont>원</AmountFont>
        </TransactionFirstRow>
        <TransactionSecondRow>
          <TransactionTime>
            {getTransactionTime(convertDateToStr(nextDepositDate)) + ' | 자동'}
          </TransactionTime>
        </TransactionSecondRow>
      </TransactionHistoryWrapper>
      {_.map(mockUpData, (v, i) => (
        <List key={i}>
          <TransactionSplatter />
          <TransactionHistoryWrapper>
            <TransactionFirstRow>
              <TransactionDate>{getTransactionDate(v.historyDate)}</TransactionDate>
              {v.depositCode === 'A' && (
                <TransactionAmount color={'#16B877'}>
                  {'+' + addComma2Number(v.amount)}
                </TransactionAmount>
              )}
              {v.depositCode === 'M' && (
                <TransactionAmount>
                  {Number(v.amount) < 0 && '-' + addComma2Number(v.amount.substring(1))}
                  {Number(v.amount) >= 0 && '+' + addComma2Number(v.amount)}
                </TransactionAmount>
              )}
              <AmountFont>원</AmountFont>
            </TransactionFirstRow>
            <TransactionSecondRow>
              {v.depositCode === 'A' && (
                <TransactionTime>{getTransactionTime(v.historyDate) + ' | 자동'}</TransactionTime>
              )}
              {v.depositCode === 'M' && (
                <TransactionTime>
                  {getTransactionTime(v.historyDate) + ' | 추가입출금'}
                </TransactionTime>
              )}
            </TransactionSecondRow>
          </TransactionHistoryWrapper>
        </List>
      ))}
    </React.Fragment>
  );
};
export default mainGoalDetailPage;
