import React from "react";
import "../style/About.css";
import Footer from "./Footer";

function About() {
  return (
    <div className="about_us">
      <div className="about_us_content">
        <div className="section one">
          <div className="story_row">
            <div className="story_title">
              <p>ABOUT US</p>
            </div>

            <div className="image_container">
              <img src="teamwork.png" alt="" />
            </div>
            <div className="description">
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="learn_more_button_container">
              <div className="button">LEARN MORE</div>
            </div>
          </div>
          <div className="our_team_logo_row">
            <div className="image_container">
              <img src="teamwork.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section two">
          <div className="mission_values_title">MISSION AND VALUES</div>
          <div className="mission_values_description">
            <div className="image">
              <img
                src="freepik__the-style-is-candid-image-photography-with-natural__57924.jpg"
                alt=""
              />
            </div>
            <div className="description">
              <p className="mission">MISSION</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <p className="values">VALUES</p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
        </div>
        <div className="section three">slot</div>
        <div className="section four">
          <div className="future_goals">
            <div className="title">
              <p>FUTURE GOALS</p>
            </div>
            <div className="description">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default About;
