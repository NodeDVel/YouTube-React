import React from 'react';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

const ShareBoxWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareBoxLayout = styled.div`
  position: fixed;
  z-index: 999;
  width: 518px;
  height: 309px;
  background-color: #ffffff;

  & > .HeaderText {
    padding-top: 5%;
    padding-left: 4%;
    padding-bottom: 2%;
    padding-right: 4%;
    display: flex;
    align-items: center;

    span {
      flex: 1;
    }

    img {
      cursor: pointer;
    }
  }
`;

const ShareBoxHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 3%;
  padding-right: 5%;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    color: #030303;
  }

  & > img {
    position: absolute;
    right: 1px;
    top: 13%;
    cursor: pointer;
  }
`;
const ShareBoxHMiddle = styled.div`
  box-sizing: border-box;
  padding-top: 5%;
  padding-left: 5%;

  & > div {
    width: 470px;
    height: 42px;
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    box-sizing: border-box;
    padding: 0% 4%;
    font-size: 14px;
  }
`;
const ShareBoxFotter = styled.div`
  padding-top: 6%;
  padding-left: 5%;
  padding-right: 5%;

  & > div {
    display: flex;
    padding-top: 5%;
    border-top: 1px solid #606060;
      font-size: 14px;
      color: #606060;

    & > input {
      margin-right: 23px;
    }
  }
`;

const ShareBox = (props) => {
  const onClickHandleModal = (e) => {
    props.handleClickModal && props.handleClickModal();
  }

  return (
    <ShareBoxWrapper>
      <ShareBoxLayout>
        <div className="HeaderText">
          <span>공유</span>
          <img src={ImgData.x} onClick={onClickHandleModal} />
          </div>
        <ShareBoxHeader>
          <div>
            <img src={ImgData.modal1} />
            <span>퍼가기</span>
          </div>
          <div>
            <img src={ImgData.modal2} />
            <span>Twitter</span>
          </div>
          <div>
            <img src={ImgData.modal3} />
            <span>FaceBook</span>
          </div>
          <div>
            <img src={ImgData.modal4} />
            <span>Blogger</span>
          </div>
          <div>
            <img src={ImgData.modal5} />
            <span>Tumblr</span>
          </div>
          <div>
            <img src={ImgData.modal6} />
            <span>Cyworld</span>
          </div>
          <img src={ImgData.modal7} />
        </ShareBoxHeader>
        <ShareBoxHMiddle>
          <div>
            <span style={{ flex: '1' }}>https://youtube.com</span>
            <span style={{ color: '#065FD4' }}>복사</span>
          </div>
        </ShareBoxHMiddle>
        <ShareBoxFotter>
          <div>
            <input type="checkBox" />
            <div>시작 시간 <span>0:00</span></div>
          </div>
        </ShareBoxFotter>
      </ShareBoxLayout>
    </ShareBoxWrapper>
  )
}

export default ShareBox;