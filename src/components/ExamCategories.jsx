import React from 'react'
import classImg from '../assets/images/class-1-10.jpg'
import jeeImg from '../assets/images/jee.jpg'
import neetImg from '../assets/images/neet.jpg'
import iasImg from '../assets/images/ias.jpg'

const ExamCategories = () => {
  return (
    <section className="container fade-up">
      <h2 className="text-center fw-bold mb-4">
        Learning Programs for Every Goal
      </h2>

      <div className="row text-center">

        <div className="col-md-3">
          <div className="card p-4 shadow-sm h-100">
            <img src={classImg} className="img-fluid mb-3" alt="Classes 1–10" />
            <h5 className="fw-bold">Classes 1–10</h5>
            <p className="text-muted">Strong foundation learning</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow-sm h-100">
            <img src={jeeImg} className="img-fluid mb-3" alt="JEE" />
            <h5 className="fw-bold">JEE</h5>
            <p className="text-muted">Engineering entrance prep</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow-sm h-100">
            <img src={neetImg} className="img-fluid mb-3" alt="NEET" />
            <h5 className="fw-bold">NEET</h5>
            <p className="text-muted">Medical entrance prep</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-4 shadow-sm h-100">
            <img src={iasImg} className="img-fluid mb-3" alt="IAS" />
            <h5 className="fw-bold">IAS</h5>
            <p className="text-muted">Civil services preparation</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExamCategories
