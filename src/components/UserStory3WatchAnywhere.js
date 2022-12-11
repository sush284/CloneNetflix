import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';
import devices from '../images/device-pile-in.png';
import videoUserStory3 from '../images/videoUserStory3.m4v';

function UserStory3WatchAnywhere() {
  return (
    <div className='watchAnywhereDiv'>
    <Container>
     <Row className="justify-content-md-center pt-4 mb-4 position-relative">
      <Col lg={6} className="mt-5 pt-4">
        <h1>Enjoy on your TV</h1>
        <h3>Watch on smart TVs, Play Station, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
      </Col>
      <Col md lg={6}>
        <Image src={devices} className="image2Align" width={'500px'} height={'350px'}/>
      <video  className="video2Align" controls autoPlay muted> 
            <source src={videoUserStory3} type="video/mp4" alt="video not available"/>
            </video>
      </Col>
     </Row>
     </Container>
     </div>
  )
}

export default UserStory3WatchAnywhere
