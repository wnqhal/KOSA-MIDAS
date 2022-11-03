import React from "react";
import styled from "styled-components";

const StartBar = () => {
  return (
    <Wrapper>
      <LengthHR />
      <MenuWrapper>
        <StateDropDown>
          <p>출근 하기</p>
          <button>출근</button>
        </StateDropDown>
        <CoffeeChatWrapper>
          <p>커피챗 신청</p>
          <CoffeeContent>
            <CoffeeChatItem>
              <p>OOO님의 커피챗 신청</p>
            </CoffeeChatItem>
            <CoffeeBtnWrapper>
              <CoffeeBtn>수락</CoffeeBtn>
              <CoffeeBtn>거절</CoffeeBtn>
            </CoffeeBtnWrapper>
          </CoffeeContent>
        </CoffeeChatWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LengthHR = styled.hr`
  width: 1px;
  height: 700px;
  margin-top: 60px;
  margin-left: 110px;
  margin-right: 48px;
  border: none;
  background-color: #d3d3d3;
`;

const MenuWrapper = styled.div``;

const StateDropDown = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 65px;
  margin-top: 60px;
  margin-bottom: 80px;
  border-radius: 10px;
  border: 1px solid #0051cb;
  > p {
    font-size: 18px;
    margin-left: 27px;
    color: #0051cb;
  }
  > button {
    cursor: pointer;
    width: 70px;
    height: 40px;
    margin-right: 20px;
    border-radius: 15px;
    border: none;
    outline: none;
    color: white;
    background-color: #0051cb;
  }
`;

const CoffeeChatWrapper = styled.div``;

const CoffeeContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 350px;
  background-color: #fbfbfb;
`;

const CoffeeBtnWrapper = styled.div`
  position: absolute;
  top: 300px;
  right: 10px;
  display: flex;
`;

const CoffeeChatItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #0051cb;
  > p {
    font-size: 15px;
    color: #707070;
  }
`;

const CoffeeBtn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 24px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-right: 10px;
  color: white;
  background-color: #1c6de8;
`;

export default StartBar;
