import React, { useState } from 'react'

const CourseItem = ({ course, addtoenrollment }) => {
  const [showdesc, setShowDesc] = useState(false)
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        width: '250px',
        background: '#fff'
      }}
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
    >
      <img 
        src={course.image} 
        alt={course.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      <h3>{course.name}</h3>
      <p>instructor: {course.instructor}</p>
      {showdesc && <p>{course.description}</p>}
      <button onClick={() => addtoenrollment(course)}>enroll now</button>
    </div>
  )
}

export default CourseItem
