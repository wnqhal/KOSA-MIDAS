import React from "react";
import styled from "styled-components";
import people from "../../assets/img/people.svg";
import home from "../../assets/img/home.svg";
import time from "../../assets/img/time.svg";
import meet from "../../assets/img/meet.svg";
import coffee from "../../assets/img/coffee.svg";
import vacation from "../../assets/img/vacation.svg";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={people} alt="" />
        <p>전영준</p>
      </ProfileWrapper>
      <MenuWrapper>
        <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
          <MenuItem>
            <img src={time} alt="" />
            <p>홈</p>
          </MenuItem>
        </Link>
        <Link
          to="/homeworking"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <MenuItem>
            <img src={home} alt="" />
            <p>재택 근무</p>
          </MenuItem>
        </Link>
        <Link
          to="/meeting"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <MenuItem>
            <img src={meet} alt="" />
            <p>회의</p>
          </MenuItem>
        </Link>
        <Link to="/coffee" style={{ textDecoration: "none", color: "#000000" }}>
          <MenuItem>
            <img src={coffee} alt="" />
            <p>커피챗</p>
          </MenuItem>
        </Link>
        <Link
          to="/vacation"
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <MenuItem>
            <img src={vacation} alt="" />
            <p>휴가</p>
          </MenuItem>
        </Link>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  align-items: center;
  > img {
    width: 70px;
    height: 70px;
    margin-right: 16px;
    margin-left: 85px;
  }
  > p {
    font-size: 18px;
    font-weight: 400;
  }
`;

const MenuWrapper = styled.div`
  margin-top: 80px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 30px;
  > img {
    margin-right: 19px;
  }
`;

export default MenuBar;
