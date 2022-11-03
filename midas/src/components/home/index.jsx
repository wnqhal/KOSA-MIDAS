import React from "react";
import styled from "styled-components";
import MenuBar from "../menu";
import StartBar from "../start";
import time from "../../assets/img/time.svg";

const Home = () => {
  return (
    <Wrapper>
      <MenuBar />
      <MainWrapper>
        <HeaderWrapper>
          <NameWrapper>
            <p>오늘도 좋은 하루 되세요</p>
            <p>전영준 님</p>
          </NameWrapper>
          <TimeWrapper>
            <img src={time} alt="" />
            <p>00:00:00</p>
          </TimeWrapper>
        </HeaderWrapper>
        <hr />
        <ContentWrapper>
          <GraphContent>
            <p>금주의 업무 데이터</p>
            <div>금주의 업무 데이터가 아직 쌓이지 않았어요 ㅠㅠ</div>
          </GraphContent>
          <MeetContent>
            <p>회의 일정</p>
            <div>
              <MeetItem>
                <p id="name">2차 스프린트 미팅</p>
                <p id="date">22년 11월 05일</p>
              </MeetItem>
            </div>
          </MeetContent>
        </ContentWrapper>
      </MainWrapper>
      <StartBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  margin-top: 160px;
  > hr {
    margin: 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  > p {
    margin: 0;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  > p {
    margin-left: 14px;
    margin-right: 20px;
  }
`;

const ContentWrapper = styled.div``;

const GraphContent = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 780px;
    height: 230px;
    border-radius: 15px;
    background-color: #f0f4f9;
  }
`;

const MeetContent = styled.div`
  > div {
    display: flex;
    justify-content: center;
    width: 780px;
    height: 230px;
    border-radius: 15px;
    background-color: #f0f4f9;
  }
`;

const MeetItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 40px;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #abc7f0;
  > p {
    color: #707070;
  }
  #name {
    margin-left: 30px;
  }
  #date {
    margin-right: 30px;
  }
`;

export default Home;
