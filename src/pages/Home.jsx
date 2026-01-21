import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ExamCategories from '../components/ExamCategories'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <ExamCategories />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
