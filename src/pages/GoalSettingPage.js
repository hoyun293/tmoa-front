import React, { useState, useEffect } from 'react';
import GoalSettingStep1CategoryComponent from '../components/GoalSettingStepComponents/GoalSettingStep1CategoryComponent';
import GoalSettingStep2InfoComponent from '../components/GoalSettingStepComponents/GoalSettingStep2InfoComponent';
import GoalSettingStep3AmountComponent from '../components/GoalSettingStepComponents/GoalSettingStep3AmountComponent';
import GoalSettingStep4PlanComponent from '../components/GoalSettingStepComponents/GoalSettingStep4PlanComponent';
import GoalSettingStep5ConfrimPopupComponent from '../components/GoalSettingStepComponents/GoalSettingStep5ConfrimPopupComponent';
const GoalSettingPage = () => {
  const [category, setCategory] = useState(99);
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tagString, setTagString] = useState('');
  const [tags, setTags] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [savingCode, setSavingCode] = useState('0');
  const [savingDetailCode, setSavingDetailCode] = useState('');
  const [savingAmount, setSavingAmount] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div>
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
            startDate={startDate}
            endDate={endDate}
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
    </div>
  );
};

export default GoalSettingPage;
