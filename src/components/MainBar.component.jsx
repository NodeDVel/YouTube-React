import React from 'react';
import styled from 'styled-components';

import videoImg1 from '../lib/png/videoImg1.png';
import videoImg2 from '../lib/png/videoImg2.png';
import videoImg3 from '../lib/png/videoImg3.png';
import videoImg4 from '../lib/png/videoImg4.png';
import videoImg5 from '../lib/png/videoImg5.png';
import profilePng from '../lib/png/unnamed.jpg';

const MiddleHover = styled.div`
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  top: 3%;
  right: 3%;
  text-align: center;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleHover2 = styled.div`
  width: 97px;
  height: 27px;
  transition: .8s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;
`;

const MiddleHover3 = styled.div`
  width: 73px;
  height: 29px;
  transition: .8s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;
`;

const ImgHover = styled.div`
  position: relative;

  &:hover ${MiddleHover2} {
    opacity: 1;
  }

  &:hover ${MiddleHover3} {
    opacity: 2;
  }
`;

const SpaceBoxLayout = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const SpaceBox = styled.div`
  width: 274px;
  height: 100%;
  background-color: #F9F9F9;

  @media all and (max-width: 1300px) {
    width: 72px;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const MainBarBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;

const MainBarLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1% 4% 1% 5%;
  height: 100%;

  @media all and (max-width: 1000px) {
    margin: 1% 6% 1% 7%;
  }
`;

const VideoLayout = styled.div`
  width: 24.5%;
  margin-right: 5px;
  position: relative;
  cursor: pointer;

  &:hover ${MiddleHover} {
    opacity: 1;
  }

  img {
    width: 100%;
    margin-bottom: 4%;
  }

  @media all and (max-width: 1500px) {
    width: 32%;
  }

  @media all and (max-width: 1000px) {
    width: 49%;
  }
`;

const VideoBoxLayout = styled.div`
  display: flex;
  margin-bottom: 15%;

  img {
    margin: 0px 20px 0px 0px;
    border-radius: 40px;
    width: 36px;
    height: 36px;
  }
`;

const VideoTextLayout = styled.div`
  height: 100%;

  span:first-child {
    font-size: 14px;
    color: #030303;
  }

  span:nth-child(3) {
    font-size: 13px;
    color: #606060;
  }
`;

const MainBar = () => {
  return (
    <SpaceBoxLayout>
      <SpaceBox />
      <MainBarBox>
        <MainBarLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
          <VideoLayout>
            <img src={videoImg1} />
            <MiddleHover>
              <div>
                <ImgHover>
                  <img src={videoImg2} />
                  <MiddleHover2>
                    <img src={videoImg4} />
                  </MiddleHover2>
                </ImgHover>
                <ImgHover>
                  <img src={videoImg3} />
                  <MiddleHover3>
                    <img src={videoImg5} />
                  </MiddleHover3>
                </ImgHover>
              </div>
            </MiddleHover>
            <VideoBoxLayout>
              <img src={profilePng} />
              <VideoTextLayout>
                <span>노래방 인기차트 발라드 TOP 20 가사</span>
                <br />
                <span>낭소월드 <br /> 조회수 11만회 - 1일전</span>
              </VideoTextLayout>
            </VideoBoxLayout>
          </VideoLayout>
        </MainBarLayout>
      </MainBarBox>
    </SpaceBoxLayout>
  )
}

export default MainBar;