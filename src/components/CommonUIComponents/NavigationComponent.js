import React from 'react';
import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  width: 88.8%;
  margin: 0 auto;
`;
const BackButton = styled.div`
  margin-right: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
`;
const CancelButton = styled.div`
  margin-left: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
`;
const NavigationComponent = (props) => {
  return (
    <NavigationBar>
      {props.haveBackButton === true && (
        <BackButton
          onClick={() => {
            props.onClickBackButton();
          }}
        >
          뒤로
        </BackButton>
      )}
      {props.haveCancelButton === true && (
        <CancelButton
          onClick={() => {
            props.onClickCancelButton();
          }}
        >
          취소
        </CancelButton>
      )}
    </NavigationBar>
  );
};

export default NavigationComponent;
