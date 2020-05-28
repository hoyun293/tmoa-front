import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GoalSettingStep1CategoryComponent from '../../components/GoalSettingStepComponents/GoalSettingStep1CategoryComponent';
import GoalSettingStep2InfoComponent from '../../components/GoalSettingStepComponents/GoalSettingStep2InfoComponent';
import GoalSettingStep3AmountComponent from '../../components/GoalSettingStepComponents/GoalSettingStep3AmountComponent';
import GoalSettingStep4PlanComponent from '../../components/GoalSettingStepComponents/GoalSettingStep4PlanComponent';
import GoalSettingStep5ConfrimPopupComponent from '../../components/GoalSettingStepComponents/GoalSettingStep5ConfrimPopupComponent';
import GoalSettingQuitBackground from '../../components/GoalSettingStepComponents/GoalSettingQuitBackground';
import GoalSettingQuitPopupComponent from '../../components/GoalSettingStepComponents/GoalSettingQuitPopupComponent';
import styled from 'styled-components';
const GoalSettingPage = () => {
  const [category, setCategory] = useState(99);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tagString, setTagString] = useState('');
  const [tags, setTags] = useState('');
  const [goalAmount, setGoalAmount] = useState('0');
  const [savingCode, setSavingCode] = useState('0');
  const [savingDetailCode, setSavingDetailCode] = useState('');
  const [savingAmount, setSavingAmount] = useState('0');
  const [step, setStep] = useState(1);
  const [popUp, setPopup] = useState(false);
  const [cancel, setCancel] = useState(false);
  const history = useHistory();
  const CloseButton = styled.div`
    width: 5rem;
    height: 5rem;
    font-size: 5rem;
  `;
  useEffect(() => {
    if (cancel === true) {
      history.push('/mainDashboardBlank');
    }
  }, [cancel]);
  return (
    <>
      <CloseButton
        onClick={() => {
          if (popUp === false) {
            setPopup(true);
          } else {
            setPopup(false);
          }
        }}
      >
        X
      </CloseButton>
      {popUp === true && <GoalSettingQuitBackground />}
      {popUp === true && (
        <GoalSettingQuitPopupComponent
          cancel={() => {
            setPopup(false);
          }}
          ok={() => {
            setPopup(false);
            setCancel(true);
          }}
        />
      )}
      <div>
        {step === 1 && (
          <GoalSettingStep1CategoryComponent
            category={category}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            getChildCategory={(category) => {
              setCategory(category);
            }}
          />
        )}
        {step === 2 && (
          <GoalSettingStep2InfoComponent
            goalName={goalName}
            startDate={startDate}
            endDate={endDate}
            tagString={tagString}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
            getChildGoalName={(goalName) => {
              setGoalName(goalName);
            }}
            getChildStartDate={(startDate) => {
              setStartDate(startDate);
            }}
            getChildEndDate={(endDate) => {
              setEndDate(endDate);
            }}
            getChildTagString={(tagString) => {
              setTagString(tagString);
            }}
          />
        )}
        {step === 3 && (
          <GoalSettingStep3AmountComponent
            goalAmount={goalAmount}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
            getChildGoalAmount={(goalAmount) => {
              setGoalAmount(goalAmount);
            }}
          />
        )}
        {step === 4 && (
          <GoalSettingStep4PlanComponent
            goalAmount={goalAmount}
            savingCode={savingCode}
            savingDetailCode={savingDetailCode}
            savingAmount={savingAmount}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
            getChildSavingCode={(savingCode) => {
              setSavingCode(savingCode);
            }}
            getChildSavingDetailCode={(savingDetailCode) => {
              setSavingDetailCode(savingDetailCode);
            }}
            getChildSavingAmount={(savingAmount) => {
              setSavingAmount(savingAmount);
            }}
          />
        )}
        {step === 5 && (
          <GoalSettingStep5ConfrimPopupComponent
            category={category}
            goalName={goalName}
            startDate={startDate}
            endDate={endDate}
            tagString={tagString}
            goalAmount={goalAmount}
            savingCode={savingCode}
            savingDetailCode={savingDetailCode}
            savingAmount={savingAmount}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
          ></GoalSettingStep5ConfrimPopupComponent>
        )}
      </div>
    </>
  );
};

export default GoalSettingPage;
