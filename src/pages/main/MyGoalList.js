import React, { useState } from 'react';
import BackHeader from '../../components/main/BackHeader';

import Layout from '../Layout';

import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyGoalList = ({ history }) => {

  return(
    <Layout>
      <div style={{backgroundColor:'#E5E5E5', width: '100%', height: '100%'}}>
        <BackHeader title={`목표리스트`} history={history}/>
        <CardList>
          <div style={{ padding: 20, border: '1px solid gray'}}>테스트</div>
        </CardList>
      </div>
    </Layout>
  );
}

export default MyGoalList;