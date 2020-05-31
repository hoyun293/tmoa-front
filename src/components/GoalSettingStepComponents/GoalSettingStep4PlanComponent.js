import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSettingStep4PlanComponent1Weekly from './GoalSettingStep4PlanComponent1Weekly';
import GoalSettingStep4PlanComponent2Monthly from './GoalSettingStep4PlanComponent2Monthly';
import { addComma2Number } from '../../js/CommonFunc';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';

const Header = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const SubHeader = styled.div`
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const InputAbsolute = styled.input`
  width: 77.7%;
  position: absolute;
  top: 16rem;
  left: 50%;
  transform: translateX(-50%);
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 2.2rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  outline: 0;
  text-align: right;
`;
const Row = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const PropertyName = styled.div`
  position: absolute;
  top: 26.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: #222222;
`;
const SavingCodeSelect = styled.select`
  position: absolute;
  top: 26.5rem;
  width: 7rem;
  height: 3rem;
  right: 5.5%;
  display: block;
  background: #ffffff;
  border: 1px solid rgba(170, 170, 170, 0.4);
  box-sizing: border-box;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
const SavingCodeOption = styled.option`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #aaaaaa;
`;
const NextButton = styled.button`
  margin-top: 10rem;
  color: grey;
  display: block;
`;
const MinusButton = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 15rem;
  left: 5.5%;
`;
const PlusButton = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 15rem;
  right: 5.5%;
`;
const GoalSettingStep4PlanComponent = (props) => {
  const [savingCode, setSavingCode] = useState(props.savingCode);
  const [savingDetailCode, setSavingDetailCode] = useState(props.savingDetailCode);
  const [savingAmount, setSavingAmount] = useState(props.savingAmount);

  return (
    <React.Fragment>
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

      <Row>
        <MinusButton
          disabled={Number(savingAmount) < 100000 ? true : false}
          onClick={() => {
            setSavingAmount(String(Number(savingAmount) - 100000));
          }}
        >
          -
        </MinusButton>
        <InputAbsolute
          value={addComma2Number(savingAmount)}
          onChange={({ target }) => {
            setSavingAmount(target.value.replace(/,/gi, ''));
          }}
        ></InputAbsolute>
        <PlusButton
          onClick={() => {
            setSavingAmount(String(Number(savingAmount) + 100000));
          }}
        >
          +
        </PlusButton>
      </Row>

      <Row>
        <PropertyName>입금을 설정해주세요</PropertyName>
        <SavingCodeSelect
          value={savingCode}
          onChange={(e) => {
            setSavingCode(e.target.value);
            setSavingDetailCode('');
          }}
        >
          <SavingCodeOption value="W">매주</SavingCodeOption>
          <SavingCodeOption value="M">매달</SavingCodeOption>
        </SavingCodeSelect>
      </Row>
      {savingCode === 'W' && (
        <GoalSettingStep4PlanComponent1Weekly
          day={savingDetailCode}
          onClickDay={(dayCode) => {
            setSavingDetailCode(dayCode);
          }}
        ></GoalSettingStep4PlanComponent1Weekly>
      )}
      {savingCode === 'M' && (
        <GoalSettingStep4PlanComponent2Monthly
          date={savingDetailCode}
          onClickDate={(dateCode) => {
            setSavingDetailCode(dateCode);
          }}
        ></GoalSettingStep4PlanComponent2Monthly>
      )}
      <ButtonComponent
        disabled={savingDetailCode === '' || savingAmount === '' ? true : false}
        onClick={() => {
          if (Number(props.goalAmount) < Number(savingAmount)) {
            alert('목표금액보다 더 높은 금액을 입력하셨습니다.');
            return;
          }
          props.getChildSavingCode(savingCode);
          props.getChildSavingDetailCode(savingDetailCode);
          props.getChildSavingAmount(savingAmount);
          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`다음`}
        radius={'0.5rem'}
        top={'55.6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent;
