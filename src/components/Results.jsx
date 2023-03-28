import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // if 'cannot resolve symbol' error: https://stackoverflow.com/questions/70031839/cannot-resolve-symbol-routes
import styles from '../styles/styles.module.css';

/**
 * Results component to display the last answer and provide an option to start over
 * @returns {JSX.Element|null} The Results component unless no last answer
 */
function Results() {
    const navigate = useNavigate();
    const answers = useSelector((state) => state.questions.answers);
    const lastAnswer = Object.values(answers).pop();

    const clickStartOver = () => navigate('/');

    useEffect(() => {
        if (!lastAnswer) {
            navigate('/');
        }
    }, [lastAnswer, navigate]);

    if (!lastAnswer) {
        return null;
    }

    return (
        <div className={styles.questionContainer}>
            <h2>Your answer:</h2>
            <span className={styles.answerText} aria-labelledby="answer-label">
                {lastAnswer.label}
            </span>
            <button
                className={styles.optionButton}
                onClick={clickStartOver}
                aria-label="Start Over"
            >
                Start Over
            </button>
        </div>
    )
}

export default Results;
