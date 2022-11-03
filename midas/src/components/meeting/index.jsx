import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";

const Meeting = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <Title>회의</Title>
      <hr />
      <SettingWrapper>
        <DateWrapper>
          <p>회의 날짜</p>
          <input type={"text"} placeholder="22/11/04 09:00" />
        </DateWrapper>
        <TeamWrapper>
          <p>팀</p>
          <input type={"text"} placeholder="인사1팀" />
        </TeamWrapper>
        <PlaceWrapper>
          <p>장소</p>
          <input type={"text"} placeholder="1층 카페테리아" />
        </PlaceWrapper>
      </SettingWrapper>
      <ContentInput placeholder="내용" />
      <BtnDiv>
        <SubmitButton>회의 신청하기</SubmitButton>
      </BtnDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > hr {
    width: 1150px;
    margin: 0;
    margin-left: 180px;
  }
`;

const Title = styled.h1`
  margin: 40px 0 5px 180px;
`;

const DateWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 70px;
  border-radius: 15px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    margin-right: 50px;
  }
  > input {
    width: 220px;
    height: 35px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
  }
`;

const TeamWrapper = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 70px;
  border-radius: 15px;
  margin-left: 50px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    margin-right: 30px;
  }
  > input {
    width: 150px;
    height: 35px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
  }
`;

const PlaceWrapper = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 70px;
  border-radius: 15px;
  margin-left: 50px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    margin-right: 30px;
  }
  > input {
    width: 150px;
    height: 35px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-align: center;
  }
`;

const SettingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentInput = styled.textarea`
  margin-left: 210px;
  width: 1070px;
  padding: 10px;
  margin-top: 30px;
  height: 410px;
  border-radius: 10px;
  outline: none;
  resize: none;
`;

const BtnDiv = styled.div`
  margin-left: 200px;
  margin-right: 210px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export default Meeting;
