import React from 'react';
import styled from 'styled-components';

import MediaSideBar from './MediaSideBar.component';
import SortationSideBar from './SortationSideBar.component';

  const SideBarBox = styled.div`
    height: calc(100% - 60px);
    overflow: auto;
    width: 15rem;
    background-color: #ffffff;
    position: fixed;
    top: 60px;

    ${props => props.shrink && `
      width: 4.5rem;
    `
    }

    div {
      box-sizing: border-box;
    }
    
    img {
      width: 24px;
      height: 24px;
    }

    @media all and (max-width: 1300px) {
      width: auto;
    }
  `;

  const SideBarLayout = styled.div`
    div > div:hover {
      cursor: pointer;
      background-color: #e8e8e8;
    }

    @media all and (max-width: 1300px) {
      display: none;
      width: 30%;
    }
  `;

const SideBar = (props) => {
  return (
    <SideBarBox shrink={props.collapsed}>
      {
        props.collapsed ? <MediaSideBar showed={props.collapsed} /> : <SideBarLayout><SortationSideBar /></SideBarLayout>
      }
    </SideBarBox>
  )
}

export default SideBar;