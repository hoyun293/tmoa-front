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
import { saveHistory, history, deleteHistory } from '../../api/main-detail-goal-api';
import '../../components/GoalSettingStepComponents/material_blue.css';
import './Slider.css';
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

  background: #ffffff;
  border: 1px solid #16b877;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  color: #16b877;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
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
`;

const TransactionHistoryWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  overflow: hidden;
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
const Stamp = styled.div`
  position: fixed;
  width: 10rem;
  height: 10rem;
  background-color: red;
  transform: translateX(-50%);
  left: 50%;
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

const mockUpData = [
  { _id: '9a5lgd34fef949kad', historyDate: '202006031500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006021500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202006011500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005311500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005301500', amount: '20000', depositCode: 'A' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005300800', amount: '50000', depositCode: 'M' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005291500', amount: '20000', depositCode: 'A' },
  { _id: '34Glgd34fef9493ad', historyDate: '202005281125', amount: '-3000', depositCode: 'M' },
  { _id: '14zc7ef9483493ffd', historyDate: '202005281500', amount: '20000', depositCode: 'A' },
];

const mockUpData2 = {
  _id: '5e317ef9483493ffd',
  title: '맥북구입',
  targetAmount: '2134000',
  goalStartDate: '202006021500',
  goalEndDate: '202008251500',
  createDate: '202006022100',
  tagList: ['애플', '비싸당', '신품'],
  category: 'DA',
  savingCode: 'M',
  savingDetailCode: '24',
  savingAmount: '20000',
  savingTime: '21',
  currentAmount: '180000',
  achieveCode: 'P',
  likeNumber: '100',
  isLike: true,
};
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
var transactionId;
var transactionDate = new Date();
const mainGoalDetailPage = () => {
  var convertedData;
  var currentAmount = 0;

  var lastDepositDateMilliSec = getLastDepositDate(
    mockUpData2.savingCode,
    mockUpData2.savingDetailCode
  ).getTime();
  var startDateMilliSec = convertStrToDate(mockUpData2.goalStartDate).getTime();
  var nextDepositDate;

  if (lastDepositDateMilliSec < startDateMilliSec) {
    nextDepositDate = getNextDepositDate(
      mockUpData2.savingCode,
      mockUpData2.savingDetailCode,
      convertStrToDate(mockUpData2.goalStartDate),
      true
    );
  } else {
    nextDepositDate = getNextDepositDate(
      mockUpData2.savingCode,
      mockUpData2.savingDetailCode,
      convertStrToDate(mockUpData2.goalStartDate),
      false
    );
  }

  const [ranmonNumber, setRandomNumber] = useState('0');
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [historyList, setHistoryList] = useState([]);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const evnetListener = () => {
    const transactions = document.getElementsByClassName('ul');
    for (var i = 0; i < transactions.length; i++) {
      transactions[i].addEventListener('touchstart', handleStart, false);
      transactions[i].addEventListener('touchend', handleEnd, false);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setRandomNumber(String(Math.random()));
    }, 4000);
  }, []);

  useEffect(() => {
    const requestHistory = async () => {
      const { data } = await history({
        goalId: '5ee5c8b12b8a7766b84c122d',
        year: '2020',
        pageNumber: 1,
      });

      setHistoryList(data.data.history);
    };
    requestHistory();
  }, []);

  useEffect(() => {
    evnetListener();
  }, [historyList]);
  var x;
  const handleStart = (e) => {
    var touchLocation = e.targetTouches[0];
    x = touchLocation.pageX;
  };

  const handleEnd = (e) => {
    var touchLocation = e.changedTouches[0];
    var element;
    if (e.target.id === 'first') {
      element = document.getElementById('first-ul');
    } else {
      element = document.getElementById('ul-' + e.target.id);
    }
    if (x > touchLocation.pageX) {
      element.classList.add('showing');
    }
    if (x < touchLocation.pageX) {
      element.classList.remove('showing');
    }
  };
  currentAmount = calculateRealTimeTotalAmount(
    Number(mockUpData2.currentAmount),
    Number(mockUpData2.savingAmount),
    mockUpData2.goalStartDate,
    mockUpData2.goalEndDate,
    mockUpData2.savingCode,
    mockUpData2.savingDetailCode
  );
  convertedData = {
    _id: mockUpData2._id,
    title: mockUpData2.title,
    targetAmount: Number(mockUpData2.targetAmount),
    currentAmount: currentAmount,
    category: mockUpData2.category,
    dueDate: Math.round(
      (convertStrToDate(mockUpData2.goalEndDate) - new Date()) / (1000 * 60 * 60 * 24)
    ),
    achieveCode: mockUpData2.achieveCode,
    tagList: mockUpData2.tagList,
    likeCount: mockUpData2.likeNumber,
    isLike: mockUpData2.isLike,
  };

  return (
    <React.Fragment>
      {isPopUp === true && <ModalBackground />}
      {isModal === true && <ModalBackground />}
      <Row justify="center">
        <Col span={22}>
          <MyGoal target={convertedData} />
        </Col>
      </Row>

      <TransactionHeader>
        <TransactionTitle>거래내역</TransactionTitle>
        <DepositWithdrawButton
          onClick={() => {
            setIsPopUp(true);
          }}
        >
          추가 입출금
        </DepositWithdrawButton>
      </TransactionHeader>
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
                transactionDate = newDate;
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
                  console.log(transactionAmount);
                }}
              />
              <Unit>원</Unit>
            </HFlex>
          </Flex>

          <Footer>
            <WithdrawButton
              onClick={() => {
                saveHistory({
                  goalId: '5eee5e79fb7ef92fac5a5a8c',
                  historyDate: convertDateToStr(transactionDate),
                  amount: transactionAmount,
                  depositCode: 'M',
                });
                setIsPopUp(false);
              }}
            >
              출금하기
            </WithdrawButton>
            <DepositButton
              onClick={() => {
                saveHistory({
                  goalId: '5eee5e79fb7ef92fac5a5a8c',
                  historyDate: convertDateToStr(transactionDate),
                  amount: transactionAmount,
                  depositCode: 'M',
                });
                setIsPopUp(false);
              }}
            >
              입금하기
            </DepositButton>
          </Footer>
        </AddTransactionPopUp>
      )}
      {isModal === true && (
        <ModalComponent
          leftButton={'취소'}
          rightButton={'삭제'}
          cancel={() => {
            setIsModal(false);
          }}
          ok={() => {
            deleteHistory(transactionId);
            setIsModal(false);
            //setCancel(true);
          }}
        />
      )}
      {convertedData.achieveCode === 'F' && <Stamp />}
      {convertedData.achieveCode === 'C' && <Stamp />}
      <div className="slide">
        <TransactionHistoryWrapper>
          <ul className="ul" id={'first-ul'}>
            <li className={'transaction'}>
              <TransactionInfo>
                <TransactionFirstRow id={'first'}>
                  <TransactionDate>
                    {getTransactionDate(convertDateToStr(nextDepositDate)) + '(예정)'}
                  </TransactionDate>
                  <TransactionAmount color={'#16B877'}>
                    {'+' + addComma2Number(mockUpData2.savingAmount)}
                  </TransactionAmount>
                  <AmountFont>원</AmountFont>
                </TransactionFirstRow>
                <TransactionSecondRow id={'first'}>
                  <TransactionTime>
                    {getTransactionTime(convertDateToStr(nextDepositDate)) + ' | 자동'}
                  </TransactionTime>
                </TransactionSecondRow>
              </TransactionInfo>
            </li>
            <li className={'delete'}>
              <TransactionDelete
                onClick={() => {
                  setIsModal(true);
                }}
              >
                삭제
              </TransactionDelete>
            </li>
          </ul>
        </TransactionHistoryWrapper>
      </div>
      {_.map(historyList, (v, i) => (
        <List key={i}>
          <TransactionSlider>
            <TransactionSplatter />
            <div className="slide">
              <TransactionHistoryWrapper>
                <ul className="ul" id={'ul-' + i}>
                  <li className={'transaction'}>
                    <TransactionInfo>
                      <TransactionFirstRow id={i}>
                        <TransactionDate>{getTransactionDate(v.historyDate)}</TransactionDate>
                        {v.depositCode === 'A' && (
                          <TransactionAmount color={'#16B877'}>
                            {'+' + addComma2Number(v.amount)}
                          </TransactionAmount>
                        )}
                        {v.depositCode === 'M' && (
                          <TransactionAmount>
                            {Number(v.amount) < 0 && addComma2Number(v.amount)}
                            {Number(v.amount) >= 0 && '+' + addComma2Number(v.amount)}
                          </TransactionAmount>
                        )}
                        <AmountFont>원</AmountFont>
                      </TransactionFirstRow>
                      <TransactionSecondRow id={i}>
                        {v.depositCode === 'A' && (
                          <TransactionTime>
                            {getTransactionTime(v.historyDate) + ' | 자동'}
                          </TransactionTime>
                        )}
                        {v.depositCode === 'M' && (
                          <TransactionTime>
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
    </React.Fragment>
  );
};
export default mainGoalDetailPage;
