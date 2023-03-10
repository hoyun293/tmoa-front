import React from 'react';
import styled from 'styled-components';
const QuitPopupCard = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  width: 26rem;
  height: 11.5rem;
  z-index: 2;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
`;
const QuitPopupString = styled.div`
  padding-top: 2rem;
  width: 21.4rem;
  margin-left: 2rem;
  margin-right: 3.3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: rgba(0, 0, 0, 0.87);
`;
const FlexWrapper = styled.div`
  margin-right: 3rem;
`;
const Flex = styled.div`
  display: flex;
  width: 10rem;
  margin-left: auto;
`;
const PopUpCloseButton = styled.div`
  margin-left: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #222222;
`;
const PopUpConfirmButton = styled.div`
  margin-left: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #222222;
`;
const DummyDiv = styled.div`
  height: 2.5rem;
`;

const ModalComponent = (props) => {
  return (
    <QuitPopupCard>
      <QuitPopupString>{props.message}</QuitPopupString>
      {props.shortMessage && <DummyDiv></DummyDiv>}
      <FlexWrapper>
        <Flex>
          <PopUpCloseButton
            onClick={() => {
              props.cancel();
            }}
          >
            {props.leftButton}
          </PopUpCloseButton>
          <PopUpConfirmButton
            onClick={() => {
              props.ok();
            }}
          >
            {props.rightButton}
          </PopUpConfirmButton>
        </Flex>
      </FlexWrapper>
    </QuitPopupCard>
  );
};

export default ModalComponent;
