import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";
import { useNavigate } from "react-router-dom";

const HomeReport = () => {
  const navigate = useNavigate();
  const onClick = () => {
    alert("보고서가 확인 되었습니다.");
    navigate("/admin");
  };

  return (
    <Wrapper>
      <AdminHeader />
      <Header>
        <Title>남주빈님의 재택 근무 보고서</Title>
      </Header>
      <DescriptionDiv>
        <DateWrapper>
          <p>신청 날짜</p>
          <div className="dateDiv">
            <p>2022 / 11 / 04</p>
          </div>
        </DateWrapper>
        <ChoiceDiv>
          <ApprovalBtn onClick={onClick}>확인</ApprovalBtn>
        </ChoiceDiv>
      </DescriptionDiv>
      <hr />
      <ReasonWrapper>- 서버 로그인 작업을 하였습니다.</ReasonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > hr {
    width: 1310px;
  }
`;

const Header = styled.header`
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-left: 100px;
`;

const DateWrapper = styled.div`
  width: 300px;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f9;
  margin-left: 100px;
  > p {
    margin-left: 20px;
  }
  .dateDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
    background-color: white;
    margin-right: 20px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChoiceDiv = styled.div`
  margin-right: 100px;
`;

const ApprovalBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #1c6deb;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const ReasonWrapper = styled.div`
  margin-left: 100px;
  padding: 10px;
  width: 1295px;
  height: 500px;
  background-color: #f0f4f9;
`;

export default HomeReport;
