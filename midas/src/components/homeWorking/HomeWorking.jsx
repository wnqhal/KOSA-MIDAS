import React, { useState } from "react";
import styled from "styled-components";
import AdminHeader from "../admin/AdminHeader";
import { Link } from "react-router-dom";

const HomeWorking = () => {
  const [choice, setChoice] = useState(true);

  const ChoiceApproval = () => {
    setChoice(true);
  };

  const ChoiceReport = () => {
    setChoice(false);
  };

  return (
    <Wrapper>
      <AdminHeader />
      <ChoiceBarWrapper>
        <ApprovalContent onClick={ChoiceApproval} choice={choice}>
          <p>재택 근무 승인/거절</p>
        </ApprovalContent>
        <ReportContent onClick={ChoiceReport} choice={choice}>
          <p>재택 근무 보고서</p>
        </ReportContent>
      </ChoiceBarWrapper>
      <ContentWrapper>
        {choice ? (
          <ApprovalWrapper>
            <Link
              to="/homeapproval/1"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <ApprovalItem>
                <p id="name">OOO님의 재택 근무 신청</p>
                <p id="content">승인 / 거절</p>
              </ApprovalItem>
            </Link>
          </ApprovalWrapper>
        ) : (
          <ReportWrapper>
            <Link
              to="/homereport/1"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <ReportItem>
                <p>OOO님의 재택 근무 보고서</p>
              </ReportItem>
            </Link>
          </ReportWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChoiceBarWrapper = styled.div`
  display: flex;
  margin-top: 120px;
`;

const ApprovalContent = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  background-color: ${({ choice }) => (choice ? "#d9d9d9" : "#ffffff")};
  cursor: pointer;
  > p {
    font-size: 20px;
  }
`;

const ReportContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid #d9d9d9;
  background-color: ${({ choice }) => (choice ? "#ffffff" : "#d9d9d9")};
  cursor: pointer;
  > p {
    font-size: 20px;
  }
`;

const ContentWrapper = styled.div``;

const ApprovalWrapper = styled.div`
  margin-top: 35px;
`;

const ReportWrapper = styled.div`
  margin-top: 35px;
`;

const ApprovalItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 984px;
  border: 1px solid #d9d9d9;
  padding: 0px 10px;
  border-radius: 5px;
  cursor: pointer;
  #name {
    margin-left: 30px;
  }
  #content {
    margin-right: 30px;
  }
`;

const ReportItem = styled.div`
  width: 984px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  > p {
    margin-left: 30px;
  }
`;

export default HomeWorking;
