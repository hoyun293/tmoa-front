import React, { useState } from 'react';
import styled from 'styled-components';
import residenceImg from '../../../public/assets/img/goalSetting/residenceImg.svg';
import donationImg from '../../../public/assets/img/goalSetting/donationImg.svg';
import marriageImg from '../../../public/assets/img/goalSetting/marriageImg.svg';
import tripImg from '../../../public/assets/img/goalSetting/tripImg.svg';
import interiorImg from '../../../public/assets/img/goalSetting/interiorImg.svg';
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
const UnSelectedCategoryBox = styled.div`
  padding: 3rem;
  border: 1px solid grey;
`;

const SelectedCategoryBox = styled.div`
  padding: 3rem;
  border: 3px solid red;
`;

const Header = styled.div`
  margin-top: 1rem;
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
const NextButton = styled.button`
  margin-top: 10rem;
  color: grey;
  display: block;
`;
const GoalSettingStep1CategoryComponent = (props) => {
  const [category, setCategory] = useState(props.category);

  return (
    <React.Fragment>
      <Header>관심있는 카테고리를 선택해보세요</Header>
      <SubHeader>카테고리는 한가지만 선택가능합니다</SubHeader>
      <Row>
        {category === 0 && (
          <SelectedOption>
            <OptionImg src={donationImg} />
            <OptionName>집</OptionName>
          </SelectedOption>
        )}
        {category !== 0 && (
          <Option
            onClick={() => {
              setCategory(0);
            }}
          >
            <OptionImg src={donationImg} />
            <OptionName>집</OptionName>
          </Option>
        )}
        {category === 1 && (
          <SelectedOption>
            <OptionImg src={residenceImg} />
            <OptionName>기부</OptionName>
          </SelectedOption>
        )}
        {category !== 1 && (
          <Option
            onClick={() => {
              setCategory(1);
            }}
          >
            <OptionImg src={residenceImg} />
            <OptionName>기부</OptionName>
          </Option>
        )}
        {category === 2 && (
          <SelectedOption>
            <OptionImg src={marriageImg} />
            <OptionName>기념일ㆍ결혼</OptionName>
          </SelectedOption>
        )}
        {category !== 2 && (
          <Option
            onClick={() => {
              setCategory(2);
            }}
          >
            <OptionImg src={marriageImg} />
            <OptionName>기념일ㆍ결혼</OptionName>
          </Option>
        )}
        {category === 3 && (
          <SelectedOption>
            <OptionImg src={tripImg} />
            <OptionName>여행</OptionName>
          </SelectedOption>
        )}
        {category !== 3 && (
          <Option
            onClick={() => {
              setCategory(3);
            }}
          >
            <OptionImg src={tripImg} />
            <OptionName>여행</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 4 && (
          <SelectedOption>
            <OptionImg src={interiorImg} />
            <OptionName>인테리어</OptionName>
          </SelectedOption>
        )}
        {category !== 4 && (
          <Option
            onClick={() => {
              setCategory(4);
            }}
          >
            <OptionImg src={interiorImg} />
            <OptionName>인테리어</OptionName>
          </Option>
        )}
        {category === 5 && (
          <SelectedOption>
            <OptionImg src={gameLeisureImg} />
            <OptionName>게임ㆍ여가</OptionName>
          </SelectedOption>
        )}
        {category !== 5 && (
          <Option
            onClick={() => {
              setCategory(5);
            }}
          >
            <OptionImg src={gameLeisureImg} />
            <OptionName>게임ㆍ여가</OptionName>
          </Option>
        )}
        {category === 6 && (
          <SelectedOption>
            <OptionImg src={automobileImg} />
            <OptionName>자동차</OptionName>
          </SelectedOption>
        )}
        {category !== 6 && (
          <Option
            onClick={() => {
              setCategory(6);
            }}
          >
            <OptionImg src={automobileImg} />
            <OptionName>자동차</OptionName>
          </Option>
        )}
        {category === 7 && (
          <SelectedOption>
            <OptionImg src={eventImg} />
            <OptionName>모임ㆍ행사</OptionName>
          </SelectedOption>
        )}
        {category !== 7 && (
          <Option
            onClick={() => {
              setCategory(7);
            }}
          >
            <OptionImg src={eventImg} />
            <OptionName>모임ㆍ행사</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 8 && (
          <SelectedOption>
            <OptionImg src={medicalTreatmentImg} />
            <OptionName>의료</OptionName>
          </SelectedOption>
        )}
        {category !== 8 && (
          <Option
            onClick={() => {
              setCategory(8);
            }}
          >
            <OptionImg src={medicalTreatmentImg} />
            <OptionName>의료</OptionName>
          </Option>
        )}
        {category === 9 && (
          <SelectedOption>
            <OptionImg src={exerciseImg} />
            <OptionName>운동</OptionName>
          </SelectedOption>
        )}
        {category !== 9 && (
          <Option
            onClick={() => {
              setCategory(9);
            }}
          >
            <OptionImg src={exerciseImg} />
            <OptionName>운동</OptionName>
          </Option>
        )}
        {category === 10 && (
          <SelectedOption>
            <OptionImg src={presentImg} />
            <OptionName>선물</OptionName>
          </SelectedOption>
        )}
        {category !== 10 && (
          <Option
            onClick={() => {
              setCategory(10);
            }}
          >
            <OptionImg src={presentImg} />
            <OptionName>선물</OptionName>
          </Option>
        )}
        {category === 11 && (
          <SelectedOption>
            <OptionImg src={retirementImg} />
            <OptionName>노후자금</OptionName>
          </SelectedOption>
        )}
        {category !== 11 && (
          <Option
            onClick={() => {
              setCategory(11);
            }}
          >
            <OptionImg src={retirementImg} />
            <OptionName>노후자금</OptionName>
          </Option>
        )}
      </Row>
      <Row>
        {category === 12 && (
          <SelectedOption>
            <OptionImg src={petImg} />
            <OptionName>반려동물</OptionName>
          </SelectedOption>
        )}
        {category !== 12 && (
          <Option
            onClick={() => {
              setCategory(12);
            }}
          >
            <OptionImg src={petImg} />
            <OptionName>반려동물</OptionName>
          </Option>
        )}
        {category === 13 && (
          <SelectedOption>
            <OptionImg src={beautyImg} />
            <OptionName>뷰티</OptionName>
          </SelectedOption>
        )}
        {category !== 13 && (
          <Option
            onClick={() => {
              setCategory(13);
            }}
          >
            <OptionImg src={beautyImg} />
            <OptionName>뷰티</OptionName>
          </Option>
        )}
        {category === 14 && (
          <SelectedOption>
            <OptionImg src={businessImg} />
            <OptionName>창업ㆍ회사</OptionName>
          </SelectedOption>
        )}
        {category !== 14 && (
          <Option
            onClick={() => {
              setCategory(14);
            }}
          >
            <OptionImg src={businessImg} />
            <OptionName>창업ㆍ회사</OptionName>
          </Option>
        )}
        {category === 15 && (
          <SelectedOption>
            <OptionImg src={applianceImg} />
            <OptionName>디지털ㆍ가전</OptionName>
          </SelectedOption>
        )}
        {category !== 15 && (
          <Option
            onClick={() => {
              setCategory(15);
            }}
          >
            <OptionImg src={applianceImg} />
            <OptionName>디지털ㆍ가전</OptionName>
          </Option>
        )}
      </Row>

      <ButtonComponent
        disabled={category === 99 ? true : false}
        onClick={() => {
          props.getChildCategory(category);
          props.onChangeNextStep();
        }}
        width={'32rem'}
        height={'5rem'}
        text={`다음`}
        radius={'0.5rem'}
        marginTop={'6rem'}
      ></ButtonComponent>
    </React.Fragment>
  );
};

export default GoalSettingStep1CategoryComponent;
