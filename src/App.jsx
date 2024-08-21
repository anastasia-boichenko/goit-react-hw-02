
import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [options, setOptions] = useState(() => {
    const savedOptions = window.localStorage.getItem('options');
    if (savedOptions !== null) {
      return JSON.parse(savedOptions);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const total = options.good + options.neutral + options.bad;
  const positive = options.good + options.neutral;
  const rate = total ? Math.round((positive / total) * 100) : 0;

  const updateFeedback = feedbackType => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  return (
    <>
      <Description />
      <Options
        options={Object.keys(options)}
        updateFeedback={updateFeedback}
        total={total}
        resetFeedback={resetFeedback}
      />
      {total > 0 ? (
        <Feedback options={Object.entries(options)} total={total} rate={rate} />
      ) : (
        <Notification message={'No feedback yet'}/>
      )}
    </>
  );
}

export default App;
