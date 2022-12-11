import React from "react";
import "../App.css";
import { Accordion, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/FAQSection.css";
function FAQSection() {
  const navigate=useNavigate();
  return (
    <div className="FAQSection">
      <Container>
        <h1 className="text-center pt-5">Frequently Asked Questions</h1>
        <Accordion style={{ width: "800px" }} className="mx-auto" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Netflix? </Accordion.Header>
            <Accordion.Body>
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does Netflix cost?</Accordion.Header>
            <Accordion.Body>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I watch?</Accordion.Header>
            <Accordion.Body>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. 
              <br/>
              <br/>
              You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I cancel?</Accordion.Header>
            <Accordion.Body>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
            <Accordion.Body>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
            <Accordion.Body>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h5 className="text-center fw-lighter mt-5 mb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <Stack
          direction="horizontal"
          className="col-md-12 mx-auto mt-1 mb-5 position-relative"
          gap={0}
        >
          <input
            type="text"
            className="w-50 rounded-0"
            id="email"
          />
          <label htmlFor="id_email" className="placeLabel">
            Email address
          </label>
          <button
            className="btn btn-danger rounded-0"
            style={{ height: "3.2em" }}
            onClick={()=>navigate('/register')}
            
          >
            Get Started
          </button>
        </Stack>
      </Container>
    </div>
  );
}

export default FAQSection;
