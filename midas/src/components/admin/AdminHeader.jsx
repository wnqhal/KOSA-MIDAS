import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/admin" style={{ textDecoration: "none", color: "#000000" }}>
          <p id="title">프로젝트 이름</p>
        </Link>
        <Link
          to="/meeting"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <p id="meeting">회의</p>
        </Link>
        <Link
          to="/admin-homeworking"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <p id="home">재택 근무</p>
        </Link>
        <Link
          to="/admin-vacation"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <p id="paradice">휴가</p>
        </Link>
        <p id="intro">안녕하세요 관리자</p>
        <p id="name">OOO 님</p>
      </Header>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > hr {
    margin: 0;
  }
`;

const Header = styled.header`
  padding: 0px 80px 0px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  #title {
    margin-right: 300px;
    cursor: pointer;
  }
  #home {
    margin-right: 80px;
    cursor: pointer;
  }
  #meeting {
    margin-right: 80px;
  }
  #paradice {
    margin-right: 480px;
    cursor: pointer;
  }
  #intro {
    margin-right: 8px;
  }
  #name {
    font-size: 20px;
  }
`;

export default AdminHeader;
