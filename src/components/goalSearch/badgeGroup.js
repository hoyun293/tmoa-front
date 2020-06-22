import React from 'react';

import { Row, Col, Card } from 'antd';

/*
 * example props
 * props = {
 *  index: 1
 *  name: '자동차'
 * }
 */
const BadgeGroup = (props) => {

  const styleBadge = {
    display: 'block',
    height: '22px',
    lineHeight: '20px',
    fontWeight: 300,
    fontSize: '12px',
    color: '#AAAAAA',
    overflowWrap: 'break-word',
    margin: '0px 4px 4px 0px',
    padding: '0px 10px',
    textDecoration: 'none',
    background: '#FFFFFF',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#AAAAAA',
    borderImage: 'initial',
    borderRadius: '10px',
    transition: 'all 0.2s ease 0s'
  }

  if(props.badgeList.length > 0) {
    return (
      <Card style={{borderRadius:6}}>
        <Row justify="center">
          <Col>
            <p style={{fontSize: 18, fontWeight:1000}}>인기키워드</p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ul style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
              {props.badgeList.map(badge => {
                return (
                  <li key={badge.index} onClick={(e) => {
                      if(props.clickBadge) {
                        return props.clickBadge(e.target);
                      }
                    }}>
                    <p style={styleBadge}>#{badge.name}</p>    
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Card>
    );
  } else {
    return (
      <Card style={{borderRadius:6}}>
        <Row justify="center">
          <Col>
            <p style={{fontSize: 18, fontWeight:1000}}>현재 인기키워드가 없습니다.</p>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default BadgeGroup;