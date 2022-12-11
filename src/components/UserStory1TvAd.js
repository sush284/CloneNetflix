import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tv from "../images/tv.png";
import video1UserStory1 from "../images/video1UserStory1.m4v";

function UserStoryTvAd() {
  return (
    <div className="userStoryTvAd">
      <Container>
        <Row className="justify-content-md-center pt-4 mb-4">
          <Col lg={6} className="mt-5 pt-4">
            <h1>Enjoy on your TV</h1>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </Col>
          <Col md lg={6} className="position-relative">
            <Image
              className="image1Align"
              src={tv}
              width={"550px"}
              height={"380px"}
            />
            <video  className="video1Align" controls autoPlay muted> 
            <source src={video1UserStory1} type="video/mp4" alt="video not available"/>
            </video>

    
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserStoryTvAd;
