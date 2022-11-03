import React from "react";
import styled from "styled-components";
import auth from "../../assets/img/auth.svg";

const Login = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Title>로그인</Title>
        <hr />
        <AuthInput id="id" type="text" placeholder="아이디" />
        <AuthInput id="password" type="password" placeholder="비밀번호" />
        <AuthButton>로그인</AuthButton>
      </InputWrapper>
      <ImgWrapper>
        <img src={auth} alt="" />
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  margin-left: 240px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  > hr {
    margin-right: 240px;
    margin-bottom: 100px;
    width: 480px;
    height: 1px;
    background-color: #1c6de8;
  }
  #id {
    margin-bottom: 40px;
  }
  #password {
    margin-bottom: 130px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: black;
`;

const AuthInput = styled.input`
  width: 470px;
  height: 50px;
  padding: 5px 0px 5px 16px;
  border-radius: 15px;
  background-color: #f0f4f9;
  border: none;
`;

const AuthButton = styled.button`
  width: 480px;
  height: 60px;
  border-radius: 15px;
  color: white;
  border: none;
  background-color: #0051cb;
`;

const ImgWrapper = styled.div`
  > img {
    width: 550px;
    height: 100%;
  }
`;

export default Login;
