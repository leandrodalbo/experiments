import { useEffect, useState } from "react";

export const ShowHideTimer = ({ show }) =>
  show ? <Timer /> : <p>Timer is off</p>;

const Timer = () => {
  const [time, setTime] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime === 0 ? 0 : --prevTime));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <p>{time}</p>
    </section>
  );
};

export default Timer;
