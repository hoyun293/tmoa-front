import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import residenceImg from '../../../public/assets/img/goalSetting/residenceImg.svg';
import donationImg from '../../../public/assets/img/goalSetting/donationImg.svg';
import marriageImg from '../../../public/assets/img/goalSetting/marriageImg.svg';
import tripImg from '../../../public/assets/img/goalSetting/tripImg.svg';
import interiorImg from '../../../public/assets/img/goalSetting/InteriorImg.svg';
import gameLeisureImg from '../../../public/assets/img/goalSetting/gameLeisureImg.svg';
import automobileImg from '../../../public/assets/img/goalSetting/automobileImg.svg';
import eventImg from '../../../public/assets/img/goalSetting/eventImg.svg';
import medicalTreatmentImg from '../../../public/assets/img/goalSetting/medicalTreatmentImg.svg';
import exerciseImg from '../../../public/assets/img/goalSetting/exerciseImg.svg';
import presentImg from '../../../public/assets/img/goalSetting/presentImg.svg';
import retirementImg from '../../../public/assets/img/goalSetting/retirementImg.svg';
import petImg from '../../../public/assets/img/goalSetting/petImg.svg';
import beautyImg from '../../../public/assets/img/goalSetting/beautyImg.svg';
import businessImg from '../../../public/assets/img/goalSetting/businessImg.svg';
import applianceImg from '../../../public/assets/img/goalSetting/applianceImg.svg';
import ButtonComponent from '../../components/CommonUIComponents/ButtonComponent';
import NavigationComponent from '../CommonUIComponents/NavigationComponent';
import axios from '../../js/http-util';
const Row = styled.div`
  display: flex;
  margin-top: 4rem;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Option = styled.div`
  width: 6.6rem;
  height: 10.5rem;
  flex: 1;
  text-align: center;
`;
const OptionImg = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;
const OptionName = styled.div`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.9rem;
  text-align: center;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

const CommonHeader = styled.div`
  font-style: normal;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const Header = styled(CommonHeader)`
  margin-top: 2rem;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
`;
const SubHeader = styled(CommonHeader)`
  margin-left: 2rem;
  margin-bottom: 3rem;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  color: grey;
`;
const SelectedOption = styled.div`
  border: 1px solid #16b877;
  box-sizing: border-box;
  border-radius: 5px;
