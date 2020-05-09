import React, { useState } from 'react';
import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { useSelector } from 'react-redux';
const InputGoalName = styled.input`
  margin-top: 4rem;
`;
const GoalSettingStep2InfoComponent = () => {
  const goalState = useSelector((state) => state.goal);
  var today = new Date();
  var startStrDate = today.toLocaleDateString('ko-KR');
  var endStrDate = today.toLocaleDateString('ko-KR');

  console.log(startStrDate);
  const [startDate, setStartDate] = useState(startStrDate);
  const [endDate, setEndDate] = useState(endStrDate);
  return (
    <div>
      <div>목표 기간 등을 입력하세요</div>
      <div>목표명</div>
      <InputGoalName></InputGoalName>
      <div>기간</div>
      <Flatpickr
        data-enable-time
        value={startDate}
        onChange={(startDate) => {
          setStartDate(startDate);
        }}
      />
      <Flatpickr
        data-enable-time
        value={endDate}
        onChange={(endDate) => {
          setEndDate(endDate);
        }}
      />
    </div>
  );
};

export default GoalSettingStep2InfoComponent;
