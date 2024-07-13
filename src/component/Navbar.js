import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.bMode === 'dark' ? 'blue-navbar' : `bg-${props.mode}`}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/ContactUs">{props.contactUs}</Link>
            </li>
          </ul>

          {/* <div className="form-check form-switch mx-1 my-1">
            <input className="form-check-input" onClick={props.blueMode} type="checkbox" role="switch" id="blue" />
            <label className="form-check-label" htmlFor="blue">
              Blue Mode
            </label>
          </div> */}

          <div className="form-check form-switch mx-1 my-1">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  contactUs: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  bMode: PropTypes.string.isRequired,
  blueMode: PropTypes.func.isRequired
}
