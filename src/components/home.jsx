import React, { Component } from "react";
import HomePicture from "./home.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center" style={{ marginTop: 50 }}>
          <div className="col">
            <img src={HomePicture} className="img-fluid" alt="homepic" />
          </div>
          <div className="col">
            <h1>Captain Morgan Needs a Home</h1>
            <h3 className="text-muted">
              I'm a three-legged cat looking for a family. If you love
              adventure, I'm purrferct for you
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
