import React from 'react';
import styled from 'styled-components';

const LayoutHeader = styled.div`
  width: 100%;
  height: 56px;
`;

const Header = styled.div`
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 1rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

const LeftHeader = styled.div`
  width: 12.2273628553%;
  display: flex;
  align-items: center;
`;

const HeaderBar = () => {
  return (
    <LayoutHeader>
      <Header>

      </Header>
    </LayoutHeader>
  )
}

export default HeaderBar;
