import React from 'react';
import { Row, Card, Col } from 'antd';
import styled from 'styled-components';

const Badge = styled.div`
  display: block;
  height: 22px;
  line-height: 20px;
  font-weight: 300;
  font-size: 12px;
  color: #aaaaaa;
  overflow-wrap: break-word;
  margin: 0px 4px 4px 0px;
  padding: 0px 10px;
  text-decoration: none;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #aaaaaa;
  border-image: initial;
  border-radius: 10px;
  transition: all 0.2s ease 0s;
  &:focus,
  &:active {
    color: #16b877;
    border-color: #16b877;
  }
`;
const BadgeGroup = (props) => {
  if (props.badgeList.length > 0) {
    return (
      <Row>
        <Col span={24}>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
              width: '88.8%',
              margin: '0 auto',
            }}
          >
            {props.badgeList.map((badge) => {
              return (
                <li key={badge.index}>
                  <Badge
                    onClick={() => {
                      props.onclick(badge.name);
                    }}
                  >
                    #{badge.name}
                  </Badge>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row justify="center">
        <Col>
          <p style={{ fontSize: 18, fontWeight: 1000 }}>현재 인기키워드가 없습니다.</p>
        </Col>
      </Row>
    );
  }
};

export default BadgeGroup;
