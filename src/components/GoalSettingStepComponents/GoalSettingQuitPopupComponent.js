import React from 'react';
import styled from 'styled-components';

const QuitPopupCard = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    height: 8rem;
    border-radius: 0.6rem;
`;
const QuitPopupString = styled.div`
    width: 10rem;
`;
const GoalSettingQuitPopupComponent = () =>{
    return(
        <QuitPopupCard>
            <QuitPopupString>
                목표 설정이 완료되지 않았습니다. 취소하시겠습니까?
            </QuitPopupString>
        </QuitPopupCard>
    )
}

export default GoalSettingQuitPopupComponent;