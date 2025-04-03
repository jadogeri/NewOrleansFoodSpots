import React, { useState, useEffect, useRef } from 'react';

function Timer({ duration, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current);
          onComplete();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId.current); // Cleanup on unmount
  }, [duration, onComplete]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return <div>Time remaining: {formatTime(timeLeft)}</div>;
}

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [timerDone, setTimerDone] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleTimerComplete = () => {
      setTimerDone(true);
      alert("Timer completed!");
    };

    return (
        <div>
            {!loggedIn ? (
                <button onClick={handleLogin}>Log In</button>
            ) : (
                <>
                    {!timerDone ? (
                        <Timer duration={10} onComplete={handleTimerComplete} />
                    ) : (
                        <p>Timer is finished.</p>
                    )}
                </>
            )}
        </div>
    );
}

export default App;