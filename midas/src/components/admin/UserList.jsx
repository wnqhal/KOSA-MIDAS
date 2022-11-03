import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import customAxios from "../../api";
import User from "./User";

const UserList = () => {
  useEffect(() => {
    customAxios.get("/");
  }, []);

  return (
    <Wrapper>
      <TypeMenu>
        <div className="show">
          <p id="name">이름</p>
          <p id="team">팀</p>
          <p id="state">상태</p>
        </div>
        <Dropdown>
          MENU
          <Dropcontent>
            <Content>출근</Content>
            <Content>자리 비움</Content>
            <Content>재택 근무</Content>
            <Content>퇴근</Content>
          </Dropcontent>
        </Dropdown>
        <div className="search">
          <input type={"text"} placeholder="사원 검색" />
          <button>검색</button>
        </div>
      </TypeMenu>
      <UserListWrapper>
        <User />
      </UserListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TypeMenu = styled.div`
  margin-top: 100px;
  margin-left: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .show {
    display: flex;
  }
  #name {
    margin-right: 80px;
  }
  #team {
    margin-right: 80px;
  }
  #state {
    margin-right: 200px;
  }
  .search {
    margin-right: 200px;
    > input {
      width: 200px;
      height: 40px;
      margin-right: 15px;
      padding-left: 5px;
      border-radius: 10px;
      border: 1px solid #0051cb;
    }
    > button {
      width: 50px;
      height: 40px;
      cursor: pointer;
      border: 1px solid #0051cb;
      background-color: white;
      border-radius: 10px;
      :hover {
        color: white;
        background-color: #0051cb;
      }
    }
  }
`;

export const Dropdown = styled.div`
  align-items: center;
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 300px;
  &:hover {
    > div {
      display: block;
    }
  }
`;

export const Dropcontent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &content:hover {
    background-color: #ddd;
  }
`;

export const Content = styled.div`
  border: none;
  background-color: white;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 13px;
  &:hover {
    text-decoration: none;
  }
`;

const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default UserList;
