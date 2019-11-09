import React, { Component } from "react";

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
      <>
        <h3>Article Component</h3>
      </>
    );
  }
}

export default Article;
