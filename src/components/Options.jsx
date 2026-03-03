import { useState, useEffect } from 'react'
import Feedback from "./Feedback.jsx"


function OptionsBtn () {
    const [feedback, setFeedback] = useState(() => {
        const savedData = localStorage.getItem("feedback");
        return savedData ? JSON.parse(savedData) : {
            good:0,
            neutral:0,
            bad:0, 
            total:0,
            positive:0
        }
    })
    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback))
    }, [feedback])

    const handleClick = (type) => {
        const updatedFeedback = {...feedback}
        if (type === "Good") {
            updatedFeedback.good += 1
        } else if (type === "Neutral") {
            updatedFeedback.neutral += 1
        } else if (type === "Bad") {
            updatedFeedback.bad += 1
        }
        updatedFeedback.total = updatedFeedback.good + updatedFeedback.neutral + updatedFeedback.bad
        updatedFeedback.positive = Math.round((updatedFeedback.good / updatedFeedback.total) * 100)

        setFeedback(updatedFeedback)
    }
    const resetFeedback = (type) => {
        let updatedFeedback = {...feedback}
        if (type === "Reset"){
            updatedFeedback = {
                good:0,
                neutral:0,
                bad:0,
                total:0,
                positive:0
            }
        }
        setFeedback(updatedFeedback)
    }

    return (
        <div>
            
            <button onClick={() => handleClick("Good")}>Good</button>
            <button onClick={() => handleClick("Neutral")}>Neutral</button>
            <button onClick={() => handleClick("Bad")}>Bad</button>
            {feedback.total > 0 && <button onClick={() => resetFeedback("Reset")}>Reset</button>}
             
            <Feedback data={feedback} />
        </div>
    )
}

export default OptionsBtn