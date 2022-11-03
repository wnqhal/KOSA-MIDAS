import React from "react";
import styled from "styled-components";
import MenuBar from "../menu";
import StartBar from "../start";

const CoffeeChat = () => {
  const onClickSubmit = () => {
    alert("커피챗이 신청되었습니다!");
    window.location.replace("/coffee");
  };

  return (
    <Wrapper>
      <MenuBar />
      <MainWrapper>
        <HeaderWrapper>
          <p>커피챗</p>
        </HeaderWrapper>
        <hr />
        <ContentWrapper>
          <ContentHeader>
            <CoffeeInput id="place" placeholder="장소" />
            <CoffeeInput placeholder="시간" />
          </ContentHeader>
          <Content>
            <input placeholder="받는 사람" />
            <ContentArea placeholder="내용" />
          </Content>
        </ContentWrapper>
        <BtnWrapper>
          <button onClick={onClickSubmit}>커피챗 신청하기</button>
        </BtnWrapper>
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
    margin: 0 0 60px 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;

  > p {
    margin: 0 0 10px 0;
    font-size: 30px;
  }
`;

const ContentWrapper = styled.div``;

const ContentHeader = styled.div`
  #place {
    margin-right: 30px;
  }
  margin-bottom: 30px;
`;

const CoffeeInput = styled.input`
  padding: 0 10px;
  width: 360px;
  height: 60px;
  background-color: #f0f4f9;
  border: none;
  outline: none;
  border-radius: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f4f9;
  height: 300px;
  padding: 10px;
  > input {
    width: 200px;
    background-color: #f0f4f9;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 1px solid #bcbcbc;
    margin-bottom: 10px;
  }
`;

const ContentArea = styled.textarea`
  height: 300px;
  border-radius: 15px;
  border: none;
  background-color: #f0f4f9;
  resize: none;
  outline: none;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    cursor: pointer;
    width: 300px;
    height: 62px;
    margin-top: 30px;
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 16px;
    color: white;
    background-color: #0051cb;
  }
`;

export default CoffeeChat;
