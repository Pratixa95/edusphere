import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutHero from '../assets/images/slide2.jpg'
import anilSharma from '../assets/images/anilsharma.jpg'
import nehaVerma from '../assets/images/nehaverma.jpg'
import rohitMehta from '../assets/images/rohitmehta.jpg'
import priyaSingh from '../assets/images/priyasingh.jpg'


const About = () => {

  /* ===== Animated Stats ===== */
  const [count, setCount] = useState({
    students: 0,
    teachers: 0,
    satisfaction: 0,
    experience: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => ({
        students: Math.min(prev.students + 1000, 50000),
        teachers: Math.min(prev.teachers + 20, 1000),
        satisfaction: Math.min(prev.satisfaction + 2, 95),
        experience: Math.min(prev.experience + 1, 10)
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Navbar />

      {/* ===== PAGE HEADER ===== */}
<section
  className="about-hero fade-up"
  style={{
    backgroundImage: `url(${aboutHero})`
  }}
>
  <div className="about-hero-overlay">
    <div className="container about-hero-content text-center text-white">
      <h1 className="fw-bold display-5 mb-3">
        Shaping the Future of Learning
      </h1>

      <p className="lead mx-auto" style={{ maxWidth: 720 }}>
        EduSphere empowers students across India with concept-based,
        personalized education designed for real academic success.
      </p>
    </div>
  </div>
</section>




      {/* ===== WHO WE ARE ===== */}
      <section className="container fade-up">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              EduSphere is a modern learning platform designed to help students
              truly understand concepts — not just memorize answers.
            </p>
            <p className="text-muted">
              From Classes 1–12 to competitive exams like JEE, NEET, and IAS,
              we combine expert educators, smart technology, and personalized
              learning paths to deliver measurable results.
            </p>
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h5 className="fw-bold">What We Focus On</h5>
              <ul className="mt-3 text-muted">
                <li>Concept clarity over rote learning</li>
                <li>Personalized progress tracking</li>
                <li>Experienced and verified educators</li>
                <li>Exam-oriented yet foundational teaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="container fade-up">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h3 className="fw-bold mb-3">Our Mission</h3>
              <p className="text-muted">
                To make high-quality education accessible, engaging, and
                personalized for every student, regardless of background.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p className="text-muted">
                To become India’s most trusted learning ecosystem that nurtures
                curiosity, confidence, and lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
<section className="container fade-up">
  <div className="text-center mb-5">
    <h2 className="fw-bold">Meet Our Educators</h2>
    <p className="text-muted">
      A team of passionate teachers, mentors, and subject experts.
    </p>
  </div>

  <div className="row g-4">
    {[
      {
        name: 'Dr. Anil Sharma',
        role: 'Physics Mentor (IIT-JEE)',
        image: anilSharma
      },
      {
        name: 'Neha Verma',
        role: 'Senior Mathematics Educator',
        image: nehaVerma
      },
      {
        name: 'Rohit Mehta',
        role: 'NEET Biology Expert',
        image: rohitMehta
      },
      {
        name: 'Priya Singh',
        role: 'Academic Counselor',
        image: priyaSingh
      }
    ].map((member, index) => (
      <div className="col-md-3" key={index}>
        <div className="card p-4 h-100 text-center team-card">
          <div className="team-avatar mb-3">
            <img
              src={member.image}
              alt={member.name}
              className="img-fluid"
            />
          </div>

          <h6 className="fw-bold mb-1">{member.name}</h6>
          <p className="text-muted mb-0">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ===== WHY EDUSPHERE ===== */}
      <section className="container fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose EduSphere?</h2>
          <p className="text-muted">
            Not just another coaching platform — we focus on outcomes.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: 'Concept-Based Learning',
              desc: 'We focus on understanding, not memorization.'
            },
            {
              title: 'Personalized Study Plans',
              desc: 'Every student gets a custom learning path.'
            },
            {
              title: 'Expert Teachers',
              desc: 'Learn from experienced educators, not recordings only.'
            },
            {
              title: 'Exam-Oriented Strategy',
              desc: 'Built for school success and competitive exams.'
            }
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card p-4 h-100">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST STATS (ANIMATED) ===== */}
      <section className="container fade-up">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="card p-4">
              <h2 className="fw-bold text-primary">{count.students}+</h2>
              <p className="text-muted mb-0">Students Impacted</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4">
              <h2 className="fw-bold text-primary">{count.teachers}+</h2>
              <p className="text-muted mb-0">Expert Educators</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4">
              <h2 className="fw-bold text-primary">{count.satisfaction}%</h2>
              <p className="text-muted mb-0">Student Satisfaction</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4">
              <h2 className="fw-bold text-primary">{count.experience}+</h2>
              <p className="text-muted mb-0">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section text-white fade-up">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Ready to Experience Smarter Learning?
          </h2>
          <p className="mb-4">
            Join thousands of students who trust EduSphere for their academic success.
          </p>
          <a href="/#free-class" className="btn btn-light btn-lg">
            Book a Free Class
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
