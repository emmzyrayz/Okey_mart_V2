'use client'
import React, {useState, useEffect} from "react";
import './random.css';
import Image from 'next/image';
import Jbl from '../../assets/img/products/boombox.png';

export default function Random() {
    const [timeLeft, setTimeLeft] = useState({
      hours: 23,
      minutes: 59,
      seconds: 59,
    });

    useEffect(() => {
      // Create the interval to update every second
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const {hours, minutes, seconds} = prevTime;

          // Update seconds
          if (seconds > 0) {
            return {...prevTime, seconds: seconds - 1};
          }
          // When seconds reach 0, reduce the minute and reset seconds
          else if (minutes > 0) {
            return {hours, minutes: minutes - 1, seconds: 59};
          }
          // When minutes reach 0, reduce the hour and reset minutes and seconds
          else if (hours > 0) {
            return {hours: hours - 1, minutes: 59, seconds: 59};
          }
          // Stop the countdown when time is over
          else {
            clearInterval(interval);
            return {hours: 0, minutes: 0, seconds: 0};
          }
        });
      }, 1000);

      // Clean up the interval when component unmounts
      return () => clearInterval(interval);
    }, []);


    return (
      <div className="random_section flex flex-row items-center justify-around relative">
        <div className="random_text flex flex-col items-start justify-center gap-4 w-2/4">
          <h2>categories</h2>
          <span className="title">Enhance Your Music Experience</span>
          <div className="random_time flex flex-row gap-3">
            <div className="random_hr">
              <span className="digit">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="time">Hours</span>
            </div>
            <div className="random_minutes">
              <span className="digit">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="time">Minutes</span>
            </div>
            <div className="random_seconds">
              <span className="digit">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="time">Seconds</span>
            </div>
          </div>
          <div className="random_btn flex items-center justify-center">
            <span>Buy Now</span>
          </div>
        </div>
        <div className="random_image flex items-center justify-center relative w-2/4 ">
          <Image src={Jbl} width={500} height={300} alt="product 1" />
        </div>
      </div>
    );
}