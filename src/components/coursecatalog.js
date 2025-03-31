import React from 'react'
import courses from '../data/courses'
import CourseItem from './courseitem'

const CourseCatalog = ({ addtoenrollment }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {courses.map(c => (
        <CourseItem key={c.id} course={c} addtoenrollment={addtoenrollment} />
      ))}
    </div>
  )
}

export default CourseCatalog
