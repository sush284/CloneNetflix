import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';
import mobile from '../images/mobile-0819.jpg';
import boxshot from '../images/boxshot.png';
import iconDownload from '../images/download-icon.gif';


function UserStory2DownloadShows() {
  return (
    <div className='downloadShowsDiv'>
    <Container>
     <Row className="justify-content-md-center pt-4 mb-4 position-relative">
     <Col md lg={6}>
        <Image src={mobile}/>
        <div className="downloadMovieBox">
        <Row>
          <Col>
        <img src={boxshot} width={"55px"} alt={"boxshot"}/>
          </Col>
          <Col xs={5}> <h6 className='pt-3'>Stranger Things <a href="/" style={{textDecoration:"none"}}>Downloading...</a></h6></Col>
          <Col>
        <img src={iconDownload} width={"50px"} className="pt-3" alt={"download-icon"}/>

          </Col>
        </Row>

        </div>
      </Col>
      <Col lg={6} className="mt-5 pt-4">
        <h1>Enjoy on your TV</h1>
        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
      </Col>
      
     </Row>
     </Container>
     </div>
  )
}

export default UserStory2DownloadShows
