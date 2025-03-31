import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CourseCatalog from './coursecatalog'
import EnrollmentList from './enrollmentlist'

const CoursesPage = () => {
  const [enrollments, setEnrollments] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('enrollments')
    if (stored) setEnrollments(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('enrollments', JSON.stringify(enrollments))
  }, [enrollments])

  const addToEnrollment = (c) => {
    setEnrollments((prev) => {
      const exists = prev.find((i) => i.id === c.id)
      if (exists) {
        return prev.map((i) =>
          i.id === c.id ? { ...i, count: i.count + 1 } : i
        )
      }
      return [...prev, { id: c.id, name: c.name, credithours: 3, count: 1 }]
    })
  }

  const dropCourse = (id) => {
    setEnrollments((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, count: i.count - 1 } : i))
        .filter((i) => i.count > 0)
    )
  }

  return (
    <div className="courses-page">
      <Header />
      <div className="content" style={{ display: 'flex' }}>
        <CourseCatalog addtoenrollment={addToEnrollment} />
        <EnrollmentList enrollments={enrollments} dropcourse={dropCourse} />
      </div>
      <Footer />
    </div>
  )
}

export default CoursesPage
