import React from 'react';

import { Link } from 'react-router-dom';

const Exception = () => {
  return (
    <>
      <h1>잘못된 주소입니다. 다시 입력해주세요</h1>
      <Link to="/">홈으로</Link>
    </>
  )
}

export default Exception;