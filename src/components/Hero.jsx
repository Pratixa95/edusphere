import React from 'react'
import heroImage from '../assets/images/hero-student.jpg'
import heroBg from '../assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <section
      className="hero-section hero-bg"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT: VALUE PROPOSITION */}
            <div className="col-md-6 text-white fade-up">
              <h1 className="fw-bold display-5">
                Learn Smarter with EduSphere
              </h1>

              <p className="lead mb-4">
                Personalised learning for Classes 1–12, JEE, NEET & IAS
              </p>

              {/* Mobile Illustration */}
              <img
                src={heroImage}
                alt="Students learning with EduSphere"
                className="img-fluid d-md-none mb-4"
              />
            </div>

            {/* RIGHT: CONVERSION FORM */}
            <div className="col-md-5 offset-md-1 fade-up">
              <div className="card p-4 shadow-lg hero-form-card">

                {/* Desktop Illustration */}
                <img
                  src={heroImage}
                  alt="EduSphere classroom"
                  className="img-fluid rounded mb-3 d-none d-md-block"
                />

                <h4 className="fw-bold text-center mb-3">
                  Book a Free Class
                </h4>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Student Name"
                />

                <input
                  type="tel"
                  className="form-control mb-3"
                  placeholder="Mobile Number"
                />

                <select className="form-select mb-3">
                  <option>Select Class / Exam</option>
                  <option>Class 1–5</option>
                  <option>Class 6–8</option>
                  <option>Class 9–10</option>
                  <option>Class 11–12</option>
                  <option>JEE</option>
                  <option>NEET</option>
                  <option>IAS</option>
                </select>

                <button className="btn btn-primary btn-lg w-100">
                  Book Free Class
                </button>

                <small className="text-muted d-block text-center mt-2">
                  Free demo • No payment required
                </small>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
