import { useState, useEffect } from "react";
import dayjs from "dayjs";

const Clock = () => {
  const [time, setTime] = useState(dayjs());
  const [timeFlag, setTimeFlag] = useState(false);
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time.add(1, "second"));
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);
  const timeUpdate = () => {
    setTimeFlag(true);
  };
  const onSubmit = () => {
    setTimeFlag(false);
    if (timeText.length !== 8)
      return alert("Please enter time in HH:MM:SS format");
    const timeValue = timeText.split(":");
    setTime(
      dayjs()
        .set("hour", +timeValue[0])
        .set("minute", +timeValue[1])
        .set("second", +timeValue[2])
    );
    setTimeText("");
  };
  return (
    <div>
      <h1>Time Should be update in HH:MM:SS Format</h1>
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${time.get("hour") * 30}deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${time.get("minute") * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${time.get("second") * 6}deg)`,
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
        {!timeFlag && (
          <div className="display" onClick={timeUpdate}>
            {`${time.get("hour")}: ${time.get("minute")}: ${time.get(
              "second"
            )}`}
          </div>
        )}
        {timeFlag && (
          <div>
            <input
              className="display"
              type="text"
              value={timeText}
              onChange={(e) => setTimeText(e.target.value)}
            />
            <button onClick={onSubmit}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
