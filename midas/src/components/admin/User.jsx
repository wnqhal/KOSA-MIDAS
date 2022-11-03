import React from "react";
import styled from "styled-components";
import menu from "../../assets/img/menu.svg";

const User = () => {
  return (
    <Wrapper>
      <div>
        <p id="name">전영준</p>
        <p id="team">2팀</p>
        <p id="state">출근</p>
      </div>
      <img src={menu} alt="menu" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    cursor: pointer;
  }
`;

export default User;
