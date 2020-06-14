import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComma2Number,
  countCertainDays,
  createNewDateTime,
  checkSunday,
} from '../../js/CommonFunc';
import { GOAL_SETTING_INFO } from '../../reducer/goal';
import closeIconImg from '../../../public/assets/icon/closeIcon.svg';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import { saveGoal } from '../../api/goal-setting-api';
import { getMonthNumber } from '../../js/CommonFunc';

const Flex = styled.div`
  display: flex;
  margin-right: 3.3rem;
`;
const CloseButton = styled.div`
  font-weight: bold;
  font-size: 2 rem;
  margin-left: auto;
  margin-top: 2.1rem;
`;
const Background = styled.div`
  position: fixed;
  background-color: grey;
  width: 100%;
  height: 100%;
`;

const CommonHeader = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const Header = styled(CommonHeader)`
  margin-top: 2rem;
`;
const SubHeader = styled(CommonHeader)``;
const SubString = styled.div`
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #222222;
`;
const ImageCircle = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 8rem;
  background-color: grey;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;
const SlideUp = keyframes`
  0%{
    transform: translateY(90rem);
  }
  100%{
    transform: translateY(0px);
  }
`;
const ConfirmPopUp = styled.div`
  margin-top: 5rem;
  border-radius: 1.2rem;
  animation: ${SlideUp} 0.3s linear;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const GoalSumaryTable = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-top: 3.2rem;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2.1rem;
  display: flex-column;
  background-color: #f8f8f8;
`;
const GoalSummaryRow = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
`;

const GoalSummaryElement = styled.div`
  font-style: normal;
  font-size: 1.4rem;
  line-height: 2rem;
`;
const GoalSummaryProp = styled(GoalSummaryElement)`
  marin-right: auto;
  font-weight: normal;
`;
const GoalSummaryVal = styled(GoalSummaryElement)`
  margin-left: auto;
  font-weight: 500;
`;
const GoalSummarySplatter = styled.div`
  width: 100%;
  border: 1px solid #e3e3e3;
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0rem;
`;
const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 4.3rem;
  height: 4.5rem;
  text-align: center;
  color: #ffffff;
  flex: 1;
`;
const ResetButton = styled(Button)`
  margin-right: auto;
  color: #aaaaaa;
  box-sizing: border-box;
  border: 0.1rem solid #aaaaaa;
  algin-items: center;
`;
const CompleteButton = styled(Button)`
  margin-left: auto;
  background: #16b877;
`;

