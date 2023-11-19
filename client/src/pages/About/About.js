import React from "react";
import "./About.css";
import profile from "../../assets/images/img.jpeg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={profile} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello, My name is Rajdhan Patel. I am a Software Engineer-1 in
                Freight Tiger. Currently, i am working here since October 2022.
                I have gained valuable experience in various aspects of
                information technologies. My primary responsibilities as an IT
                engineer include providing technical support to end-users,
                giving the training to new joinee and also contributing code in
                tether server code base where i have used NodeJS and expressJS.
                I have also been involved in various integration where my role
                play around rest APIs, reading and writing metabase and
                databricks query, monitoring and creating dashboard, taking the
                SE-1 interview. Overall, my months of experience as an IT
                engineer have provided me with a solid foundation in the field,
                and I am eager to continue expanding my knowledge and
                contributing to the success of my organization in the months and
                years to come.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
