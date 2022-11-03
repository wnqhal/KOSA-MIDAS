import React from "react";
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import UserList from "./UserList";

const AdminHome = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <UserList />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AdminHome;
