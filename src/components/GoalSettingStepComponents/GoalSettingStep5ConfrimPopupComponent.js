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
const TitleBox = styled.div`
  margin-top: 6rem;
  margin-left: 2.1rem;
`;
const TitleString = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: 0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const ImageCircle = styled.div`
  margin-top: 5rem;
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
  display: inline-block;
  animation: ${SlideUp} 0.3s linear;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const GoalSumaryTable = styled.div`
  width: 30rem
  margin: 0 auto;
  margin-top: 3.2rem;
  margin-left: 3rem;
  margin-right: 3rem;
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
    } else if (checkSunday(startDate.getDay() > day)) {
      depositDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 7 - (checkSunday(startDate.getDay()) - day)
      );
    } else {
      depositDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    }
    //console.log('endDate is ' + endDate);
    while (depositDate <= endDate) {
      //console.log('depositDate is ' + depositDate);
      cnt++;
      depositDate.setDate(depositDate.getDate() + 7);
    }
    return cnt;
  };

  const [expectedAmount, setExpectedAmount] = useState('');
  const [category, setCategory] = useState(props.category);
  const [goalName, setGoalName] = useState(props.goalName);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [tagString, setTagString] = useState(props.tagString);
  const [goalAmount, setGoalAmount] = useState(props.goalAmount);
  const [savingCode, setSavingCode] = useState(props.savingCode);
  const [savingDetailCode, setSavingDetailCode] = useState(props.savingDetailCode);
  const [savingAmount, setSavingAmount] = useState(props.savingAmount);

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
        <TitleBox>
          <TitleString>목표 달성을 위해</TitleString>
          <TitleString>어떤 계획이 있으신가요?</TitleString>
        </TitleBox>
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
              <GoalSummaryVal>
                {savingCode === 'D' &&
                  `${addComma2Number(
                    countNumberOfDailyPayment(
                      createNewDateTime(startDate),
                      createNewDateTime(endDate)
                    ) * savingAmount
                  )}원`}
                {savingCode === 'W' &&
                  `${addComma2Number(
                    countNumberOfWeeklyPayment(
                      createNewDateTime(startDate),
                      createNewDateTime(endDate),
                      Number(savingDetailCode) + 1
                    ) * savingAmount
                  )}원`}
                {savingCode === 'M' &&
                  `${addComma2Number(
                    countNumberOfMonthlyPayment(startDate, endDate, Number(savingDetailCode)) *
                      savingAmount
                  )}원`}
              </GoalSummaryVal>
            </GoalSummaryRow>
          </GoalSumaryTable>
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
        <ImageCircle></ImageCircle>
        <TitleString>목표를 충분히 달성하실 수 있습니다.</TitleString>
      </Background>
    </React.Fragment>
  );
};

export default GoalSettingStep5ConfrimPopupComponent;
