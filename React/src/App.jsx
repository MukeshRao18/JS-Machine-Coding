import React, { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(document.documentElement);
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <ProgressBar progress={progress} />
      <h1>Scroll down to see the progress bar in action</h1>
    </div>
  );
};

export default App;
