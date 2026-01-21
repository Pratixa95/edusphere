import React from 'react'
import parent1 from '../assets/images/testimonial-1.jpg'
import parent2 from '../assets/images/testimonial-2.jpg'
import parent3 from '../assets/images/testimonial-3.jpg'

const Testimonials = () => {
  return (
    <section className="py-5 fade-up">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Parents Say</h2>
          <p className="text-muted">
            Trusted by parents across India
          </p>
        </div>

        <div className="row">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm text-center testimonial-card h-100">
              <div className="testimonial-avatar">
                <img src={parent1} alt="Parent testimonial" />
              </div>
              <p className="fst-italic">
                “My child’s concepts are clearer than ever.”
              </p>
              <p>Mr. Ajeet Joshi</p>
              <h6 className="fw-bold mt-3">
                Parent, Class 6
              </h6>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm text-center testimonial-card h-100">
              <div className="testimonial-avatar">
                <img src={parent2} alt="Parent testimonial" />
              </div>
              <p className="fst-italic">
                “Learning feels engaging and structured.”
              </p>
              <p>Mrs. Abhignya Rao</p>
              <h6 className="fw-bold mt-3">
                Parent, Class 8
              </h6>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm text-center testimonial-card h-100">
              <div className="testimonial-avatar">
                <img src={parent3} alt="Parent testimonial" />
              </div>
              <p className="fst-italic">
                “A perfect balance of technology and teaching.”
              </p>
              <p>Mrs. Neeta Patel</p>
              <h6 className="fw-bold mt-3">
                Parent, Class 10
              </h6>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
