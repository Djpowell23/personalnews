import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import styled from "styled-components";

const ArticleRow = styled.div`
  border: 1px solid purple;
  height: 150px;
`;

class Article extends Component {
  state = {
    title: "",
    description: "",
    url: "",
    imageUrl: "",
    publishedAt: [],
    source: {
      id: "",
      name: ""
    }
  };

  render() {
    return (
      <ArticleRow>
        <Row>
          <Col md="2">img</Col>
          <Col md="10">
            <h3>News Article blah blah blah</h3>
            <h6>News article description blah blah</h6>
          </Col>
        </Row>
      </ArticleRow>
    );
  }
}

export default Article;
