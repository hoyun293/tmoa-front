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
import { saveGoal, updateGoal } from '../../api/goal-setting-api';
import { getMonthNumber } from '../../js/CommonFunc';
import planImg from '../../../public/assets/img/goalSetting/planImg.svg';
import noPlanImg from '../../../public/assets/img/goalSetting/plan_noImg.svg';

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
  margin-top: 18rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #222222;
`;
const ImageCircle = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 2.5rem;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
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

const ConfirmImg = styled.img``;

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
  var goalAmount = Number(props.goalAmount);
  var savingCode = props.savingCode;
  var savingDetailCode = props.savingDetailCode;
  var savingAmount = Number(props.savingAmount);

  var currentAmount = Number(props.currentAmount);
  var isUpdate = props.isUpdate;

  var expectedAmount;
  if (isUpdate) {
    var updateStartDate = new Date();
    if (savingCode === 'D') {
      expectedAmount =
        countNumberOfDailyPayment(createNewDateTime(updateStartDate), createNewDateTime(endDate)) *
        savingAmount;
    } else if (savingCode === 'W') {
      expectedAmount =
        countNumberOfWeeklyPayment(
          createNewDateTime(updateStartDate),
          createNewDateTime(endDate),
          Number(savingDetailCode) + 1
        ) * savingAmount;
    } else if (savingCode === 'M') {
      expectedAmount =
        countNumberOfMonthlyPayment(updateStartDate, endDate, Number(savingDetailCode)) *
        savingAmount;
    }
    expectedAmount += currentAmount;
  } else {
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
  }

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
        <Header>?????? ????????? ??????</Header>
        <SubHeader>?????? ????????? ????????????????</SubHeader>
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
              <GoalSummaryProp>????????????</GoalSummaryProp>
              <GoalSummaryVal>
                {savingCode === 'W' ? '??????' : savingCode === 'M' ? '??????' : '??????'}{' '}
                {addComma2Number(savingAmount)}???
              </GoalSummaryVal>
            </GoalSummaryRow>
            <GoalSummarySplatter />
            <GoalSummaryRow>
              <GoalSummaryProp>????????????</GoalSummaryProp>
              <GoalSummaryVal>
                {endDate.getFullYear(endDate)}??? {endDate.getMonth(endDate) + 1}???{' '}
                {endDate.getDate(endDate)}???
              </GoalSummaryVal>
            </GoalSummaryRow>
            <GoalSummarySplatter />
            <GoalSummaryRow>
              <GoalSummaryProp>?????? ????????????</GoalSummaryProp>
              <GoalSummaryVal>{`${addComma2Number(expectedAmount)}???`}</GoalSummaryVal>
            </GoalSummaryRow>
            <GoalSummarySplatter />
            <GoalSummaryRow>
              <GoalSummaryProp>????????????</GoalSummaryProp>
              <GoalSummaryVal>{`${addComma2Number(goalAmount)}???`}</GoalSummaryVal>
            </GoalSummaryRow>
          </GoalSumaryTable>

          {Number(expectedAmount) < Number(goalAmount) && <ImageCircle src={noPlanImg} />}
          {Number(expectedAmount) >= Number(goalAmount) && <ImageCircle src={planImg} />}
          {Number(expectedAmount) < Number(goalAmount) && (
            <SubString>????????? ??????????????? ???????????????.</SubString>
          )}
          {Number(expectedAmount) >= Number(goalAmount) && (
            <SubString>????????? ????????? ???????????? ??? ????????????.</SubString>
          )}
          <Footer>
            <ResetButton
              type="button"
              onClick={() => {
                props.onClickBackButton();
              }}
            >
              ?????? ????????????
            </ResetButton>
            {isUpdate === true && (
              <CompleteButton
                type="button"
                onClick={() => {
                  var strDate = startDate.toString();
                  var strStartDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10) +
                    strDate.substring(16, 18) +
                    strDate.substring(19, 21);
                  strDate = endDate.toString();
                  var strEndDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10) +
                    strDate.substring(16, 18) +
                    strDate.substring(19, 21);
                  strDate = new Date().toString();
                  var strCreateDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10);

                  updateGoal({
                    goalId: props.goalId,
                    category: category,
                    title: goalName,
                    goalStartDate: strStartDate,
                    goalEndDate: strEndDate,
                    targetAmount: goalAmount,
                    savingAmount: savingAmount,
                    savingCode: savingCode,
                    savingDetailCode: savingDetailCode,
                    achieveCode: 'P',
                    tags: tagParserFunc(tagString),
                  });
                  props.onChangeNextStep();
                }}
              >
                ???????????? ??????
              </CompleteButton>
            )}
            {isUpdate === false && (
              <CompleteButton
                type="button"
                onClick={() => {
                  var strDate = startDate.toString();
                  var strStartDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10) +
                    strDate.substring(16, 18) +
                    strDate.substring(19, 21);
                  strDate = endDate.toString();
                  var strEndDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10) +
                    strDate.substring(16, 18) +
                    strDate.substring(19, 21);
                  strDate = new Date().toString();
                  var strCreateDate =
                    strDate.substring(11, 15) +
                    getMonthNumber(strDate.substring(4, 7)) +
                    strDate.substring(8, 10);
                  saveGoal({
                    category: category,
                    title: goalName,
                    goalStartDate: strStartDate,
                    goalEndDate: strEndDate,
                    targetAmount: goalAmount,
                    currentAmount: 0,
                    savingAmount: savingAmount,
                    savingCode: savingCode,
                    savingDetailCode: savingDetailCode,
                    achieveCode: 'P',
                    tags: tagParserFunc(tagString),
                  });
                  props.onChangeNextStep();
                }}
              >
                ???????????? ??????
              </CompleteButton>
            )}
          </Footer>
        </ConfirmPopUp>
      </Background>
    </React.Fragment>
  );
};

export default GoalSettingStep5ConfrimPopupComponent;
