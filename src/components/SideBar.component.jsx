import React from 'react';
import styled from 'styled-components';
import SortationSideBar from './SortationSideBar.component';

const SideBar = () => {
  const SideBar = styled.div`
    height: calc(100% - 60px);
    overflow: auto;
    width: 15rem;
    background-color: #ffffff;
    position: fixed;
    top: 60px;

    div {
      box-sizing: border-box;
    }
    
    img {
      width: 24px;
      height: 24px;
    }
  `;

  const SideBarLayout = styled.div`
    padding-bottom: 15px;

    div > div:hover {
      cursor: pointer;
      background-color: #e8e8e8;
    }
  `;

  return (
    <SideBar>
      <SideBarLayout>
        <SortationSideBar />
      </SideBarLayout>
    </SideBar>
  )
}

export default SideBar;