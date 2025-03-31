import React from 'react'

const EnrolledCourse = ({ course, dropcourse }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', background: '#fff' }}>
      <h4>{course.name}</h4>
      <p>credit hours: {course.credithours * course.count}</p>
      <button onClick={() => dropcourse(course.id)}>drop course</button>
    </div>
  )
}

export default EnrolledCourse
