import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";
import { useNavigate } from "react-router-dom";

const HomeApproval = () => {
  const navigate = useNavigate();

  const ClickNo = () => {
    alert("재택 근무가 거절되었습니다.");
    navigate("/admin");
  };

  const ClickYes = () => {
    alert("재택 근무가 승인되었습니다.");
    navigate("/admin");
  };

  return (
    <Wrapper>
      <AdminHeader />
      <Header>
        <Title>남주빈님의 재택 근무 신청</Title>
      </Header>
      <DescriptionDiv>
        <DateWrapper>
          <p>신청 날짜</p>
          <div className="dateDiv">
            <p>2022 / 11 / 04</p>
          </div>
        </DateWrapper>
        <ChoiceDiv>
          <ApprovalBtn onClick={ClickYes}>승인</ApprovalBtn>
          <FailBtn onClick={ClickNo}>거절</FailBtn>
        </ChoiceDiv>
      </DescriptionDiv>
      <hr />
      <ReasonWrapper>안녕하십니까 팀장님 다름이 아니라...</ReasonWrapper>
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
  padding: 10px;
  margin-left: 100px;
  width: 1295px;
  height: 500px;
  background-color: #f0f4f9;
`;

export default HomeApproval;
