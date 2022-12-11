import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
function FooterSection() {
  return (
    <Container fluid className='FooterSection position-absolute bg-gradient-to-l from-black'>
       <Container className="gridSection mx-auto pl-5 pt-5">
       <h6 className='fw-lighter'>Questions? Call <span className="underLineText">000-800-040-1843</span></h6>
     <Row className="justify-content-md-center mt-4 mb-4">
      <Col lg={3} className="underLineText ft-13">FAQ</Col>
      <Col lg={3} className="underLineText ft-13">Help Centre</Col>
      <Col lg={3} className="underLineText ft-13">Account</Col>
      <Col lg={3} className="underLineText ft-13">Media Centre</Col>
     </Row>
     <Row className="justify-content-md-center mt-4 mb-4">
      <Col lg={3} className="underLineText ft-13">Investor Relations</Col>
      <Col lg={3} className="underLineText ft-13">Jobs</Col>
      <Col lg={3} className="underLineText ft-13">Ways to watch</Col>
      <Col lg={3} className="underLineText ft-13">Terms of Use</Col>
     </Row>
     <Row className="justify-content-md-center mt-4 mb-4">
      <Col lg={3} className="underLineText ft-13">Privacy</Col>
      <Col lg={3} className="underLineText ft-13">Cookie Preferences</Col>
      <Col lg={3} className="underLineText ft-13">Corporate Information</Col>
      <Col lg={3} className="underLineText ft-13">Contact Us</Col>
     </Row>
     <Row className="justify-content-md-center mt-4 mb-4">
      <Col lg={3} className="underLineText ft-13">Speed Test</Col>
      <Col lg={3} className="underLineText ft-13">Legal Notices</Col>
      <Col lg={3} className="underLineText ft-13">Only on Netflix</Col>
      <Col lg={3} className=""></Col>
     </Row>
     <div className="footerButton ">
     <select name="language" className='languageButtonFooter' id="language">
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
     </select>
     <h6>Netflix(India)</h6>
     </div>

     
     </Container>
    </Container>
  )
}

export default FooterSection
