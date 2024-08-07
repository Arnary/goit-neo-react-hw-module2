import { useState, useEffect } from "react";
import Description from "./Description/Description"
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback]);

  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setFeedback({
          ...feedback,
          good: feedback.good + 1
        });
        break;
      case 'neutral':
        setFeedback({
          ...feedback,
          neutral: feedback.neutral + 1
        });
        break;
      case 'bad':
        setFeedback({
          ...feedback,
          bad: feedback.bad + 1
        });
        break;
      case 'reset': 
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0
        })
    };
  }; 

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}/>
      {totalFeedback > 0 && <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback }
      />}
      
      {totalFeedback === 0 && <Notification />}
      

    </>
  );
};


export default App;