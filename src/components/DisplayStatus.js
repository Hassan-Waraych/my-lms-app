import React from 'react'

const DisplayStatus = ({ type, message }) => {
  const style = {
    padding: '10px',
    margin: '10px',
    color: type === 'success' ? 'green' : 'red',
    border: `1px solid ${type === 'success' ? 'green' : 'red'}`
  }
  return <div style={style}>{message}</div>
}

export default DisplayStatus
