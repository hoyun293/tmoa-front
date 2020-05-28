import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: ${(props) => props.width || '20rem'};
  height: ${(props) => props.height || '5rem'};
  background-color: ${(props) => props.color || '#118A59'};
  display: flex;
  color: white;
  align-items: center;
  border-radius: ${(props) => props.radius || '0rem'};
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
      width={props.width}
      height={props.height}
      imgSrc={props.imgSrc}
      color={props.color}
      radius={props.radius}
      onClick={() => {
        props.onClick();
      }}
    >
      <ButtonString>{props.text}</ButtonString>
    </Button>
  );
};

export default ButtonComponent;
