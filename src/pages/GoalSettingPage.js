import React, { useState, useEffect } from 'react';
import GoalSettingStep1CategoryComponent from '../components/GoalSettingStepComponents/GoalSettingStep1CategoryComponent';
import GoalSettingStep2InfoComponent from '../components/GoalSettingStepComponents/GoalSettingStep2InfoComponent';
import GoalSettingStep3AmountComponent from '../components/GoalSettingStepComponents/GoalSettingStep3AmountComponent';
import GoalSettingStep4PlanComponent from '../components/GoalSettingStepComponents/GoalSettingStep4PlanComponent';
import GoalSettingStep5ConfrimPopupComponent from '../components/GoalSettingStepComponents/GoalSettingStep5ConfrimPopupComponent';
const GoalSettingPage = () => {
  const [category, setCategory] = useState('');
  const [tartgetName, setTargetName] = useState('');
  //const [startDate, setStartDate] = useState(new Date().toLocaleDateString);
  //const [endDate, setEndDate] = useState(new Date().toLocaleDateString);
  const [tags, setTags] = useState('');
  const [tartgetAmount, setTargetAmount] = useState('');
  const [savingCode, setSavingCode] = useState('');
  const [savingDetailCode, setSavingDetailCode] = useState('');
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(step);
  }, []);
  return (
    <div>
      <div>
        {step === 1 && (
          <GoalSettingStep1CategoryComponent
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
          />
        )}
        {step === 2 && (
          <GoalSettingStep2InfoComponent
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
          />
        )}
        {step === 3 && (
          <GoalSettingStep3AmountComponent
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
          />
        )}
        {step === 4 && (
          <GoalSettingStep4PlanComponent
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onChangePrevStep={() => {
              setStep(step - 1);
            }}
          />
        )}
        {step === 5 && (
          <GoalSettingStep5ConfrimPopupComponent
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
