import React, { useState } from "react";
import styled from "styled-components";
import menu from "../../assets/img/menu.svg";

const UserList = () => {
  const [data, setData] = useState({
    name: "전영준",
    team: "2팀",
  });
  const [modal, setModal] = useState(false);

  const { name, team } = data;

  const onClickModal = () => {
    setModal(!modal);
    setData({
      name: name,
      team: team,
    });
  };

  const onChangeUser = (e) => {
    const { value, name } = e.target;
    console.log(data);
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      {modal ? (
        <ModalBox>
          <ModalContent>
            <p>유저 수정</p>
            <input
              onChange={onChangeUser}
              name="name"
              id="name"
              placeholder="이름 수정"
              defaultValue={name}
            />
            <input
              onChange={onChangeUser}
              name="team"
              id="team"
              placeholder="팀 수정"
              defaultValue={team}
            />
            <button onClick={onClickModal}>수정</button>
          </ModalContent>
        </ModalBox>
      ) : (
        <>
          {" "}
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
            <UserItem onClick={onClickModal}>
              <div>
                <p id="name">{data.name}</p>
                <p id="team">{data.team}</p>
                <p id="state">출근</p>
              </div>
              <img src={menu} alt="menu" />
            </UserItem>
          </UserListWrapper>
        </>
      )}
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

const UserItem = styled.div`
  cursor: pointer;
  width: 1090px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  border: 1px solid #0051cb;
  border-radius: 10px;
  margin-left: 190px;
  margin-top: 20px;
  > div {
    display: flex;
  }
  #name {
    font-size: 18px;
    margin-right: 60px;
  }
  #team {
    font-size: 18px;
    margin-right: 70px;
  }
  #state {
    font-size: 18px;
  }
  > img {
  }
`;

const ModalBox = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    margin-top: 150px;
  }
  #name {
    width: 318px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 15px;
    border: none;
    outline: none;
    background-color: #f0f4f9;
  }
  #team {
    width: 318px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #f0f4f9;
  }
  > button {
    width: 330px;
    cursor: pointer;
    border-radius: 15px;
    height: 50px;
    border: none;
    outline: none;
  }
`;

export default UserList;
