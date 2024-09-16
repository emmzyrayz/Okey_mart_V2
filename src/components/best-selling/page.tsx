import { FaRegEye, FaRegHeart, FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import Image from 'next/image';
import './best-selling.css';
import Hoodie from '../../assets/img/products/pink-hoodie.png';
import Bag from "../../assets/img/products/gucci-bag.png";
import Fan from "../../assets/img/products/cooling-fan.png";
import Shelf from "../../assets/img/products/shelf.png";

export const BestSelling = () => {
    return (
      <div className="best_section">
        <div className="best_top flex flex-row items-center gap-2">
          <div className="best_red"></div>
          <h2>Category</h2>
        </div>
        <div className="best_header flex flex-row w-full">
          <div className="best-title">
            <span>Best Selling Products</span>
          </div>
          <div className="best_btn flex flex-row items-center justify-center">
            <span>View All</span>
          </div>
        </div>
        <div className="best_product flex flex-row overflow-x-auto">
          <div className="product_item">
            <div className="product_image">
              <Image alt="product 1" width={200} height={300} src={Hoodie} />
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
              <div className="product_name">The north coat</div>
              <div className="product_price">
                <div className="dscount_price">$260</div>
                <div className="actual_price">$360</div>
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
              <Image alt="product 1" width={200} height={300} src={Bag} />
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
              <div className="product_name">Gucci duffle bag</div>
              <div className="product_price">
                <div className="dscount_price">$960</div>
                <div className="actual_price">$1160</div>
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
              <Image alt="product 1" width={200} height={300} src={Fan} />
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
              <div className="product_name">RGB liquid CPU Cooler</div>
              <div className="product_price">
                <div className="dscount_price">$160</div>
                <div className="actual_price">$170</div>
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
              <Image alt="product 1" width={200} height={300} src={Shelf} />
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
              <div className="product_name">Small BookSelf</div>
              <div className="product_price">
                <div className="dscount_price">$360</div>
                <div className="actual_price">$460</div>
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
        </div>
        <hr />
      </div>
    );
} 