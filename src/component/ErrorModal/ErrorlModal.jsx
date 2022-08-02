import React from 'react'

const ErrorlModal = (props) => {
  return (
    <div className="error-bg">
      <div className="error-card">
        <i className="fa-exclamation-triangle"></i>
        <p className="error-message">{props.errorMessage}</p>
        <button className='error-btn'>Close</button>
      </div>
    </div>
  )
}

export default ErrorlModal