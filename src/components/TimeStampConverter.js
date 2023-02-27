import React, { useState, useEffect } from "react";
import styles from "./TimeStamp.module.css";
function TimestampConverter({ timestamp }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const seconds = Math.floor((timestamp - Date.now()) / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    const remainingSeconds = ((seconds % 86400) % 3600) % 60;

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(remainingSeconds);
  };

  return (
    <div className={styles.timestampWrapper}>
      <h2>დასრულებამდე დარჩა</h2>
      <table>
        <thead>
        <tr>
            <th>დღე</th>
            <th>საათი</th>
            <th>წუთი</th>
            <th>წამი</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>{days}</td>
                <td>{hours}</td>
                <td>{minutes}</td>
                <td>{seconds}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimestampConverter;
