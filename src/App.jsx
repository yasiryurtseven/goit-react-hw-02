import { useState, useEffect} from 'react'
import './App.css'
import Description  from './components/Description/Description'
import Options from './components/Options/Options'
import Notification  from './components/Notification/Notification'
import Feedback from './components/Feedback/Feedback'

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem("feedback-data");
    return savedData !== null ? JSON.parse(savedData) : {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(()=> {
    localStorage.setItem("feedback-data", JSON.stringify(feedback))
  }, [feedback])
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback)* 100) : 0;

  const updatedFeedback = (feedbackType) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }))
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })  
  };
  return (
    <>
      <Description />
      <Options  onUpdate = {updatedFeedback} onReset={resetFeedback} total={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback data={feedback} total={totalFeedback} positive={positivePercentage} />
      ): (
        <Notification />
      )}

    </>
  );
};

export default App
