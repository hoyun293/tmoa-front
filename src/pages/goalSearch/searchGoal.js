import React from 'react';
import { useState, useCallback } from 'react';

import Layout from '../Layout';

import 'antd/dist/antd.css';
import { Row, Col, Input, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const searchGoal = () => {

  const [searchWord, setSearchWord] = useState('');

  const onChangeSearchWorld = useCallback((e) => {
    setSearchWord(e.target.value);
  }, []);

  const searchPressEnter = (e) => {
    console.log(`${searchWord} 검색!`);
  }

  const styleTest = {
    display: 'block',
    height: '22px',
    lineHeight: '20px',
    fontWeight: 300,
    fontSize: '12px',
    color: 'rgb(151, 161, 167)',
    overflowWrap: 'break-word',
    margin: '0px 4px 4px 0px',
    padding: '0px 10px',
    textDecoration: 'none',
    background: 'rgb(255, 255, 255)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(207, 211, 214)',
    borderImage: 'initial',
    borderRadius: '10px',
    transition: 'all 0.2s ease 0s'
  }

  return (
    <Layout>
      <div style={{position: 'absolute', top: 0, width:'100%', height: 260, backgroundColor: '#118A59'}}></div>
      <Row justify="center">
        <Col span={22}>
          <Row style={{paddingTop:90}}>
            <Col span={24}>
              <Input size="large" suffix={<SearchOutlined />} style={{borderRadius: 6}}
                placeholder="검색어를 입력해 주세요"
                value={searchWord}
                onChange={onChangeSearchWorld}
                onPressEnter={(e) => searchPressEnter(e)}></Input>
            </Col>
          </Row>
          <Row style={{marginTop: 24}}>
            <Col span={24}>
              <Card style={{borderRadius:6}}>
                <Row justify="center">
                  <Col>
                    <p style={{fontSize: 18, fontWeight:1000}}>인기키워드</p>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <ul style={{display:'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
                      <li>
                        <a style={styleTest} href="/searchGoal">#테스트</a>
                      </li>
                      <li>
                        <a style={styleTest} href="/searchGoal">#일이삼사오육칠팔</a>
                      </li>
                      <li>
                        <a style={styleTest} href="/searchGoal">#일이삼사오육칠팔</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </Layout>
  )
}

export default searchGoal;