import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'

// 🔹 Course Images
import mathMastery from '../assets/images/math_mastery.jpg'
import scienceSimplified from '../assets/images/science_simplified.jpg'
import foundationEnglish from '../assets/images/english.jpg'
import advancedMath from '../assets/images/advance_math.jpg'

// 🔹 Slideshow Images
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'

const Courses = () => {

  /* =========================
     SLIDESHOW LOGIC
  ========================= */
  const slides = [slide1, slide2, slide3, slide4]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 4000) // change slide every 4s

    return () => clearInterval(interval)
  }, [slides.length])

  /* =========================
     COURSES DATA
  ========================= */
  const courses = [
    {
      id: 1,
      title: 'Math Mastery',
      grade: 'Class 6–8',
      subject: 'Mathematics',
      price: 1999,
      thumbnail: mathMastery
    },
    {
      id: 2,
      title: 'Science Simplified',
      grade: 'Class 8–10',
      subject: 'Science',
      price: 2499,
      thumbnail: scienceSimplified
    },
    {
      id: 3,
      title: 'Foundation English',
      grade: 'Class 4–6',
      subject: 'English',
      price: 1499,
      thumbnail: foundationEnglish
    },
    {
      id: 4,
      title: 'Advanced Mathematics',
      grade: 'Class 10–12',
      subject: 'Mathematics',
      price: 2999,
      thumbnail: advancedMath
    }
  ]

  /* =========================
     FILTER STATES
  ========================= */
  const [selectedGrade, setSelectedGrade] = useState('All')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [sortOrder, setSortOrder] = useState('')

  const filteredCourses = courses
    .filter(course =>
      selectedGrade === 'All' || course.grade === selectedGrade
    )
    .filter(course =>
      selectedSubject === 'All' || course.subject === selectedSubject
    )
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price
      if (sortOrder === 'high') return b.price - a.price
      return 0
    })

  return (
    <div>
      <Navbar />

      {/* ===== SLIDESHOW HEADER ===== */}
      <section className="courses-slideshow">

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`courses-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        {/* Overlay Content */}
        <div className="courses-overlay">
          <div className="container fade-up">
            <h1 className="fw-bold">Our Courses</h1>
            <p>
              Structured learning paths designed by expert educators to help
              students build strong fundamentals and succeed academically.
            </p>
          </div>
        </div>

      </section>

      {/* ===== Filter Bar ===== */}
      <section className="container filter-bar fade-up mb-5">
        <div className="row g-3">

          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="All">All Grades</option>
              <option value="Class 4–6">Class 4–6</option>
              <option value="Class 6–8">Class 6–8</option>
              <option value="Class 8–10">Class 8–10</option>
              <option value="Class 10–12">Class 10–12</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="All">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>

        </div>
      </section>

      {/* ===== Courses Grid ===== */}
      <section className="container fade-up mb-5">
        <div className="row">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center text-muted">
              No courses found for selected filters.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Courses
