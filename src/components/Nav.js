import React from "react";
import PropTypes from "prop-types";
// import {Link} from 'react-router-dom'
export default function Nav(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}

          <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              {/* <Link className="nav-link active" aria-current="page" to="/textform">
                {props.homepage}
              </Link> */}

              <a className="nav-link active" aria-current="page" href="#">
                {props.homepage}
              </a>


              {/* This link is imported from react router dom and is not part of the javascript */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}

              {/* but router doesnt work nicely with roouter it seems so we have to remove it and use traditional
                a and href*/}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.link}
              </Link> */}

              <a className="nav-link" href="#">
                {props.link}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              SEARCH
            </button>
          </form> */}
            <div className="mx-2">
              <button className="btn btn-outline-primary" onClick={()=>{props.setbgcol('rgb(0,14,51)')}}>blue</button>
            </div>
            <div className="mx-2">
              <button className="btn btn-outline-danger" onClick={()=>{props.setbgcol('rgb(99,7,0)')}}>red</button>
            </div>
            <div className="mx-2">
              <button className="btn btn-outline-warning" onClick={()=>{props.setbgcol('rgb(122,110,0)')}}>yellow</button>
            </div>
            <div className="mx-2">
              <button className="btn btn-outline-success" onClick={()=>{props.setbgcol('rgb(0,49,2)')}}> green</button>
            </div>
  

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemodeprop}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  homepage: PropTypes.string,
};

Nav.defaultProps = {
  title: "helloThere",
  homepage: "HTTPS",
};
