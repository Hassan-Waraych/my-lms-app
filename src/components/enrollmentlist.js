import React from 'react'
import EnrolledCourse from './enrolledcourse'

const EnrollmentList = ({ enrollments, dropcourse }) => {
  const total = enrollments.reduce((s, c) => s + c.credithours * c.count, 0)
  return (
    <div>
      <h2>enrollment list</h2>
      {enrollments.length === 0 ? (
        <p>no courses enrolled</p>
      ) : (
        enrollments.map(c => (
          <EnrolledCourse key={c.id} course={c} dropcourse={dropcourse} />
        ))
      )}
      <h3>total credit hours: {total}</h3>
    </div>
  )
}

export default EnrollmentList