const tagParserFunc = (str) => {
  var trimmedStr = str.substr(1).replace(/ /gi, '');
  var tagArray = trimmedStr.split('#');
  return tagArray;
};
const GoalSettingStep5ConfrimPopupComponent = (props) => {
  const dispatch = useDispatch();
  const countNumberOfMonthlyPayment = (startDate, endDate, dateOfPayment) => {
    var month1 = startDate.getFullYear() * 12 + startDate.getMonth();
    var month2 = endDate.getFullYear() * 12 + endDate.getMonth();
    var numOfPayment = 0;
    if (month2 - month1 === 0) {
      if (dateOfPayment >= startDate.getDate() && dateOfPayment <= endDate.getDate()) {
        numOfPayment++;
      }
    } else if (month2 - month1 === 1) {
      if (dateOfPayment >= startDate.getDate()) {
        numOfPayment++;
      }
      if (dateOfPayment <= endDate.getDate()) {
        numOfPayment++;
      }
    } else {
      numOfPayment = month2 - month1 - 1;
      if (dateOfPayment >= startDate.getDate()) {
        numOfPayment++;
      }
      if (dateOfPayment <= endDate.getDate()) {
        numOfPayment++;
      }
    }
    return numOfPayment;
  };
  const countNumberOfDailyPayment = (startDate, endDate) => {
    return (endDate - startDate) / (24 * 60 * 60 * 1000) + 1;
  };

  const countNumberOfWeeklyPayment = (startDate, endDate, day) => {
    var cnt = 0;
    var depositDate;

    if (checkSunday(startDate.getDay()) < day) {
      depositDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + (day - checkSunday(startDate.getDay()))
      );
    } else if (checkSunday(startDate.getDay()) > day) {
      depositDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 7 - (checkSunday(startDate.getDay()) - day)
      );
    } else {
      depositDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    }
    while (depositDate <= endDate) {
      cnt++;
      depositDate.setDate(depositDate.getDate() + 7);
    }
    return cnt;
  };

  var category = props.category;
  var goalName = props.goalName;
  var startDate = props.startDate;
  var endDate = props.endDate;
  var tagString = props.tagString;
  var goalAmount = props.goalAmount;
  var savingCode = props.savingCode;
  var savingDetailCode = props.savingDetailCode;
  var savingAmount = props.savingAmount;

  var currentAmount = Number(props.currentAmount);
  var isUpdate = props.isUpdate;

  var expectedAmount;

  if (isUpdate === true) {
    startDate = new Date();
  }

  if (savingCode === 'D') {
    expectedAmount =
      countNumberOfDailyPayment(createNewDateTime(startDate), createNewDateTime(endDate)) *
      savingAmount;
  } else if (savingCode === 'W') {
    expectedAmount =
      countNumberOfWeeklyPayment(
        createNewDateTime(startDate),
        createNewDateTime(endDate),
        Number(savingDetailCode) + 1
      ) * savingAmount;
  } else if (savingCode === 'M') {
    expectedAmount =
      countNumberOfMonthlyPayment(startDate, endDate, Number(savingDetailCode)) * savingAmount;
  }
  expectedAmount += currentAmount;

  return (
    <React.Fragment>
      <Background>
        <NavigationComponent
          haveBackButton={true}
          haveCancelButton={true}
          onClickCancelButton={() => {
            props.onClickCancelButton();
          }}
          onClickBackButton={() => {
            props.onClickBackButton();
          }}
        />
        <Header>목표 달성을 위해</Header>
        <SubHeader>어떤 계획이 있으신가요?</SubHeader>
        <ConfirmPopUp>
          <Flex>
            <CloseButton
              type="button"
              onClick={() => {
                props.onClickBackButton();
              }}
            >
              <img src={closeIconImg} />
            </CloseButton>
          </Flex>
          <GoalSumaryTable>
            <GoalSummaryRow>
              <GoalSummaryProp>입금금액</GoalSummaryProp>
              <GoalSummaryVal>
                {savingCode === '0' ? '매주' : '매월'} {addComma2Number(savingAmount)}원
              </GoalSummaryVal>
            </GoalSummaryRow>
            <GoalSummarySplatter />
            <GoalSummaryRow>
              <GoalSummaryProp>목표기간</GoalSummaryProp>
              <GoalSummaryVal>
                {endDate.getFullYear(endDate)}년 {endDate.getMonth(endDate) + 1}월{' '}
                {endDate.getDate(endDate)}일
              </GoalSummaryVal>
            </GoalSummaryRow>
            <GoalSummarySplatter />
            <GoalSummaryRow>
              <GoalSummaryProp>목표금액</GoalSummaryProp>
              <GoalSummaryVal>{`${addComma2Number(expectedAmount)}원`}</GoalSummaryVal>
            </GoalSummaryRow>
          </GoalSumaryTable>
          <ImageCircle></ImageCircle>
          {expectedAmount < goalAmount && <SubString>목표를 달성하기엔 부족합니다.</SubString>}
          {expectedAmount >= goalAmount && (
            <SubString>목표를 충분히 달성하실 수 있습니다.</SubString>
          )}
          <Footer>
            <ResetButton
              type="button"
              onClick={() => {
                props.onClickBackButton();
              }}
            >
              다시 설정하기
            </ResetButton>
            <CompleteButton
              type="button"
              onClick={() => {
                // react-redux에 저장안하고 바로 서버에 보내도 될듯

                var strDate = startDate.toString();
                var strStartDate =
                  strDate.substring(11, 15) +
                  getMonthNumber(strDate.substring(4, 7)) +
                  strDate.substring(8, 10);
                strDate = endDate.toString();
                var strEndDate =
                  strDate.substring(11, 15) +
                  getMonthNumber(strDate.substring(4, 7)) +
                  strDate.substring(8, 10);
                strDate = new Date().toString();
                var strCreateDate =
                  strDate.substring(11, 15) +
                  getMonthNumber(strDate.substring(4, 7)) +
                  strDate.substring(8, 10);
                dispatch({
                  type: GOAL_SETTING_INFO,
                  data: {
                    category: category,
                    goalName: goalName,
                    startDate: strStartDate,
                    endDate: strEndDate,
                    createDate: strCreateDate,
                    tags: tagParserFunc(tagString),
                    goalAmount: goalAmount,
                    savingAmount: savingAmount,
                    savingCode: savingCode,
                    savingDetailCode: savingDetailCode,
                  },
                });
                saveGoal({
                  userId: '5ecd2c5b5972b810b27a1476',
                  category: 'WEDDING',
                  goalName: '결혼하자3',
                  startDate: '20200527',
                  endDate: '20220527',
                  targetAmount: 30000000,
                  savingAmount: 500000,
                  savingCode: '1',
                  savingDetailCode: '1',
                  achieveCode: '1',
                  tags: [{ name: '결혼' }, { name: '행복' }],
                });
              }}
            >
              목표설정 완료
            </CompleteButton>
          </Footer>
        </ConfirmPopUp>
      </Background>
    </React.Fragment>
  );
};

export default GoalSettingStep5ConfrimPopupComponent;
