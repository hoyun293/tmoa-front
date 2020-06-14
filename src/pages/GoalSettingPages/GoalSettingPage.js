import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GoalSettingStep1CategoryComponent from '../../components/GoalSettingStepComponents/GoalSettingStep1CategoryComponent';
import GoalSettingStep2InfoComponent from '../../components/GoalSettingStepComponents/GoalSettingStep2InfoComponent';
import GoalSettingStep3AmountComponent from '../../components/GoalSettingStepComponents/GoalSettingStep3AmountComponent';
import GoalSettingStep4PlanComponent from '../../components/GoalSettingStepComponents/GoalSettingStep4PlanComponent';
import GoalSettingStep5ConfrimPopupComponent from '../../components/GoalSettingStepComponents/GoalSettingStep5ConfrimPopupComponent';
import GoalSettingQuitBackground from '../../components/GoalSettingStepComponents/GoalSettingQuitBackground';
import GoalSettingQuitPopupComponent from '../../components/GoalSettingStepComponents/GoalSettingQuitPopupComponent';
const GoalSettingPage = ({ match }) => {
  const [category, setCategory] = useState('99');
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tagString, setTagString] = useState([]);
  const [tags, setTags] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [savingCode, setSavingCode] = useState('D');
  const [savingDetailCode, setSavingDetailCode] = useState('D');
  const [savingAmount, setSavingAmount] = useState('0');
  const [step, setStep] = useState(1);

  const [isUpdate, setIsUpdate] = useState(false);
  const [currentAmount, setCurrentAmount] = useState('0');
  const [popUp, setPopup] = useState(false);
  const [cancel, setCancel] = useState(false);

  const history = useHistory();
  useEffect(() => {
    if (cancel === true) {
      history.push('/mainDashboardBlank');
    }
  }, [cancel]);
  useEffect(() => {
    if (match.params.goalId !== undefined) {
      setCategory('H');
      setGoalName('수정할 목표 이름');
      setStartDate(new Date(2020, 6, 10));
      setEndDate(new Date(2020, 6, 15));
      setTagString('#전자기기#애플#삼성#소니#LG');
      setGoalAmount('1200000');
      setSavingCode('W');
      setSavingDetailCode('3');
      setSavingAmount('120000');
      setCurrentAmount('100000');
      setIsUpdate(true);
    }
  }, []);
  return (
    <>
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
            onClickCancelButton={() => {
              if (popUp === false) {
                setPopup(true);
              } else {
                setPopup(false);
              }
            }}
          />
        )}
        {step === 2 && (
          <GoalSettingStep2InfoComponent
            goalName={goalName}
            startDate={startDate}
            endDate={endDate}
            tagString={tagString}
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
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onClickBackButton={() => {
              setStep(step - 1);
            }}
            onClickCancelButton={() => {
              if (popUp === false) {
                setPopup(true);
              } else {
                setPopup(false);
              }
            }}
          />
        )}
        {step === 3 && (
          <GoalSettingStep3AmountComponent
            goalAmount={goalAmount}
            onChangeNextStep={() => {
              setStep(step + 1);
            }}
            onClickBackButton={() => {
              setStep(step - 1);
            }}
            onClickCancelButton={() => {
              if (popUp === false) {
                setPopup(true);
              } else {
                setPopup(false);
              }
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
            onClickBackButton={() => {
              setStep(step - 1);
            }}
            onClickCancelButton={() => {
              if (popUp === false) {
                setPopup(true);
              } else {
                setPopup(false);
              }
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
            currentAmount={currentAmount}
            isUpdate={isUpdate}
            onClickBackButton={() => {
              setStep(step - 1);
            }}
            onClickCancelButton={() => {
              if (popUp === false) {
                setPopup(true);
              } else {
                setPopup(false);
              }
            }}
          ></GoalSettingStep5ConfrimPopupComponent>
        )}
      </div>
    </>
  );
};

export default GoalSettingPage;
