import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComma2Number, countCertainDays } from '../../js/CommonFunc';
import { GOAL_SETTING_INFO } from '../../reducer/goal';
const Flex = styled.div`
  display: flex;
`;
const CloseButton = styled.div`
  font-weight: bold;
  font-size: 2 rem;
  margin-left: auto;
`;
const Background = styled.div`
  position: fixed;
  background-color: grey;
  width: 100%;
  height: 100%;
`;
const Popup = styled.div`
  position: absoulte;
  background-color: #ffffff;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  width: 100%;
  height: 100%;
  margin-top: 15rem;
  padding-top: 5rem;
`;
const BoldTitleString = styled.div`
  display: inline;
  font-weight: bold;
  font-size: 2rem;
`;
const TitleString = styled.div`
  display: inline;
  font-size: 1rem;
`;
const ImageCircle = styled.div`
  margin-top: 5rem;
  background-color: grey;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
`;
const NextButton = styled.button`
  margin-top: 2rem;
  color: grey;
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
        <Popup>
          <Flex>
            <CloseButton
              onClick={() => {
                props.onChangePrevStep();
              }}
            >
              X
            </CloseButton>
          </Flex>
          <BoldTitleString>
            {savingCode === '0' ? '매주' : '매월'} {addComma2Number(savingAmount)}원
          </BoldTitleString>
          <TitleString>씩</TitleString>
          <br />
          <TitleString>
            {endDate.getFullYear(endDate)}년 {endDate.getMonth(endDate) + 1}월
            {endDate.getDate(endDate)}일까지 모으신다면
          </TitleString>
          <br />
          <BoldTitleString>
            {savingCode === '0' &&
              `${countCertainDays([savingDetailCode], startDate, endDate) * savingAmount}원`}
            {savingCode === '1' &&
              `${
                countNumberOfPayment(startDate, endDate, Number(savingDetailCode)) * savingAmount
              }원`}
          </BoldTitleString>
          <TitleString>이 쌓여요</TitleString>
          <ImageCircle></ImageCircle>
          <TitleString>목표를 충분히 달성하실 수 있습니다.</TitleString>
          <Row>
            <NextButton
              onClick={() => {
                props.onChangePrevStep();
              }}
            >
              다시 설정하기
            </NextButton>
            <NextButton
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
              목표 설정 완료
            </NextButton>
          </Row>
        </Popup>
      </Background>
    </React.Fragment>
  );
};

export default GoalSettingStep5ConfrimPopupComponent;
