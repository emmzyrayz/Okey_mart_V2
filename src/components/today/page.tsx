'use client'
import React, {useState, useEffect, useRef} from "react";
import "./today.css";
import Image from "next/image";
import Gamepad from "../../assets/img/products/gamepad.png";
import Keyboard from "../../assets/img/products/keyboard.png";
import Chair from "../../assets/img/products/chair.png";
import Monitor from "../../assets/img/products/monitor.png";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaRegStar,
  FaRegHeart,
  FaRegEye,
  FaStarHalf,
} from "react-icons/fa6";

export default function Today() {
  // Set the end date here (e.g., Dec 31, 2024)
  const endDate = new Date("2024-09-22T23:59:59").getTime();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Check if the countdown is over
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [endDate]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({left: -200, behavior: "smooth"});
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({left: 200, behavior: "smooth"});
    }
  };


  return (
    <div className="today_section w-full flex flex-col">
      <div className="today_top flex flex-row items-center gap-2">
        <div className="today_red"></div>
        <h2>Today's</h2>
      </div>
      <div className="today_header flex flex-row w-full">
        <div className="left flex flex-row">
          <span className="title">Flash Sales</span>
          <div className="sale-count flex flex-row items-center">
            <div className="day-count">
              <span className="title">Days</span>
              <span className="count">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </span>
            </div>
            <span className="stylable-semicolon">:</span>
            <div className="hour-count">
              <span className="title">Hours</span>
              <span className="count">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </span>
            </div>
            <span className="stylable-semicolon">:</span>
            <div className="minute-count">
              <span className="title">Minutes</span>
              <span className="count">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </span>
            </div>
            <span className="stylable-semicolon">:</span>
            <div className="seconds-count">
              <span className="title">Seconds</span>
              <span className="count">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </span>
            </div>
          </div>
        </div>
        <div className="right flex flex-row">
          <div
            className="icons items-center justify-center"
            onClick={scrollLeft}
          >
            <FaArrowLeft className="icon" />
          </div>
          <div
            className="icons items-center justify-center"
            onClick={scrollRight}
          >
            <FaArrowRight className="icon" />
          </div>
        </div>
      </div>
      <div className="today_product flex flex-row overflow-x-auto mb-8" ref={scrollContainerRef}>
        <div className="product_item">
          <div className="product_image">
            <span className="discount">-40%</span>
            <Image alt="product 1" width={200} height={300} src={Gamepad} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">HAVIT HV-G92 Gampad</div>
            <div className="product_price">
              <div className="dscount_price">$120</div>
              <div className="actual_price">$160</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
                <FaRegStar className="fa-star" />
              </div>
              <div className="rating_number">(88)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-35%</span>
            <Image alt="product 2" width={200} height={300} src={Keyboard} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">AK-900 Wired Keyboard</div>
            <div className="product_price">
              <div className="dscount_price">$960</div>
              <div className="actual_price">$1160</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
              </div>
              <div className="rating_number">(75)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-30%</span>
            <Image alt="product 2" width={200} height={300} src={Monitor} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">IPS LCD Gaming Monitor</div>
            <div className="product_price">
              <div className="dscount_price">$370</div>
              <div className="actual_price">$400</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
              </div>
              <div className="rating_number">(99)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-25%</span>
            <Image alt="product 2" width={200} height={300} src={Chair} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">S-Series Comfort Chair</div>
            <div className="product_price">
              <div className="dscount_price">$375</div>
              <div className="actual_price">$400</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
                <FaRegStar className="fa-star" />
              </div>
              <div className="rating_number">(99)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-25%</span>
            <Image alt="product 2" width={200} height={300} src={Chair} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">S-Series Comfort Chair</div>
            <div className="product_price">
              <div className="dscount_price">$375</div>
              <div className="actual_price">$400</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
                <FaRegStar className="fa-star" />
              </div>
              <div className="rating_number">(99)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-25%</span>
            <Image alt="product 2" width={200} height={300} src={Chair} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">S-Series Comfort Chair</div>
            <div className="product_price">
              <div className="dscount_price">$375</div>
              <div className="actual_price">$400</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
                <FaRegStar className="fa-star" />
              </div>
              <div className="rating_number">(99)</div>
            </div>
          </div>
        </div>

        <div className="product_item">
          <div className="product_image">
            <span className="discount">-25%</span>
            <Image alt="product 2" width={200} height={300} src={Chair} />
            <div className="product_icons">
              <div className="icon-heart">
                <FaRegHeart className="fa" />
              </div>
              <div className="icon-eye">
                <FaRegEye className="fa" />
              </div>
            </div>
            <div className="product_btn">
              <span>Add To Cart</span>
            </div>
          </div>
          <div className="product_detail">
            <div className="product_name">S-Series Comfort Chair</div>
            <div className="product_price">
              <div className="dscount_price">$375</div>
              <div className="actual_price">$400</div>
            </div>
            <div className="rating">
              <div className="rating_icon flex flex-row items-center">
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <FaStar className="fa-star" />
                <div className="half-star-container">
                  <FaStarHalf className="fa-star" />
                  <FaRegStar className="half-fill" />
                </div>
                <FaRegStar className="fa-star" />
              </div>
              <div className="rating_number">(99)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="today_btn flex items-center justify-center">
        <span>View All Products</span>
      </div>
      <hr />
    </div>
  );
}
