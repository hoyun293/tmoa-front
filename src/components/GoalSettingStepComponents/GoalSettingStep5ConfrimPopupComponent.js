import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComma2Number, countCertainDays } from '../../js/CommonFunc';
import { GOAL_SETTING_INFO } from '../../reducer/goal';
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
    transform: translateY(70rem);
  }
  100%{
    transform: translateY(0px);
  }
`;
const ConfirmPopUp = styled.div`
  margin-top: 1rem;
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

const GoalSummaryElement = style.div`
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
  margin-left: 2rem;
  margin-right: 2rem;
`;
const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  text-align: center;
  color: #ffffff;
`;
const ResetButton = styled(Button)`
  margin-right: auto;
`;
const CompleteButton = styled(Button)`
  margin-left: auto;
`;

const tagParserFunc = (str) => {
  var trimmedStr = str.substr(1).replace(/ /gi, '');
  var tagArray = trimmedStr.split('#');
  return tagArray;
};
const GoalSettingStep5ConfrimPopupComponent = (props) => {
  const dispatch = useDispatch();
  const countNumberOfPayment = (startDate, endDate, dateOfPayment) => {
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
        <TitleBox>
          <TitleString>목표 달성을 위해</TitleString>
          <TitleString>어떤 계획이 있으신가요?</TitleString>
        </TitleBox>
        <ConfirmPopUp>
          <Flex>
            <CloseButton
              type="button"
              onClick={() => {
                props.onChangePrevStep();
              }}
            >
              <img src="/public/assets/icon/closeIcon.svg" />
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
                {savingCode === '0' &&
                  `${addComma2Number(
                    countCertainDays([savingDetailCode], startDate, endDate) * savingAmount
                  )}원`}
                {savingCode === '1' &&
                  `${addComma2Number(
                    countNumberOfPayment(startDate, endDate, Number(savingDetailCode)) *
                      savingAmount
                  )}원`}
              </GoalSummaryVal>
            </GoalSummaryRow>
          </GoalSumaryTable>
          <Footer>
            <ResetButton
              type="button"
              onClick={() => {
                props.onChangePrevStep();
              }}
            >
              <img src="/public/assets/img/resetGoalSettingButton.svg"></img>
              다시 설정하기
            </ResetButton>
            <CompleteButton
              type="button"
              onClick={() => {
                // react-redux에 저장안하고 바로 서버에 보내도 될듯
                dispatch({
                  type: GOAL_SETTING_INFO,
                  data: {
                    category: category,
                    goalName: goalName,
                    startDate: startDate,
                    endDate: endDate,
                    tags: tagParserFunc(tagString),
                    goalAmount: goalAmount,
                    savingAmount: savingAmount,
                    savingCode: savingCode,
                    savingDetailCode: savingDetailCode,
                  },
                });
              }}
            >
              <img src="/public/assets/img/completeGoalSettingButton.svg"></img>
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
