import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Title>회원가입</Title>
        <hr />
        <AuthName id="name" type="text" placeholder="이름" />
        <AuthInput id="id" type="text" placeholder="아이디" />
        <AuthInput id="password" type="password" placeholder="비밀번호" />
        <AuthButton>회원가입</AuthButton>
        <Flex>
          <HaveID>이미 아이디가 있으신가요?</HaveID>
          <Link to="/login">
            <LoginNow>로그인 하기</LoginNow>
          </Link>
        </Flex>
      </InputWrapper>
    </Wrapper>
  );
};

const AuthName = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 15px;
  background-color: #f0f4f9;
  padding: 5px 0px 5px 16px;
  border: none;
  outline: none;
  margin-bottom: 40px;
`;

const AuthInput = styled.input`
  width: 400px;
  height: 45px;
  padding: 5px 0px 5px 16px;
  border-radius: 15px;
  background-color: #f0f4f9;
  border: none;
  outline: none;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const HaveID = styled.div`
  text-align: center;
  font-size: 13px;
  margin-right: 3px;
`;

const LoginNow = styled.div`
  color: #0051cb;
  text-align: center;
  font-size: 13px;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  > hr {
    margin-bottom: 100px;
    width: 400px;
    height: 0.5px;
    background-color: #1c6de8;
  }
  #id {
    margin-bottom: 30px;
  }
  #password {
    margin-bottom: 80px;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

const AuthButton = styled.button`
  width: 421px;
  height: 60px;
  border-radius: 15px;
  color: white;
  border: none;
  background-color: #0051cb;
  margin-bottom: 30px;
`;

export default SignUp;
