import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: ${(props) => props.top || '61rem'};
  width: ${(props) => props.width || '20rem'};
  height: ${(props) => props.height || '5rem'};
  background-color: ${(props) => props.color || '#16B877'};
  display: flex;
  color: white;
  align-items: center;
  border-radius: ${(props) => props.radius || '0rem'};
  margin: ${(props) => props.noCenter || '0 auto'};
  left: 50%;
  transform: translateX(-50%);
  border: none;
`;
const ButtonString = styled.div`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const ButtonComponent = (props) => {
  return (
    <Button
      disabled={props.disabled}
      width={props.width}
      height={props.height}
      imgSrc={props.imgSrc}
      color={props.color}
      radius={props.radius}
      top={props.top}
      noCenter={props.noCenter}
      onClick={() => {
        props.onClick();
      }}
    >
      <ButtonString>{props.text}</ButtonString>
    </Button>
  );
};

export default ButtonComponent;
