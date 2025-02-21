// Time.js
import { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const timeString = currentTime.toLocaleTimeString(); // Get time only (HH:MM:SS)

  return (
    <div>
      <h2>{timeString}</h2> {/* Display only the time */}
    </div>
  );
};

export default Time;
