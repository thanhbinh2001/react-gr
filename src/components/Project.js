import React, { Component } from "react";
import Nav from "./Nav";

export default class Project extends Component {
  render() {
    return (
      <div>
        <div
          className="intro-section small"
          style={{ backgroundImage: 'url("images/background.jpeg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <div className="intro">
                  <h1>Project</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}
