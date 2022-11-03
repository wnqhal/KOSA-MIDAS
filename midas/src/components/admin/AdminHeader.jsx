import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminHeader = () => {
  const [work, setWork] = useState(false);

  const onSubmit = () => {
    setWork(!work);
    if (work === false) {
      alert("최문석 관리자님 출근하셨습니다.");
    } else {
      alert("최문석 관리자님 퇴근하셨습니다.");
    }
  };

  return (
    <Wrapper>
      <Header>
        <Link to="/admin" style={{ textDecoration: "none", color: "#000000" }}>
          <p id="title">프로젝트 이름</p>
        </Link>
        <Link
          to="/admin-meeting"
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
        <p id="name">최문석 님</p>
        <button onClick={onSubmit}>{work ? "퇴근" : "출근"}</button>
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
    margin-right: 10px;
  }
  > button {
    cursor: pointer;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    background-color: #1c6de8;
  }
`;

export default AdminHeader;
