import React from 'react';
import styled from 'styled-components';
import {addComma2Number} from '../../js/CommonFunc';
import * as _ from 'lodash';
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
  width: 5rem;
  height: 2rem;
  margin-left: auto;

  &:focus {
    border-color: red;
  }
`;
const TransactionHistoryWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const TransactionFirstRow = styled.div`
  display: flex;
`;
const TransactionSecondRow = styled.div`
  display: flex;
`;
const TransactionDate = styled.div`
  font-size: 1.5rem;
  margin-right: auto;
`;
const TransactionAmount = styled.div`
  font-size: 1.5rem;
  color: ${props=>props.color || 'black'}
`;
const TransactionTime = styled.divv`
  font-size: 1.3rem;
  color: grey;
`;
const TransactionSplatter = styled.div`
  border: 1px dashed black;
  margin-left: 2rme;
  margin-right: 2rem;
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
const getTransactionTime = (strDate) =>{
  var hour = strDate.substring(8,10);
  var minute = strDate.substring(10,12);
  return hour + ':' + minute;
};
const getTransactionDate = (strDate) => {
  var month = strDate.substring(4,6);
  var day = strDate.substring(6,8);
  if(Number(month) < 10)
  {
    month = month.substring(0,1);
  }
  return month +'.' + day;
}
const mainGoalDetailPage = () => {
  return 
  <>
    <TransactionHeader>
      <TransactionTitle/>
      <DepositWithdrawButton/>
    </TransactionHeader>
    <ul>
      {
        _.map(mockUpDate, (v,i)=>(
          <li key={i}>
            <TransactionSplatter/>
            <TransactionHistoryWrapper>
              <TransactionFirstRow>
        <TransactionDate>{getTransactionDate(v.historyDate)}</TransactionDate>
        {v.depositCode === 'A' &&<TransactionAmount color={'green'}>{v.amount < 0 && '-'}{addComma2Number(v.amount)}</TransactionAmount>}
                {v.depositCode === 'M' &&<TransactionAmount></TransactionAmount>}
              </TransactionFirstRow>
              <TransactionSecondRow>
        <TransactionTime>{getTransactionTime(v.historyDate)}</TransactionTime>
              </TransactionSecondRow>
            </TransactionHistoryWrapper>
          </li>
        ))
      }
    </ul>
  </>

};
