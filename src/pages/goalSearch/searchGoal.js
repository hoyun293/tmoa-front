import React from 'react';
import { useState, useCallback } from 'react';

import Layout from '../Layout';
import BadgeGroup from '../../components/goalSearch/badgeGroup';
import 'antd/dist/antd.css';
import { Row, Col, Input } from 'antd';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';

const searchGoal = () => {
  const [searchWord, setSearchWord] = useState('');

  const dumpBadgeList = [
    {
      index: 1,
      link: '/searchResult',
      name: '자동차',
    },
    {
      index: 2,
      link: '/searchResult',
      name: '비행기',
    },
    {
      index: 3,
      link: '/searchResult',
      name: '헬리콥터',
    },
    {
      index: 4,
      link: '/searchResult',
      name: '일이삼사요육칠팔',
    },
  ];

  const onChangeSearchWorld = useCallback((e) => {
    setSearchWord(e.target.value);
  }, []);

  const searchPressEnter = (e) => {
    console.log(`${searchWord} 검색!`);
  };

  const linkRecentTargetList = () => {
    console.log('최근 등록 목표');
  };

  return (
    <Layout>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#E5E5E5',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 260,
          backgroundColor: '#118A59',
        }}
      ></div>
      <Row justify="center">
        <Col span={22}>
          <Row style={{ paddingTop: 90 }}>
            <Col span={24}>
              <Input
                size="large"
                suffix={<SearchOutlined />}
                style={{ borderRadius: 6 }}
                placeholder="검색어를 입력해 주세요"
                value={searchWord}
                onChange={onChangeSearchWorld}
                onPressEnter={(e) => searchPressEnter(e)}
              ></Input>
            </Col>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <Col span={24}>
              <BadgeGroup badgeList={dumpBadgeList} />
            </Col>
          </Row>
          <Row style={{ paddingTop: 30 }}>
            <Col span={23}>
              <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>최근 등록 목표</p>
            </Col>
            <Col span={1}>
              <p style={{ paddingTop: '0.5rem' }} onClick={linkRecentTargetList}>
                <ArrowRightOutlined style={{ color: '#222222' }} />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default searchGoal;
