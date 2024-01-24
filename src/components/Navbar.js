import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">
          <div className={`text-${props.mode === 'light'? 'dark':'light'}`}>
            {props.title}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="./textfield">
                <div className={`text-${props.mode === 'light'? 'dark':'light'}`}>
                Home
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./about">
                <div className={`text-${props.mode === 'light'? 'dark':'light'}`}>
                {props.aboutText}
                </div>
                
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2 " onClick={() =>{props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
            <div className="bg-danger rounded mx-2 " onClick={() =>{props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
            <div className="bg-success rounded mx-2 " onClick={() =>{props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
            <div className="bg-warning rounded mx-2 " onClick={() =>{props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}} ></div>
            <div className="bg-light rounded mx-2 " onClick={() =>{props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer', border:'3px solid black'}} ></div>
            <div className="bg-dark rounded mx-2 " onClick={() =>{props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer', border:'3px solid white'}} ></div>
          </div>
      
      
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About text here",
};
