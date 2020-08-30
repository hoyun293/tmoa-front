import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  addComma2Number,
  calculateRealTimeTotalAmount,
  convertStrToDate,
  convertDateToStr,
  getLastDepositDate,
  getNextDepositDate,
  inNumber,
} from '../../js/CommonFunc';
import * as _ from 'lodash';
import MyGoal from '../../components/MainDashboard/MyGoal';
import ModalBackground from '../../components/CommonUIComponents/ModalBackground';
import { Row, Col } from 'antd';
import closeIconImg from '../../../public/assets/icon/closeIcon.svg';
import Flatpickr from 'react-flatpickr';
import ModalComponent from '../../components/CommonUIComponents/ModalComponent';
import BackHeader from '../../components/main/BackHeader';
import SpinnerComponent from '../../components/CommonUIComponents/SpinnerComponent';
import { saveHistory, history, deleteHistory, fetchGoal } from '../../api/main-detail-goal-api';
import '../../components/GoalSettingStepComponents/material_blue.css';
import './Slider.css';
import failImg from '../../../public/assets/img/goalDetail/failImg.svg';
import successImg from '../../../public/assets/img/goalDetail/successImg.svg';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.7%;
  margin: 0 auto;
`;
const HFlex = styled.div`
  display: flex;
`;
const ButtonIconWrppaer = styled(Flex)`
  margin-right: 3.3rem;
`;
const CloseButton = styled.div`
  font-weight: bold;
  font-size: 2 rem;
  margin-left: auto;
  margin-top: 2.1rem;
`;
const TransactionHeader = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 5rem;
  margin-bottom: 2.2rem;
`;

const TransactionTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  margin-right: auto;
`;
const DepositWithdrawButton = styled.button`
  width: 8.5rem;
  height: 3rem;
  margin-left: auto;

  background: #16b877;
  border: 1px solid #16b877;
  box-sizing: border-box;
  border-radius: 0.5rem;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  color: #ffffff;
  outline: 0;
`;

const SlideUp = keyframes`
  0%{
    transform: translateY(90rem);
  }
  100%{
    transform: translateY(0px);
  }
`;
const AddTransactionPopUp = styled.div`
  position: fixed;
  animation: ${SlideUp} 0.3s linear;
  border-radius: 1.2rem;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 2;
`;
const TransactionPopUpHeader = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.9rem;
  text-align: center;
  color: #222222;
`;

const CommonPopUpProperty = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  display: flex;
  align-items: flex-end;
  color: #222222;
`;
const TransactionPopUpProperty = styled(CommonPopUpProperty)``;

const TransactionPopUpProperty2 = styled(CommonPopUpProperty)`
  margin-top: 2rem;
`;

const Unit = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
`;
const TransactionInput = styled.input`
  width: 88.8%;
  text-align: right;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 1.4rem;
  line-height: 2rem;
  height: 2rem;
  outline: 0;
  &:focus {
    border-color: #16b877;
  }
`;
const TransactionSlider = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
`;

const TransactionHistoryWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  overflow: hidden;
  background-color: white;
`;

const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const TransactionDelete = styled.div`
  height: 8rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 8rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  text-align: center;
  color: #ffffff;
`;
const TransactionFirstRow = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TransactionSecondRow = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TransactionDate = styled.div`
  font-size: 1.5rem;
  margin-right: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #222222;
`;

const AmountFont = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
const TransactionAmount = styled(AmountFont)`
  color: ${(props) => props.color || 'black'};
`;
const TransactionTime = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.2rem;
  align-items: center;
  letter-spacing: 0.05rem;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #aaaaaa;
`;
const TransactionSplatter = styled.div`
  border: 0.5px dashed #cccccc;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const List = styled.li`
  list-style-type: none;
`;
const Stamp = styled.img`
  position: absolute;
  width: 17rem;
  height: 17rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0rem;
`;

const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 4.3rem;
  height: 4.5rem;
  text-align: center;
  color: #ffffff;
  flex: 1;
`;
const WithdrawButton = styled(Button)`
  margin-right: auto;
  color: #aaaaaa;
  box-sizing: border-box;
  border: 0.1rem solid #aaaaaa;
  align-items: center;
`;
const DepositButton = styled(Button)`
  margin-left: auto;
  background: #16b877;
`;
const Background = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: auto;
`;
const FirstWrapper = styled.div`
  width: 100%;
