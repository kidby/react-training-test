import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question from './components/Question'
import Results from './components/Results'
import Loading from './components/Loading'
import Error from './components/Error'
import NotFound from './components/NotFound'

import useQuestion from './hooks/useQuestion'

function AppRoutes() {
  const { questions, loading, error } = useQuestion()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
      <Router>
          <Routes>
              {questions.map((question, index) => (
                  <Route
                      key={question.id}
                      path={question.path}
                      element={
                          <Question
                              question={question.question}
                              options={question.options}
                              index={index}
                          />
                      }
                  />
              ))}
              <Route path="/results" element={<Results />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  )
}

export default AppRoutes;
