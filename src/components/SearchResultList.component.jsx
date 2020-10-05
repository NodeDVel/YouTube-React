import React from 'react';

import styled from 'styled-components';

import videoImg1 from '../lib/png/videoImg1.png';
import videoImg2 from '../lib/png/videoImg2.png';
import videoImg3 from '../lib/png/videoImg3.png';
import videoImg4 from '../lib/png/videoImg4.png';
import videoImg5 from '../lib/png/videoImg5.png';

const SearchResultListLayout = styled.div`
  display: flex;
  margin-top: 1%;
  width: 862px;
  height: 138px;

  img {
    height: 100%;
  }
`;

const SearchListTextLayout = styled.div`
  margin-left: 15px;
`;

const SearchResultList = (props) => {
  return (
    <SearchResultListLayout>
      <img src={videoImg1} />
      <SearchListTextLayout>
        <span>노래방 인기차트</span>
        <span></span>
      </SearchListTextLayout>
    </SearchResultListLayout>
  )
}

export default SearchResultList;