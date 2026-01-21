import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* ===== HERO HEADER ===== */}
      <section className="courses-header fade-up" style={{ marginTop: '70px' }}>
        <div className="container text-center">
          <h1 className="fw-bold">Get in Touch</h1>
          <p>
            Have questions? Need guidance? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="container fade-up">
        <div className="row g-5 align-items-stretch">

          {/* LEFT: CONTACT INFO */}
          <div className="col-md-5">
            <div className="card p-4 h-100 contact-info-card">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="mb-3">
                <strong>Email</strong>
                <p className="text-muted mb-0">support@edusphere.com</p>
              </div>

              <div className="mb-3">
                <strong>Phone</strong>
                <p className="text-muted mb-0">+91 98765 43210</p>
              </div>

              <div className="mb-3">
                <strong>Office Hours</strong>
                <p className="text-muted mb-0">
                  Monday – Saturday<br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

              <div>
                <strong>Location</strong>
                <p className="text-muted mb-0">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="col-md-7">
            <div className="card p-4 shadow-sm">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>

              <form className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="col-12">
                  <button className="btn btn-primary btn-lg w-100">
                    Send Message
                  </button>
                </div>

                <small className="text-muted text-center">
                  We usually respond within 24 hours
                </small>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section text-white fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Want a Free Demo Class?
          </h2>
          <p className="mb-4">
            Experience our teaching style before you enroll.
          </p>
          <a href="/courses" className="btn btn-light btn-lg">
            Explore Courses
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
