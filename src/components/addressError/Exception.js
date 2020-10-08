import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import mainIcon from '../../lib/png/mainIcon.png';

const ErrorHost = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 50%;
  }
`;

const Exception = () => {
  return (
    <ErrorHost>
      <Link to="/"><img src={mainIcon} /></Link>
      <h3>잘못된 주소입니다. 위에 홈버튼을 클릭해주세요.</h3>
    </ErrorHost>
  )
}

export default Exception;