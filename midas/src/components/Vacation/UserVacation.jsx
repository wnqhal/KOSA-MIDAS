import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MenuBar from "../menu";
import StartBar from "../start";

const UserVacation = () => {
  const [state, setState] = useState();
  const [cur, setCur] = useState();

  const onClickAge = (num) => {
    setState(false);
    setCur(num);
  };

  const BtnData = {
    btnList: [
      {
        name: "출산 휴가",
      },
      { name: "배우자 출산 휴가" },
      { name: "가족 돌봄 휴가" },
      { name: "생리 휴가" },
    ],
  };

  return (
    <Wrapper>
      <MenuBar />
      <MainWrapper>
        <HeaderWrapper>
          <p>휴가</p>
        </HeaderWrapper>
        <hr />
        <ContentWrapper>
          <ContentBox>
            {BtnData.btnList.map((data, index) => (
              <ContentItem
                onClick={() => onClickAge((index + 1) * 10)}
                state={!((index + 1) * 10 === cur)}
              >
                {data.name}
              </ContentItem>
            ))}
          </ContentBox>
        </ContentWrapper>
        <BtnWrapper>
          <SubmitBtn>제출하기</SubmitBtn>
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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 400px;
  border-radius: 15px;
  background-color: #f0f4f9;
`;

const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  width: 250px;
  height: 62px;
  border: none;
  outline: none;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  background-color: #0051cb;
`;

const ContentItem = styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 15px;
  width: 330px;
  height: 50px;
  margin-top: 30px;
  border: none;
  outline: none;
  color: ${({ state }) => (state ? "#000000" : "#ffffff")};
  background-color: ${({ state }) => (state ? "#ffffff" : "#0051cb")};
`;

export default UserVacation;
