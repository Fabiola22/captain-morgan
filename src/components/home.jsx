import React, { Component } from "react";
import HomePicture from "./monkey2.jpeg";
import weChatId from "./wechat.jpeg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col" style={{ marginBottom: "30px" }}>
            <h1>Captain Morgan Needs a Forever Home</h1>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col">
            <img
              src={HomePicture}
              className="img-fluid"
              alt="homepic"
              width="600"
              height="400"
            />
          </div>
          <div className="col">
            <blockquote className="blockquote">
              <p className="mb-0">
                I'm a three-legged cat looking for a family. If you love
                adventure, I'm purrferct for you.
              </p>
              <footer className="blockquote-footer">
                Captain Morgan <cite title="Source Title">aka Monkey</cite>
              </footer>
            </blockquote>
            <p className="lead" style={{ color: "tan" }}>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus.
            </p>
            <div className="d-flex flex-nowrap">
              <div className="order-1 p-5">
                <img
                  src={weChatId}
                  className="responsive"
                  alt="homepic"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
