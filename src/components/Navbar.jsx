import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-custom">
      <div className="container">

        {/* ===== LOGO ===== */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="EduSphere Logo"
            className="navbar-logo"
          />
          <span className="fw-bold ms-2">EduSphere</span>
        </Link>

        {/* ===== MOBILE TOGGLER ===== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#edusphereNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ===== NAV LINKS ===== */}
        <div className="collapse navbar-collapse" id="edusphereNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <NavLink className="btn btn-primary px-4" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
