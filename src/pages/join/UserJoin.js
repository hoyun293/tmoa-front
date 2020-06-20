import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../../reducer/user';

import { isDuplicate } from '../../api/login-setting-api';

import BackHeader from '../../components/main/BackHeader';

import Layout from '../Layout';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import { Row, Col, Input, Button, Select, Radio } from 'antd';

const { Search } = Input;
const { Option } = Select;

const Title = styled.div`
  margin: 10 20;
  margin-bottom: 40;
  font-size: 2.3rem;
  font-weight: bold;
`;

const UserJoin = ({ history }) => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const CONGULATION_JOIN_PAGE = '/congurateJoin';
  const CONGULATION_FIRST_PAGE = '/';
  const [nicknameMessage, setNicknameMessage] = useState('영문/숫자 4자 이상을 입력해주세요.');
  const [nicknameCheck, setNicknameCheck] = useState(false);

  const [nickname, setNickname] = useState('');
  const [sex, setSex] = useState('M');
  const [age, setAge] = useState(10);

  useEffect(() => {
    document.querySelector('#searchEl').addEventListener('keyup', (e) => {
      // e.target.value
      const word = e.target.value;

      if(word.length < 4) {
        document.querySelector('#message').style = "color: tomato;"
        setNicknameMessage('닉네임은 4자 이상이여야 합니다.');
      } else {
        document.querySelector('#message').style = "color: black;"
        setNicknameMessage('중복확인을 해주세요.');
      }
    });
  }, []);

  const duplicateTest = async (value) => {

    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    if(regExp.test(value)) {
      alert('특수문자는 입력하실 수 없습니다.');
      return;
    }

    if(value.length < 4) {
      alert('닉네임은 4자 이상이여야 합니다.');
      return;
    }

    const response = await isDuplicate(value);

    const { code, data } = response.data;

    if(data === 0 && code === 200) {
      setNickname(value);
      setNicknameCheck(true);
      alert('중복된 닉네임이 없습니다.');
    } else {
      alert('중복된 닉네임이 있습니다. 변경해주세요');
    }
  }

  const selectAge = (value) => {
    setAge(value);
  }

  const selectSex = (event) => {
    const { value } = event.target;
    setSex(value);
  }

  const submitUserInfo = () => {

    const { me } = user;

    if(nicknameCheck === false || nickname.length === 0) {
      alert('닉네임 중복검사가 필요합니다.');
      return;
    }

    let newMe

    if(!me) {
      const dumpMe = {
        id: 1,
        email: 'limsungho03@hanamil.net',
        name: '임',
        platform: 'Facebook',
      };

      newMe = {
        ...dumpMe,
        nickname,
        age,
        sex
      }

    } else {
      newMe = {
        ...me,
        nickname,
        age,
        sex
      }
    }

    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        me: newMe,
      },
    });

    // if(!me) history.push(CONGULATION_FIRST_PAGE);
    history.push(CONGULATION_JOIN_PAGE);
  }

  return(
    <Layout>
      <BackHeader history={history} backgrondColor='white'/>
      <Title>회원정보 입력</Title>
      <Row>
        <Col span={1}></Col>
        <Col span={22}>
          <Row>
            <p style={{fontSize:'1.5rem'}}>닉네임 <span style={{color:'tomato'}}>*</span></p>
          </Row>
          <Row>
            <Col span={24}>
              <Search
                id="searchEl"
                placeholder="닉네임"
                enterButton="중복확인"
                size="large"
                onSearch={value => duplicateTest(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p id="message" style={{marginLeft: 2}}>{nicknameMessage}</p>
            </Col>
          </Row>
          <Row style={{marginTop: 32}}>
            <p style={{fontSize: 16}}>연령대</p>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <Select defaultValue="10" onChange={selectAge} size="large" style={{width: '100%'}}>
                <Option value="10">10대</Option>
                <Option value="20">20대</Option>
                <Option value="30">30대</Option>
                <Option value="40">40대</Option>
                <Option value="50">50대 이상</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{marginTop: 32}}>
            <p style={{fontSize: 16}}>성별</p>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <Radio.Group defaultValue="M" size="large" style={{width:'100%'}} onChange={selectSex}>
                <Radio.Button value="M" style={{width:'50%', textAlign: 'center'}}>남자</Radio.Button>
                <Radio.Button value="F" style={{width:'50%', textAlign: 'center'}}>여자</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row justify="center" style={{marginTop: 79}}>
            <Col span={24}>
              <Button size="large" onClick={submitUserInfo} style={{backgroundColor: '#16B877', height: 50, fontSize: 18, color: "#fff", width:'100%', borderRadius:5}}>다음</Button>
            </Col>
          </Row>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Layout>
  )

}

export default UserJoin;