import React, { useState } from "react";
import background from "../images/background.jpg";
import { Button, Modal, Stack, Form } from "react-bootstrap";
import { signInWithGoogle, signOutFromGoogle } from "../firebase.jsx";
import "../App.css";
import "../components/Header.css";
import brandLogo from "../images/netflix-logo-png-large.png";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function Header() {
  // const [email,setEmail]=useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [loginPopupShow,setLoginPopupShow] =useState(false);
  const [loginBtnShow,setLoginBtnShow]=useState(true);
  const [logoutShow,setLogoutShow]=useState(false);
  const [password, setPassword] = useState("");
  const [show, handleLoginShow] = useState(false);
let userName=localStorage.getItem("name");
  function handleLogin() {
    console.log("Login is clicked");
    handleLoginShow(true);
    setLoginPopupShow(true);
    console.log("Value of login show is " + show);
  }
  function handleClose() {
    handleLoginShow(false);
  }
  function handleEmailChange(event) {
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if(!event.target.value.match(validRegex))
    // window.alert("not a valid email id");

    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const googleLogin = () => {
    signInWithGoogle();
      setLogoutShow(true);
      setLoginPopupShow(false);
    setLoginBtnShow(false);
  };
  // console.log("user name is "+localStorage.getItem("name"));

  const signOut = () => {
    signOutFromGoogle();
    setLoginBtnShow(true);

    setLogoutShow(false);
  };

  return (
    <div className="headerSection position-relative">
    {loginPopupShow &&
      <Modal show={show} className="my-modal" onHide={handleClose}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}

        <Modal.Body>
          <Modal.Title>Login</Modal.Title>

          <Form>
            <Form.Label>Email/UserName</Form.Label>
            <Form.Control
              value={username}
              type="email"
              placeholder="Email or Phone Number"
              onChange={handleEmailChange}
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              title="Please provide valid e-mail address"
            />

            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />

            <Button variant="primary">Login</Button>
            <Stack direction="horizontal" gap={3}>
              <Form.Check type={"checkbox"} label={`Remember me`} />
              <Form.Text className="bg-none ms-auto">
                <a href="/browse">Need help?</a>
              </Form.Text>
            </Stack>
            <div class="text-center pt-3">
              <Button onClick={() => googleLogin()}>
                Login With Social Media
                <FcGoogle className="ml-5 googleIcon"/>
              </Button>
            </div>

            <Form.Text className="bg-none ms-auto signupTextStyle">
              New to Netflix?
              <a target="_self" href="/">
                Sign up now
              </a>
            </Form.Text>
            <Form.Text className="bg-none ms-auto termsStyle">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a target="_self" href="/SignupScreen">
                Learn more
              </a>
            </Form.Text>
          </Form>
        </Modal.Body>
      </Modal>
    }
      <div className="bItem bg-gradient-to-tl from-black">
        <img
          className="backgroundImage bg-gradient-to-bl from-white"
          src={background}
          alt="background"
        />
      </div>
      <img className="logoBrand" src={brandLogo} alt="brand-logo file" />
      <div className="sideButtons">
        <select name="language" className="languageButton" id="language">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        {loginBtnShow &&<Button className="loginButton" onClick={handleLogin} id={"loginId"}>
          Sign In
        </Button>}
        {logoutShow &&<div className="logoutSection"><p>Welcome, {userName.slice(0,6)}</p>
        <img src={localStorage.getItem("profilePic")} alt="no pic"/>
        <Button className="loginButton" onClick={signOut} >
          Logout
        </Button></div>}
        
      </div>

      <div className="headerMiddleContent position-absolute start-50 translate-middle text-center">
        <h1 className="fw-bold lh-sm">Unlimited movies, TV shows and more.</h1>
        <h4 className="lh-sm pt-2">Watch anywhere. Cancel anytime.</h4>
        <h6 className="lh-base pt-2 pb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <Stack
          direction="horizontal"
          className="col-md-12 mx-auto text-center mt-1 mb-5"
          gap={1}
        >
          <input
            type="text"
            className="w-100 rounded-0"
            id="id_email"
            // placeholder="Email Address"
          />
          <label htmlFor="id_email" className="placeLabel1">
            Email address
          </label>
          <button
            className="btn btn-danger rounded-0"
            style={{
              height: "3.2em",
              width: "18em",
              backgroundColor: "#e30813",
              fontWeight: "600",
            }}
            onClick={() => navigate("/browse")}
          >
            Get Started <FaAngleRight />
          </button>
        </Stack>
      </div>
      <div className="middleContentGradient" />
    </div>
  );
}

export default Header;
