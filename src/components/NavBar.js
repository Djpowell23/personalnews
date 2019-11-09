import React from "react";
import { Container, Col, Row } from "reactstrap";
import styled from "styled-components";

const NavRow = styled(Row)`
  text-align: center;
  h1 {
    color: red;
  }
  .navIcon {
    border: 1px solid black;
  }
  .navTitle {
    border: 1px solid red;
  }
  .navSearch {
    border: 1px solid blue;
  }
`;

function NavBar() {
  return (
    <>
      <NavRow>
        {/* Navigation Icon */}
        <Col className="col-md-1 navIcon">icon</Col>
        <Col className="col-md-10 navTitle">
          <h1>Title</h1>
        </Col>
        <Col className="col-md-1 navSearch">search</Col>
      </NavRow>
    </>
  );
}

export default NavBar;
