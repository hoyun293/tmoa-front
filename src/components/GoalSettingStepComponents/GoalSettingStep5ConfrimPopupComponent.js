import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addComma2Number, countCertainDays } from '../../js/CommonFunc';
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
  margin-top: 5rem;
  color: grey;
`;

const GoalSettingStep5ConfrimPopupComponent = (prop) => {
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
  const [startDate, setStartDate] = useState(prop.startDate);
  const [endDate, setEndDate] = useState(prop.endDate);
  const [savingCode, setSavingCode] = useState(prop.savingCode);
  const [savingDetailCode, setSavingDetailCode] = useState(prop.savingDetailCode);
  const [savingAmount, setSavingAmount] = useState(prop.savingAmount);
  return (
    <React.Fragment>
      <Background>
        <Popup>
          <Flex>
            <CloseButton
              onClick={() => {
                prop.onChangePrevStep();
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
                prop.onChangePrevStep();
              }}
            >
              다시 설정하기
            </NextButton>
            <NextButton>목표 설정 완료</NextButton>
          </Row>
        </Popup>
      </Background>
    </React.Fragment>
  );
};

export default GoalSettingStep5ConfrimPopupComponent;
