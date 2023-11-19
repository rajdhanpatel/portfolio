import React from "react";
import "./Projects.css";
import portfolio from "../../assets/images/portfolio.jpg";
import restAPI from "../../assets/images/restAPI.png";
// import weather from "../../assets/images/weather1.jpg";
import notesApp from "../../assets/images/notesAPP.jpg";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />

        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={portfolio} alt="project1"></img>
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/rajdhanpatel/portfolio"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Back-end</span>
                  <img src={restAPI} alt="project2"></img>
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">REST API</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/rajdhanpatel/FilterGPSDeviceAPI"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-end</span>
                  <img src={notesApp} alt="project3"></img>
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Notes APP</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/rajdhanpatel/notes-app"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
