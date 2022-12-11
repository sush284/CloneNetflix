import React, { useState } from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import "../components/NavigationBar.css";
import { FiSearch, FiBell } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = ({ inputSearchValue, setInputSearchValue }) => {
  const [textFieldShow, setTextFieldShow] = useState(false);
  const [searchButtonShow, setSearchButtonShow] = useState(true);

  function hideMovieSearchField() {}
  function clickMe() {
    setTextFieldShow(true);
    setSearchButtonShow(false);
  }

  function getMovieKeywordValue(event) {
    setInputSearchValue(event.target.value);
  }

  return (
    <div className="flex w-full absolute">
      <Navbar bg="dark" variant="dark" className="navBarStyle">
        <Container fluid>
          <Navbar.Brand href="#home" className="brandLogoStyle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
              width="140"
              height="45"
              className="d-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto position-relative">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/browse">TV Shows</Nav.Link>
            <Nav.Link href="/browse">Movies</Nav.Link>
            <Nav.Link href="/browse">New & Popular</Nav.Link>
            <Nav.Link href="/browse">My List</Nav.Link>
            <Nav.Link href="/plans-and-pricing">Plans and Pricing</Nav.Link>
            <Navbar className="NavRightItems">
              <Nav.Link>
                {textFieldShow && (
                  <input
                    type="text"
                    name="popup search"
                    id="popup"
                    value={inputSearchValue}
                    placeholder="Search Movie"
                    onChange={getMovieKeywordValue}
                    onBlur={hideMovieSearchField}
                  ></input>
                )}
                {searchButtonShow && (
                  <FiSearch onClick={clickMe} id={"searchIcon"} />
                )}
              </Nav.Link>
              <Nav.Link>
                <FiBell />
              </Nav.Link>
              <Nav.Link className="dropdownButtonLink">
              
                <img
                  width="35"
                  height="35"
                  src="https://occ-0-3061-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYZPQPHahyD_fEWYKduPALTtBFplq6rQOdddw6h4SvKdhuVwq-0tNIrAN1n4xZPd3Zoz_h08NBcDZveWBGFFe1LaqUiia4-aYfYZ.png?r=f70"
                  alt="profilePicture"
                />
                <DropdownButton className="dropDownButtonSignOut"
                  id="dropdown-basic-button"
                  title=""
                >
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Logout
                  </Dropdown.Item>
                  </DropdownButton>
              </Nav.Link>
              <a href="#link" className="hamMenu">
                <GiHamburgerMenu class="hamburgerMenuIcon hide show" />
              </a>
            </Navbar>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
