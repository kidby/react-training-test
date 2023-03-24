import React from 'react'

/**
 * Error component to display an error message
 * @param {Object} props
 * @param {string} props.error - The error message to be displayed
 * @returns {JSX.Element} The Error component
 */
function Error({ error }) {
  return <div>Error: {error}</div>
}

export default Error;