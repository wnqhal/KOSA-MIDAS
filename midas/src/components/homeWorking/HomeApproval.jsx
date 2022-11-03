import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";

const HomeApproval = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <Header>
        <Title>OOO님의 재택 근무 신청</Title>
      </Header>
      <DescriptionDiv>
        <DateWrapper>
          <p>신청 날짜</p>
          <div className="dateDiv">
            <p>2022 / 11 / 04</p>
          </div>
        </DateWrapper>
        <ChoiceDiv>
          <ApprovalBtn>승인</ApprovalBtn>
          <FailBtn>거절</FailBtn>
        </ChoiceDiv>
      </DescriptionDiv>
      <hr />
      <ReasonWrapper></ReasonWrapper>
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
  background-color: #d9d9d9;
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

const ChoiceDiv = styled.div``;

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

const FailBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-right: 100px;
  margin-left: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #e74242;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const ReasonWrapper = styled.div`
  margin-left: 100px;
  width: 1310px;
  height: 500px;
  background-color: #d9d9d9;
`;

export default HomeApproval;
