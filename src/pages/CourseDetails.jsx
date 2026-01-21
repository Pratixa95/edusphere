import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CourseDetails = () => {
  const { id } = useParams()

  // Temporary static data (API-ready)
  const course = {
    title: 'Math Mastery',
    grade: 'Class 6–8',
    price: 1999,
    description:
      'A structured mathematics program focused on building strong fundamentals through concept-based learning.',
    highlights: [
      'Clear explanation of core concepts',
      'Practice-based learning approach',
      'Doubt-solving support',
      'Progress tracking'
    ]
  }

  return (
    <div>
      <Navbar />

      {/* Course Header */}
      <section className="course-details-header">
        <div className="container text-white">
          <h1 className="fw-bold">{course.title}</h1>
          <p className="lead">{course.grade}</p>
          <button className="btn btn-light btn-lg rounded-pill mt-3">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Course Content */}
      <section className="container py-5">
        <div className="row">

          <div className="col-md-8">
            <h3 className="fw-bold mb-3">Course Overview</h3>
            <p className="text-muted">{course.description}</p>

            <h4 className="fw-bold mt-4">What You’ll Learn</h4>
            <ul className="list-group list-group-flush mt-3">
              {course.highlights.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-4 sticky-top">
              <h4 className="fw-bold">₹{course.price}</h4>
              <p className="text-muted">Full course access</p>
              <button className="btn btn-primary w-100">
                Enroll Now
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CourseDetails
