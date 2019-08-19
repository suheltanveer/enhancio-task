import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

const Header = styled.header`
  background-color: #efefef;
  text-align: left;
`;

const Img = styled.img`
  max-width: 80px;
`;

const Main = styled.main`
  padding: 20px;
`;

const Page = props => {
  return (
    <div className="wrapper">
      <Header>
        <Img src={logo} alt="logo" />
      </Header>
      <Main>{props.children}</Main>
    </div>
  );
};

export default Page;
