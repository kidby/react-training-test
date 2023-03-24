import { useEffect, useState } from 'react'
import axios from 'axios'

const serverPort = process.env.REACT_APP_SERVER_PORT ?? '5555'

/**
 * useQuestions is a custom hook that fetches questions from the server and
 * manages the loading and error states
 * @returns {{questions: *[], loading: boolean, error: unknown}} The state object
 */
const useQuestions = () => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `http://localhost:${serverPort}/api/questions`
        )
        setQuestions(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchQuestions()
  }, [])

  return { questions, loading, error }
}

export default useQuestions;