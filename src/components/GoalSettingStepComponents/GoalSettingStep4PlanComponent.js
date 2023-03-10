import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoalSettingStep4PlanComponent0Daily from './GoalSettingStep4PlanComponent0Daily';
import GoalSettingStep4PlanComponent1Weekly from './GoalSettingStep4PlanComponent1Weekly';
import GoalSettingStep4PlanComponent2Monthly from './GoalSettingStep4PlanComponent2Monthly';
import { addComma2Number } from '../../js/CommonFunc';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';
import Flatpickr from 'react-flatpickr';

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
  &:focus {
    border-color: #16b877;
  }
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
  border-radius: 5px;
`;
const SavingCodeOption = styled.option`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #aaaaaa;
`;

const CommonButton = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 15rem;
`;
const MinusButton = styled(CommonButton)`
  left: 5.5%;
`;
const PlusButton = styled(CommonButton)`
  right: 5.5%;
`;
const GoalSettingStep4PlanComponent = (props) => {
  var savingCode = props.savingCode;
  var savingDetailCode = props.savingDetailCode;
  var savingAmount = props.savingAmount;
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
      <Header>?????? ????????? ??????</Header>
      <SubHeader>?????? ????????? ????????????????</SubHeader>

      <Row>
        <MinusButton
          //    disabled={Number(savingAmount) <= 100000 ? true : false}
          onClick={() => {
            if (Number(savingAmount) > 100000) {
              props.getChildSavingAmount(String(Number(savingAmount) - 100000));
            }
          }}
        >
          -
        </MinusButton>
        <InputAbsolute
          value={addComma2Number(savingAmount)}
          onKeyPress={() => {
            if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
          }}
          onChange={({ target }) => {
            props.getChildSavingAmount(target.value.replace(/,/gi, ''));
          }}
          placeholder={'0'}
        ></InputAbsolute>
        <PlusButton
          onClick={() => {
            props.getChildSavingAmount(String(Number(savingAmount) + 100000));
          }}
        >
          +
        </PlusButton>
      </Row>

      <Row>
        <PropertyName>???????????? ??????????????????</PropertyName>
        <SavingCodeSelect
          value={savingCode}
          onChange={(e) => {
            props.getChildSavingCode(e.target.value);
            if (e.target.value === 'D') {
              props.getChildSavingDetailCode('D');
            } else {
              props.getChildSavingDetailCode('');
            }
          }}
        >
          <SavingCodeOption value="D">??????</SavingCodeOption>
          <SavingCodeOption value="W">??????</SavingCodeOption>
          <SavingCodeOption value="M">??????</SavingCodeOption>
        </SavingCodeSelect>
      </Row>
      {savingCode === 'D' && <GoalSettingStep4PlanComponent0Daily />}
      {savingCode === 'W' && (
        <GoalSettingStep4PlanComponent1Weekly
          day={savingDetailCode}
          onClickDay={(dayCode) => {
            props.getChildSavingDetailCode(dayCode);
          }}
        ></GoalSettingStep4PlanComponent1Weekly>
      )}
      {savingCode === 'M' && (
        <GoalSettingStep4PlanComponent2Monthly
          date={savingDetailCode}
          onClickDate={(dateCode) => {
            props.getChildSavingDetailCode(dateCode);
          }}
        ></GoalSettingStep4PlanComponent2Monthly>
      )}

      <ButtonComponent
        disabled={savingDetailCode === '' || savingAmount === '' ? true : false}
        onClick={() => {
          if (Number(props.goalAmount) < Number(savingAmount)) {
            alert('?????????????????? ??? ?????? ????????? ?????????????????????.');
            return;
          }

          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`??????`}
        radius={'0.5rem'}
        top={'55.6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep4PlanComponent;
