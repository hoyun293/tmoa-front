import React from ' react';
import styled from 'styled-component';

const Button = styled.div`
    width: ${props => props.width || '20rem'}
    height: ${props => props.height || '5rem'}
    background-img: ${props => props.imgSrc || ''}
`;
const ButtonComponent = (props) =>{
    return <Button width={props.width} height={props.height} imgSrc={props.imgSrc}

    />
}

export default ButtonComponent;

