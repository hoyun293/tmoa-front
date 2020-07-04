import React from 'react';
import styled from 'styled-components';
import spinner from '../../../public/assets/gif/spinner.gif';
const Spinner = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30rem;
  width: 8rem;
  height: 8rem;
  z-index: 2;
`;
const SpinnerComponent = (props) => {
  return <Spinner src={spinner} />;
};

export default SpinnerComponent;
