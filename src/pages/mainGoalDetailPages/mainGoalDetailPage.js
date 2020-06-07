import React from 'react';
import styled from 'styled-components';

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
const DepositWithdrawButton = styled.div`
  :focus ;
`;

const mockUpDate = [
  { _id: '9a5lgd34fef949kad', historyDate: '202006031500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006021500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006011500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005311500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005301500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005291500', amount: '20000', depositCode: 'A' },
  { _id: '34Glgd34fef9493ad', historyDate: '202005281125', amount: '-3000', depositCode: 'M' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005281500', amount: '20000', depositCode: 'A' },
];

const mainGoalDetailPage = () => {
  return <TransactionHeaderRow></TransactionHeaderRow>;
};
