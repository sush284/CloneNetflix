import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';
import kidsStoryPicture from '../images/childrenmovies.png';


function UserStory4Kids() {
  return (
   <div className='kidsStoryDiv'>
     <Container>
     <Row md={12} className="justify-content-md-center pt-4 mb-4">
     <Col sm={8}>
        <Image src={kidsStoryPicture}/>
        {/* <video className="video1UserStory1" src={video1UserStory1}/> */}
      </Col>
      <Col sm={4} className="mt-5 pt-5">
        <h1>Enjoy on your TV</h1>
        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
      </Col>
     </Row>
     </Container>
   </div>
  )
}

export default UserStory4Kids
