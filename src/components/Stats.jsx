import React, { useEffect, useState } from 'react'

const StatItem = ({ end, suffix, label, duration = 3000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16) // ~60fps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <div className="col-md-4 mb-4">
      <h2 className="fw-bold text-primary">
        {count}
        {suffix}
      </h2>
      <p className="mb-0">{label}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">

          <StatItem
            end={10000}
            suffix="+"
            label="Active Learners"
          />

          <StatItem
            end={500}
            suffix="+"
            label="Expert Educators"
          />

          <StatItem
            end={95}
            suffix="%"
            label="Success Rate"
          />

        </div>
      </div>
    </section>
  )
}

export default Stats
