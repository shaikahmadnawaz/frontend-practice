import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time === 0) {
      setTime(10);
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return <div>Time left: {time}</div>;
}
