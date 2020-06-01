import React, { useState } from 'react';
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
const SelectedOption = styled.div`
  width: 6.6rem;
  height: 10.5rem;
  flex: 1;
  text-align: center;
  border: 1px solid green;
`;
const OptionImg = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;
const OptionName = styled.div`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.9rem;
  text-align: center;
`;

const Header = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const SubHeader = styled.div`
  margin-left: 2rem;
  margin-bottom: 3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: grey;
`;

const GoalSettingStep1CategoryComponent = (props) => {
  const [category, setCategory] = useState(props.category);
  return (
    <React.Fragment>
      <NavigationComponent
        haveCancelButton={true}
        onClickCancelButton={() => {
          props.onClickCancelButton();
        }}
      />
      <Header>관심있는 카테고리를 선택해보세요</Header>
      <SubHeader>카테고리는 한가지만 선택가능합니다</SubHeader>
      <Row>
        {category === 'H' && (
          <SelectedOption>
            <OptionImg src={donationImg} />
            <OptionName>집</OptionName>
          </SelectedOption>
        )}
        {category !== 'H' && (
          <Option
            onClick={() => {
              setCategory('H');
            }}
          >
            <OptionImg src={donationImg} />
            <OptionName>집</OptionName>
          </Option>
        )}
        {category === 'D' && (
          <SelectedOption>
            <OptionImg src={residenceImg} />
            <OptionName>기부</OptionName>
          </SelectedOption>
        )}
        {category !== 'D' && (
          <Option
            onClick={() => {
              setCategory('D');
            }}
          >
            <OptionImg src={residenceImg} />
            <OptionName>기부</OptionName>
          </Option>
        )}
        {category === 'AM' && (
          <SelectedOption>
            <OptionImg src={marriageImg} />
            <OptionName>기념일ㆍ결혼</OptionName>
          </SelectedOption>
        )}
        {category !== 'AM' && (
          <Option
            onClick={() => {
              setCategory('AM');
            }}
          >
            <OptionImg src={marriageImg} />
            <OptionName>기념일ㆍ결혼</OptionName>
          </Option>
        )}
        {category === 'T' && (
          <SelectedOption>
            <OptionImg src={tripImg} />
            <OptionName>여행</OptionName>
          </SelectedOption>
        )}
        {category !== 'T' && (
          <Option
            onClick={() => {
              setCategory('T');
            }}
          >
            <OptionImg src={tripImg} />
            <OptionName>여행</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'I' && (
          <SelectedOption>
            <OptionImg src={interiorImg} />
            <OptionName>인테리어</OptionName>
          </SelectedOption>
        )}
        {category !== 'I' && (
          <Option
            onClick={() => {
              setCategory('I');
            }}
          >
            <OptionImg src={interiorImg} />
            <OptionName>인테리어</OptionName>
          </Option>
        )}
        {category === 'GL' && (
          <SelectedOption>
            <OptionImg src={gameLeisureImg} />
            <OptionName>게임ㆍ여가</OptionName>
          </SelectedOption>
        )}
        {category !== 'GL' && (
          <Option
            onClick={() => {
              setCategory('GL');
            }}
          >
            <OptionImg src={gameLeisureImg} />
            <OptionName>게임ㆍ여가</OptionName>
          </Option>
        )}
        {category === 'A' && (
          <SelectedOption>
            <OptionImg src={automobileImg} />
            <OptionName>자동차</OptionName>
          </SelectedOption>
        )}
        {category !== 'A' && (
          <Option
            onClick={() => {
              setCategory('A');
            }}
          >
            <OptionImg src={automobileImg} />
            <OptionName>자동차</OptionName>
          </Option>
        )}
        {category === 'UE' && (
          <SelectedOption>
            <OptionImg src={eventImg} />
            <OptionName>모임ㆍ행사</OptionName>
          </SelectedOption>
        )}
        {category !== 'UE' && (
          <Option
            onClick={() => {
              setCategory('UE');
            }}
          >
            <OptionImg src={eventImg} />
            <OptionName>모임ㆍ행사</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'M' && (
          <SelectedOption>
            <OptionImg src={medicalTreatmentImg} />
            <OptionName>의료</OptionName>
          </SelectedOption>
        )}
        {category !== 'M' && (
          <Option
            onClick={() => {
              setCategory('M');
            }}
          >
            <OptionImg src={medicalTreatmentImg} />
            <OptionName>의료</OptionName>
          </Option>
        )}
        {category === 'S' && (
          <SelectedOption>
            <OptionImg src={exerciseImg} />
            <OptionName>운동</OptionName>
          </SelectedOption>
        )}
        {category !== 'S' && (
          <Option
            onClick={() => {
              setCategory('S');
            }}
          >
            <OptionImg src={exerciseImg} />
            <OptionName>운동</OptionName>
          </Option>
        )}
        {category === 'PR' && (
          <SelectedOption>
            <OptionImg src={presentImg} />
            <OptionName>선물</OptionName>
          </SelectedOption>
        )}
        {category !== 'PR' && (
          <Option
            onClick={() => {
              setCategory('PR');
            }}
          >
            <OptionImg src={presentImg} />
            <OptionName>선물</OptionName>
          </Option>
        )}
        {category === 'R' && (
          <SelectedOption>
            <OptionImg src={retirementImg} />
            <OptionName>노후자금</OptionName>
          </SelectedOption>
        )}
        {category !== 'R' && (
          <Option
            onClick={() => {
              setCategory('R');
            }}
          >
            <OptionImg src={retirementImg} />
            <OptionName>노후자금</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 'PE' && (
          <SelectedOption>
            <OptionImg src={petImg} />
            <OptionName>반려동물</OptionName>
          </SelectedOption>
        )}
        {category !== 'PE' && (
          <Option
            onClick={() => {
              setCategory('PE');
            }}
          >
            <OptionImg src={petImg} />
            <OptionName>반려동물</OptionName>
          </Option>
        )}
        {category === 'B' && (
          <SelectedOption>
            <OptionImg src={beautyImg} />
            <OptionName>뷰티</OptionName>
          </SelectedOption>
        )}
        {category !== 'B' && (
          <Option
            onClick={() => {
              setCategory('B');
            }}
          >
            <OptionImg src={beautyImg} />
            <OptionName>뷰티</OptionName>
          </Option>
        )}
        {category === 'BC' && (
          <SelectedOption>
            <OptionImg src={businessImg} />
            <OptionName>창업ㆍ회사</OptionName>
          </SelectedOption>
        )}
        {category !== 'BC' && (
          <Option
            onClick={() => {
              setCategory('BC');
            }}
          >
            <OptionImg src={businessImg} />
            <OptionName>창업ㆍ회사</OptionName>
          </Option>
        )}
        {category === 'DA' && (
          <SelectedOption>
            <OptionImg src={applianceImg} />
            <OptionName>디지털ㆍ가전</OptionName>
          </SelectedOption>
        )}
        {category !== 'DA' && (
          <Option
            onClick={() => {
              setCategory('DA');
            }}
          >
            <OptionImg src={applianceImg} />
            <OptionName>디지털ㆍ가전</OptionName>
          </Option>
        )}
      </Row>

      <ButtonComponent
        disabled={category === '99' ? true : false}
        onClick={() => {
          props.getChildCategory(category);
          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`다음`}
        radius={'0.5rem'}
        top={'55.6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep1CategoryComponent;