`;

const YearSelect = styled.select`
  margin-left: 2rem;
  width: 10rem;
  height: 3rem;
  display: block;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const YearOption = styled.option`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #aaaaaa;
`;
const getTransactionTime = (strDate) => {
  var hour = strDate.substring(8, 10);
  var minute = strDate.substring(10, 12);
  return hour + ':' + minute;
};
const getTransactionDate = (strDate) => {
  var month = strDate.substring(4, 6);
  var day = strDate.substring(6, 8);
  if (Number(month) < 10) {
    month = month.substring(1, 2);
  }
  return month + '.' + day;
};
var i = 0;
var oldElement;
var transactionId;
var transactionDeleteAmount;
var transactionDate = new Date();
var year = new Date().getFullYear();

var isMounted;
const mainGoalDetailPage = (props) => {
  var convertedData;
  var currentAmount = 0;

  const [randomNumber, setRandomNumber] = useState('0');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [goal, setGoal] = useState({});
  const [refresh, setRefresh] = useState(0);
  const [loader, setLoader] = useState(true);
  var nextDepositDate;
  if (Object.keys(goal).length !== 0) {
    var lastDepositDateMilliSec = getLastDepositDate(
      goal.savingCode,
      goal.savingDetailCode
    ).getTime();
    var startDateMilliSec = convertStrToDate(goal.goalStartDate).getTime();

    if (lastDepositDateMilliSec < startDateMilliSec) {
      nextDepositDate = getNextDepositDate(
        goal.savingCode,
        goal.savingDetailCode,
        convertStrToDate(goal.goalStartDate),
        true
      );
    } else {
      nextDepositDate = getNextDepositDate(
        goal.savingCode,
        goal.savingDetailCode,
        convertStrToDate(goal.goalStartDate),
        false
      );
    }
  }
  const evnetListener = () => {
    const elements = document.getElementsByClassName('ul');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchstart', handleStart, false);
      elements[i].addEventListener('touchend', handleEnd, false);
      elements[i].classList.remove('showing');
    }
  };

  useEffect(() => {
    isMounted = true;
    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    const requestGoal = async () => {
      const response = await fetchGoal({
        goalId: props.match.params.goalId,
      });
      const { data, code } = response.data;
      setGoal(data[0]);
    };

    const requestHistory = async () => {
      const response = await history({
        goalId: props.match.params.goalId,
        year: String(year),
        pageNumber: 1,
      });
      const { data, code } = response.data;
      setHistoryList(data.history);
    };
    requestGoal();
    requestHistory();
  }, [refresh, year]);

  useEffect(() => {
    if (convertedData !== undefined) {
      if (convertedData.achieveCode === 'P') {
        evnetListener();
      }
    }
  }, [loader, historyList]);

  useEffect(() => {
    setTimeout(() => {
      if (isMounted === true && convertedData !== undefined) {
        if (convertedData.achieveCode === 'P') {
          setRandomNumber(String(Math.random()));
        }
      }
    }, 4000);
  }, [randomNumber, loader]);
  var x;
  const handleStart = (e) => {
    var touchLocation = e.targetTouches[0];
    x = touchLocation.pageX;
  };

  const handleEnd = (e) => {
    var touchLocation = e.changedTouches[0];
    var element;
    element = document.getElementById('ul-' + e.target.id);

    if (element !== null) {
      if (x > touchLocation.pageX) {
        if (oldElement !== undefined) {
          oldElement.classList.remove('showing');
        }
        element.classList.add('showing');
        oldElement = element;
      }
      if (x < touchLocation.pageX) {
        element.classList.remove('showing');
      }
    }
  };

  if (Object.keys(goal).length !== 0) {
    if (goal.achieveCode !== 'P') {
      currentAmount = goal.currentAmount;
    } else {
      currentAmount = calculateRealTimeTotalAmount(
        Number(goal.currentAmount),
        Number(goal.savingAmount),
        goal.goalStartDate,
        goal.goalEndDate,
        goal.savingCode,
        goal.savingDetailCode
      );
    }
    convertedData = {
      _id: goal._id,
      title: goal.title,
      targetAmount: Number(goal.targetAmount),
      currentAmount: currentAmount,
      category: goal.category,
      dueDate: Math.ceil((convertStrToDate(goal.goalEndDate) - new Date()) / (1000 * 60 * 60 * 24)),
      achieveCode: goal.achieveCode,
      tagList: goal.tags,
      likeCount: goal.likeCount,
      isLike: goal.isLike,
    };
    if (loader === true) setLoader(false);
  }

  return (
    <React.Fragment>
      <Background>
        {loader && <SpinnerComponent />}
        {isPopUp === true && <ModalBackground />}
        {isModal === true && <ModalBackground />}
        <BackHeader title={`내목표상세`} history={props.history} />
        {isPopUp && (
          <AddTransactionPopUp>
            <ButtonIconWrppaer>
              <CloseButton
                type="button"
                onClick={() => {
                  setIsPopUp(false);
                }}
              >
                <img src={closeIconImg} />
              </CloseButton>
            </ButtonIconWrppaer>
            <TransactionPopUpHeader>추가입출금 하기</TransactionPopUpHeader>
            <Flex>
              <TransactionPopUpProperty>날짜</TransactionPopUpProperty>
              <Flatpickr
                options={{ disableMobile: 'true', defaultDate: transactionDate }}
                value={transactionDate}
                onChange={(newDate) => {
                  transactionDate = newDate[0];
                }}
              ></Flatpickr>
            </Flex>
            <Flex>
              <TransactionPopUpProperty2>금액</TransactionPopUpProperty2>
              <HFlex>
                <TransactionInput
                  onKeyPress={() => {
                    if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
                  }}
                  placeholder={'0'}
                  type={'text'}
                  value={addComma2Number(transactionAmount)}
                  onChange={(e) => {
                    setTransactionAmount(e.target.value.replace(/,/gi, ''));
                  }}
                />
                <Unit>원</Unit>
              </HFlex>
            </Flex>

            <Footer>
              <WithdrawButton
                onClick={() => {
                  var dt = new Date();
                  var historyDate = new Date(
                    transactionDate.getFullYear(),
                    transactionDate.getMonth(),
                    transactionDate.getDate(),
                    dt.getHours(),
                    dt.getMinutes()
                  );
                  saveHistory({
                    goalId: props.match.params.goalId,

                    historyDate: convertDateToStr(historyDate),
                    amount: transactionAmount * -1,
                    depositCode: 'M',
                  }).then(() => {
                    setRefresh(refresh + 1);
                    setIsPopUp(false);
                  });
                }}
              >
                출금하기
              </WithdrawButton>
              <DepositButton
                onClick={() => {
                  var dt = new Date();
                  var historyDate = new Date(
                    transactionDate.getFullYear(),
                    transactionDate.getMonth(),
                    transactionDate.getDate(),
                    dt.getHours(),
                    dt.getMinutes()
                  );
                  saveHistory({
                    goalId: props.match.params.goalId,
                    historyDate: convertDateToStr(historyDate),
                    amount: transactionAmount,
                    depositCode: 'M',
                    transactionAmount,
                  }).then(() => {
                    setRefresh(refresh + 1);
                    setIsPopUp(false);
                  });
                }}
              >
                입금하기
              </DepositButton>
            </Footer>
          </AddTransactionPopUp>
        )}
        <Row justify="center">
          <Col span={22}>
            {Object.keys(goal).length !== 0 && (
              <MyGoal target={convertedData} history={props.history} />
            )}
          </Col>
        </Row>

        <TransactionHeader>
          <TransactionTitle>거래내역</TransactionTitle>
          <DepositWithdrawButton
            onClick={() => {
              if (convertedData !== undefined && convertedData.achieveCode === 'P')
                setIsPopUp(true);
            }}
          >
            추가 입출금
          </DepositWithdrawButton>
        </TransactionHeader>

        {isModal === true && (
          <ModalComponent
            message={'입출금내역을 삭제하시겠습니까? 삭제하면 복구하실 수 없습니다.'}
            leftButton={'취소'}
            rightButton={'삭제'}
            cancel={() => {
              setIsModal(false);
            }}
            ok={() => {
              deleteHistory({
                goalId: props.match.params.goalId,
                historyId: transactionId,
                amount: transactionDeleteAmount,
              }).then(() => {
                setRefresh(refresh + 1);
                setIsModal(false);
              });
            }}
          />
        )}
        <Row>
          <YearSelect
            value={year}
            onChange={(e) => {
              year = Number(e.target.value);
              setRefresh(refresh + 1);
            }}
          >
            <YearOption value={2020}>2020</YearOption>
            <YearOption value={2021}>2021</YearOption>
            <YearOption value={2022}>2022</YearOption>
          </YearSelect>
        </Row>
        {Object.keys(goal).length !== 0 && convertedData.achieveCode === 'F' && (
          <Stamp src={failImg} />
        )}
        {Object.keys(goal).length !== 0 && convertedData.achieveCode === 'C' && (
          <Stamp src={successImg} />
        )}
        {nextDepositDate !== undefined &&
          year === nextDepositDate.getFullYear() &&
          convertedData !== undefined &&
          convertedData.achieveCode === 'P' && (
            <TransactionHistoryWrapper>
              <FirstWrapper>
                <TransactionInfo>
                  <TransactionFirstRow>
                    <TransactionDate>
                      {Object.keys(goal).length !== 0 &&
                        getTransactionDate(convertDateToStr(nextDepositDate)) + '(예정)'}
                    </TransactionDate>
                    <TransactionAmount color={'#16B877'}>
                      {Object.keys(goal).length !== 0 && '+' + addComma2Number(goal.savingAmount)}
                    </TransactionAmount>
                    <AmountFont>원</AmountFont>
                  </TransactionFirstRow>
                  <TransactionSecondRow>
                    <TransactionTime>
                      {Object.keys(goal).length !== 0 &&
                        getTransactionTime(convertDateToStr(nextDepositDate)) + ' | 자동'}
                    </TransactionTime>
                  </TransactionSecondRow>
                </TransactionInfo>
              </FirstWrapper>
            </TransactionHistoryWrapper>
          )}

        {_.map(historyList, (v, i) => (
          <List key={i}>
            <TransactionSlider>
              <div className="slide">
                <TransactionHistoryWrapper>
                  <ul className="ul" id={'ul-' + i}>
                    <li className={'transaction'} id={i}>
                      <TransactionInfo id={i}>
                        <TransactionFirstRow id={i}>
                          <TransactionDate id={i}>
                            {getTransactionDate(v.historyDate)}
                          </TransactionDate>
                          {v.depositCode === 'A' && (
                            <TransactionAmount id={i} color={'#16B877'}>
                              {'+' + addComma2Number(v.amount)}
                            </TransactionAmount>
                          )}
                          {v.depositCode === 'M' && (
                            <TransactionAmount id={i}>
                              {Number(v.amount) < 0 && '-' + addComma2Number(v.amount * -1)}
                              {Number(v.amount) >= 0 && '+' + addComma2Number(v.amount)}
                            </TransactionAmount>
                          )}
                          <AmountFont id={i}>원</AmountFont>
                        </TransactionFirstRow>
                        <TransactionSecondRow id={i}>
                          {v.depositCode === 'A' && (
                            <TransactionTime id={i}>
                              {getTransactionTime(v.historyDate) + ' | 자동'}
                            </TransactionTime>
                          )}
                          {v.depositCode === 'M' && (
                            <TransactionTime id={i}>
                              {getTransactionTime(v.historyDate) + ' | 추가입출금'}
                            </TransactionTime>
                          )}
                        </TransactionSecondRow>
                      </TransactionInfo>
                    </li>
                    <li className={'delete'}>
                      <TransactionDelete
                        onClick={() => {
                          setIsModal(true);
                          transactionId = v.historyId;
                          transactionDeleteAmount = v.amount;
                        }}
                      >
                        삭제
                      </TransactionDelete>
                    </li>
                  </ul>
                </TransactionHistoryWrapper>
              </div>
            </TransactionSlider>
          </List>
        ))}
      </Background>
    </React.Fragment>
  );
};
export default mainGoalDetailPage;
