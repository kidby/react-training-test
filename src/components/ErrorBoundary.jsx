import React, { useState, useEffect } from 'react'

/**
 * ErrorBoundary is a component that catches JavaScript errors
 * anywhere in their child component tree and displays a fallback UI
 * @param {Object} props - The props for the ErrorBoundary component
 * @param {React.ReactNode} props.children - The child components to render
 * @returns {JSX.Element} The ErrorBoundary component
 */
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false)

  const componentDidCatch = () => {
    setHasError(true)
  }

  useEffect(() => {
    if (hasError) {
      console.error('Error caught by ErrorBoundary')
    }
  }, [hasError])

  if (hasError) {
    return <h1>Something went wrong.</h1>
  }

  return (
      <React.Fragment>
          {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          componentDidCatch,
        })
      )}
      </React.Fragment>
  )
}

export default ErrorBoundary;
