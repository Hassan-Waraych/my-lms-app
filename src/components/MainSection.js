import React, { useState, useEffect } from 'react'
import courses from '../data/courses'
import testimonials from '../data/testimonials'

const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [randomTestimonials, setRandomTestimonials] = useState([])

  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  useEffect(() => {
    setFeaturedCourses(getRandomItems(courses, 3))
    setRandomTestimonials(getRandomItems(testimonials, 2))
  }, [])

  const renderStars = (rating) => {
    const totalStars = 5
    const filledStars = '★'.repeat(rating)
    const emptyStars = '☆'.repeat(totalStars - rating)
    return filledStars + emptyStars
  }

  return (
    <main 
      className="index" 
      style={{
        padding: '20px',
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '90%',
        backgroundColor: '#f4f4f4'
      }}
    >
      {/* About LMS Section */}
      <section id="about" style={{ marginBottom: '40px' }}>
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.
        </p>
        <h3>Key Features:</h3>
        <div>
          <p>- Enroll in courses</p>
          <p>- Attempt quizzes</p>
          <p>- View leaderboards</p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Featured Courses</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {featuredCourses.map(course => (
            <div 
              key={course.id} 
              style={{ 
                border: '1px solid #ccc', 
                padding: '10px', 
                margin: '10px', 
                width: '250px', 
                backgroundColor: '#fff'
              }}
            >
              <img 
                src={course.image} 
                alt={course.name} 
                style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
              />
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2>Testimonials</h2>
        <div>
          {randomTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
            >
              <h4>{testimonial.studentName}</h4>
              <p>{testimonial.review}</p>
              <p>{renderStars(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MainSection
