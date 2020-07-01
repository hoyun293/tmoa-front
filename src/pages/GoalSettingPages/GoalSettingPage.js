import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GoalSettingStep1CategoryComponent from '../../components/GoalSettingStepComponents/GoalSettingStep1CategoryComponent';
import GoalSettingStep2InfoComponent from '../../components/GoalSettingStepComponents/GoalSettingStep2InfoComponent';
import GoalSettingStep3AmountComponent from '../../components/GoalSettingStepComponents/GoalSettingStep3AmountComponent';
import GoalSettingStep4PlanComponent from '../../components/GoalSettingStepComponents/GoalSettingStep4PlanComponent';
import GoalSettingStep5ConfrimPopupComponent from '../../components/GoalSettingStepComponents/GoalSettingStep5ConfrimPopupComponent';
import GoalSettingStep6LastComponent from '../../components/GoalSettingStepComponents/GoalSettingStep6LastComponent';
import ModalBackground from '../../components/CommonUIComponents/ModalBackground';
import ModalComponent from '../../components/CommonUIComponents/ModalComponent';
import { convertStrToDate } from '../../js/CommonFunc';
import { fetchGoal } from '../../api/main-detail-goal-api';
const GoalSettingPage = ({ match }) => {
  const [category, setCategory] = useState('99');
  const [goalName, setGoalName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tagString, setTagString] = useState('');
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

  const [goal, setGoal] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (cancel === true) {
      history.push('/mainDashboard');
    }
  }, [cancel]);
  useEffect(() => {
    console.log(match.params.goalId);
    if (match.params.goalId !== undefined) {
      const requestGoal = async () => {
        const response = await fetchGoal({
          goalId: match.params.goalId,
        });
        const { data, code } = response.data;
        console.log(data[0]);
        setGoal(data[0]);
      };

      requestGoal();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(goal).length !== 0) {
      setCategory(goal.category);
      setGoalName(goal.title);
      setStartDate(convertStrToDate(goal.goalStartDate));
      setEndDate(convertStrToDate(goal.goalEndDate));
      setTagString(`#${goal.tags.join('#')}`);
      setGoalAmount(String(goal.targetAmount));
      setSavingCode(goal.savingCode);
      setSavingDetailCode(goal.savingDetailCode);
      setSavingAmount(String(goal.savingAmount));
      setCurrentAmount(String(goal.currentAmount));
      setIsUpdate(true);
    }
  }, [goal]);
  return (
    <>
      {popUp === true && <ModalBackground />}
      {popUp === true && (
        <ModalComponent
          message={'목표 설정이 완료되지 않았습니다. 취소하시겠습니까?'}
          leftButton={'닫기'}
          rightButton={'확인'}
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
            isUpdate={isUpdate}
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
            goalId={match.params.goalId}
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
            onChangeNextStep={() => {
              setStep(step + 1);
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

        {step === 6 && <GoalSettingStep6LastComponent />}
      </div>
    </>
  );
};

export default GoalSettingPage;
