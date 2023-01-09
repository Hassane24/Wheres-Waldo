import { useState } from "react";
const Timer = ({ didGameEnd }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timeFomatter = (value) =>
    ("0" + value).length > 2 ? value : "0" + value;

  const formattedMinutes = timeFomatter(minutes);
  const formattedSeconds = timeFomatter(seconds);

  const timer = () => {
    if (!didGameEnd) {
      if (seconds === 60) {
        setMinutes(minutes + 1);
        return setSeconds(0);
      }
      setSeconds(seconds + 1);
    }
  };
  setTimeout(timer, 1000);

  return (
    <>
      {formattedMinutes}:{formattedSeconds}
    </>
  );
};

export default Timer;
