"use client";
import React, {useRef} from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegEye,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import Image from "next/image";
import Gamepad from "../../assets/img/products/gamepad1.png";
import Camera from "../../assets/img/products/camera.png";
import Laptop from "../../assets/img/products/laptop.png";
import Cream from "../../assets/img/products/cream.png";
import Toy from "../../assets/img/products/toy-car.png";
import Clits from "../../assets/img/products/clits.png";
import Jacket from "../../assets/img/products/jacket.png";
import DogFood from "../../assets/img/products/dog-food.png";
import "./show.css";

export default function Show() {
  // Create two separate refs for each grid
  const topGridRef = useRef<HTMLDivElement>(null);
  const bottomGridRef = useRef<HTMLDivElement>(null);

  // Scroll function for the top grid
  const scrollLeftTop = () => {
    if (topGridRef.current) {
      topGridRef.current.scrollBy({left: -200, behavior: "smooth"});
    }
  };

  const scrollRightTop = () => {
    if (topGridRef.current) {
      topGridRef.current.scrollBy({left: 200, behavior: "smooth"});
    }
  };

  // Scroll function for the bottom grid
  const scrollLeftBottom = () => {
    if (bottomGridRef.current) {
      bottomGridRef.current.scrollBy({left: -200, behavior: "smooth"});
    }
  };

  const scrollRightBottom = () => {
    if (bottomGridRef.current) {
      bottomGridRef.current.scrollBy({left: 200, behavior: "smooth"});
    }
  };

  const scrollRight = () => {
    scrollRightTop();
    scrollRightBottom();
  }

  const scrollLeft = () => {
    scrollLeftTop();
    scrollLeftBottom();
  }

  return (
    <div className="show_section w-full flex flex-col">
      <div className="category_top flex flex-row items-center gap-2">
        <div className="category_red"></div>
        <h2>Our Products</h2>
      </div>
      <div className="category_header flex flex-row w-full">
        <div className="header-title">
          <span>Explore Our Products</span>
        </div>
        <div className="header_btn flex flex-row">
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

      <div className="show_grid flex flex-col gap-2 mb-8">
        <div
          className="top_grid flex flex-row overflow-x-auto"
          ref={topGridRef}
        >
          <div className="top_item">
            <div className="product_image">
              <Image alt="product 1" width={200} height={300} src={DogFood} />
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
            <div className="product_detal flex flex-col">
              <h3>Breed Dry Dog Food</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$100</span>
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
                </div>
                <span className="reviews">(35)</span>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <Image alt="product 1" width={200} height={300} src={Camera} />
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
            <div className="product_detal flex flex-col">
              <h3>CANON EOS DSLR Camera</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$380</span>
                <div className="rating">
                  <div className="rating_icon flex flex-row items-center">
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaRegStar className="fa-star" />
                  </div>
                </div>
                <span className="reviews">(95)</span>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <Image alt="product 1" width={200} height={300} src={Laptop} />
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
            <div className="product_detal flex flex-col">
              <h3>ASUS FHD Gaming Laptop</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$700</span>
                <div className="rating">
                  <div className="rating_icon flex flex-row items-center">
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                  </div>
                </div>
                <span className="reviews">(325)</span>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <Image alt="product 1" width={200} height={300} src={Cream} />
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
            <div className="product_detal flex flex-col">
              <h3>Curology Product Set</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$500</span>
                <div className="rating">
                  <div className="rating_icon flex flex-row items-center">
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaRegStar className="fa-star" />
                  </div>
                </div>
                <span className="reviews">(145)</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottom_grid flex flex-row overflow-x-auto"
          ref={bottomGridRef}
        >
          <div className="top_item">
            <div className="product_image">
              <span className="discount">NEW</span>
              <Image alt="product 1" width={200} height={300} src={Toy} />
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
            <div className="product_detal flex flex-col relative">
              <h3>Kids Electric Car</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$960</span>
                <div className="rating">
                  <div className="rating_icon flex flex-row items-center">
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                  </div>
                </div>
                <span className="reviews">(65)</span>
              </div>
              <div className="color-var flex flex-row gap-2 items-center relative">
                <div className="color-item red active"></div>
                <div className="color-item orange"></div>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <span className="discount">NEW</span>
              <Image alt="product 1" width={200} height={300} src={Clits} />
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
            <div className="product_detal flex flex-col relative">
              <h3>Jr. Zoom Soccer Cleats</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$1160</span>
                <div className="rating">
                  <div className="rating_icon flex flex-row items-center">
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                    <FaStar className="fa-star" />
                  </div>
                </div>
                <span className="reviews">(35)</span>
              </div>
              <div className="color-var flex flex-row gap-2 items-center relative">
                <div className="color-item yellow active"></div>
                <div className="color-item orange"></div>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <span className="discount">NEW</span>
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
            <div className="product_detal flex flex-col relative">
              <h3>GP11 Shooter USB Gamepad</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$660</span>
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
                </div>
                <span className="reviews">(55)</span>
              </div>
              <div className="color-var flex flex-row gap-2 items-center relative">
                <div className="color-item black active"></div>
                <div className="color-item orange"></div>
              </div>
            </div>
          </div>

          <div className="top_item">
            <div className="product_image">
              <span className="discount">NEW</span>
              <Image alt="product 1" width={200} height={300} src={Jacket} />
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
            <div className="product_detal flex flex-col relative">
              <h3>Quilted Satin Jacket</h3>
              <div className="info flex flex-row gap-1 items-center">
                <span className="price">$660</span>
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
                </div>
                <span className="reviews">(65)</span>
              </div>
              <div className="color-var flex flex-row gap-2 items-center relative">
                <div className="color-item black active"></div>
                <div className="color-item orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category_btn flex items-center justify-center">
        <span>View All Products</span>
      </div>
    </div>
  );
}
