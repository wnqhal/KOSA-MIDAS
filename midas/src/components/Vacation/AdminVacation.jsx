import React from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";

const AdminVacation = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <ContentWrapper>
        <Title>휴가</Title>
        <hr />
        <VacationList>
          <VacationItem>
            <VacationName>OOO님의 가족 돌봄 휴가</VacationName>
            <VacationBtn>승인</VacationBtn>
          </VacationItem>
        </VacationList>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > hr {
    width: 800px;
    margin: 0;
    margin-bottom: 55px;
    background-color: #1c6de8;
  }
`;

const Title = styled.h1`
  margin: 120px 730px 5px 0;
`;

const VacationList = styled.div`
  display: flex;
  justify-content: center;
`;

const VacationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 780px;
  height: 60px;
  padding: 10px;
  border: 1px solid #1c6de8;
  border-radius: 10px;
`;

const VacationName = styled.p`
  font-size: 20px;
  margin-left: 30px;
`;

const VacationBtn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 45px;
  margin-right: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: white;
  background-color: #1c6de8;
`;

export default AdminVacation;
