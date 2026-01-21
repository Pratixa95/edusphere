import React from 'react'
import { useNavigate } from 'react-router-dom'
import placeholder from '../assets/images/course-placeholder.jpg'

const CourseCard = ({ course }) => {
  const navigate = useNavigate()

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card course-card h-100"
        onClick={() => navigate(`/courses/${course.id}`)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={course.thumbnail || placeholder}
          className="card-img-top"
          alt={course.title}
        />
        <div className="card-body">
          <h5>{course.title}</h5>
          <p className="text-muted">{course.grade}</p>
          <h6>₹{course.price}</h6>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