`;
const GoalSettingStep1CategoryComponent = (props) => {
  var category = props.category;

  return (
    <React.Fragment>
      <NavigationComponent
        haveCancelButton={true}
        onClickCancelButton={() => {
          props.onClickCancelButton();
        }}
      />
      <Header>???????????? ??????????????? ??????????????????</Header>
      <SubHeader>??????????????? ???????????? ?????????????????????</SubHeader>
      <Row>
        {category === 'H' && (
          <Option>
            <SelectedOption>
              <OptionImg src={donationImg} />
              <OptionName color={'#118a59'}>???</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'H' && (
          <Option
            onClick={() => {
              props.getChildCategory('H');
            }}
          >
            <OptionImg src={donationImg} />
            <OptionName>???</OptionName>
          </Option>
        )}
        {category === 'D' && (
          <Option>
            <SelectedOption>
              <OptionImg src={residenceImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'D' && (
          <Option
            onClick={() => {
              props.getChildCategory('D');
            }}
          >
            <OptionImg src={residenceImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
        {category === 'AM' && (
          <Option>
            <SelectedOption>
              <OptionImg src={marriageImg} />
              <OptionName color={'#118a59'}>?????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'AM' && (
          <Option
            onClick={() => {
              props.getChildCategory('AM');
            }}
          >
            <OptionImg src={marriageImg} />
            <OptionName>?????????</OptionName>
          </Option>
        )}
        {category === 'T' && (
          <Option>
            <SelectedOption>
              <OptionImg src={tripImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'T' && (
          <Option
            onClick={() => {
              props.getChildCategory('T');
            }}
          >
            <OptionImg src={tripImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'I' && (
          <Option>
            <SelectedOption>
              <OptionImg src={interiorImg} />
              <OptionName color={'#118a59'}>????????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'I' && (
          <Option
            onClick={() => {
              props.getChildCategory('I');
            }}
          >
            <OptionImg src={interiorImg} />
            <OptionName>????????????</OptionName>
          </Option>
        )}
        {category === 'GL' && (
          <Option>
            <SelectedOption>
              <OptionImg src={gameLeisureImg} />
              <OptionName color={'#118a59'}>??????/??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'GL' && (
          <Option
            onClick={() => {
              props.getChildCategory('GL');
            }}
          >
            <OptionImg src={gameLeisureImg} />
            <OptionName>??????/??????</OptionName>
          </Option>
        )}
        {category === 'A' && (
          <Option>
            <SelectedOption>
              <OptionImg src={automobileImg} />
              <OptionName color={'#118a59'}>?????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'A' && (
          <Option
            onClick={() => {
              props.getChildCategory('A');
            }}
          >
            <OptionImg src={automobileImg} />
            <OptionName>?????????</OptionName>
          </Option>
        )}
        {category === 'UE' && (
          <Option>
            <SelectedOption>
              <OptionImg src={eventImg} />
              <OptionName color={'#118a59'}>??????/??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'UE' && (
          <Option
            onClick={() => {
              props.getChildCategory('UE');
            }}
          >
            <OptionImg src={eventImg} />
            <OptionName>??????/??????</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'M' && (
          <Option>
            <SelectedOption>
              <OptionImg src={medicalTreatmentImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'M' && (
          <Option
            onClick={() => {
              props.getChildCategory('M');
            }}
          >
            <OptionImg src={medicalTreatmentImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
        {category === 'S' && (
          <Option>
            <SelectedOption>
              <OptionImg src={exerciseImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'S' && (
          <Option
            onClick={() => {
              props.getChildCategory('S');
            }}
          >
            <OptionImg src={exerciseImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
        {category === 'PR' && (
          <Option>
            <SelectedOption>
              <OptionImg src={presentImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'PR' && (
          <Option
            onClick={() => {
              props.getChildCategory('PR');
            }}
          >
            <OptionImg src={presentImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
        {category === 'R' && (
          <Option>
            <SelectedOption>
              <OptionImg src={retirementImg} />
              <OptionName color={'#118a59'}>????????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'R' && (
          <Option
            onClick={() => {
              props.getChildCategory('R');
            }}
          >
            <OptionImg src={retirementImg} />
            <OptionName>????????????</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'PE' && (
          <Option>
            <SelectedOption>
              <OptionImg src={petImg} />
              <OptionName color={'#118a59'}>????????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'PE' && (
          <Option
            onClick={() => {
              props.getChildCategory('PE');
            }}
          >
            <OptionImg src={petImg} />
            <OptionName>????????????</OptionName>
          </Option>
        )}
        {category === 'B' && (
          <Option>
            <SelectedOption>
              <OptionImg src={beautyImg} />
              <OptionName color={'#118a59'}>??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'B' && (
          <Option
            onClick={() => {
              props.getChildCategory('B');
            }}
          >
            <OptionImg src={beautyImg} />
            <OptionName>??????</OptionName>
          </Option>
        )}
        {category === 'BC' && (
          <Option>
            <SelectedOption>
              <OptionImg src={businessImg} />
              <OptionName color={'#118a59'}>??????/??????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'BC' && (
          <Option
            onClick={() => {
              props.getChildCategory('BC');
            }}
          >
            <OptionImg src={businessImg} />
            <OptionName>??????/??????</OptionName>
          </Option>
        )}
        {category === 'DA' && (
          <Option>
            <SelectedOption>
              <OptionImg src={applianceImg} />
              <OptionName color={'#118a59'}>?????????</OptionName>
            </SelectedOption>
          </Option>
        )}
        {category !== 'DA' && (
          <Option
            onClick={() => {
              props.getChildCategory('DA');
            }}
          >
            <OptionImg src={applianceImg} />
            <OptionName>?????????</OptionName>
          </Option>
        )}
      </Row>

      <ButtonComponent
        disabled={category === '99' ? true : false}
        onClick={() => {
          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`??????`}
        radius={'0.5rem'}
        top={'55.6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep1CategoryComponent;
