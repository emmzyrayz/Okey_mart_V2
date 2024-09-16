import './wish.css';
import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiShoppingCart } from 'react-icons/ci';
import GucciBag from '../../assets/img/products/gucci-bag.png';
import CoolFan from "../../assets/img/products/cooling-fan.png";
import Gamepad from "../../assets/img/products/gamepad1.png";
import Jacket from "../../assets/img/products/jacket.png";
import Laptop from "../../assets/img/products/laptop.png";
import Monitor from "../../assets/img/products/monitor.png";
import RedGampad from "../../assets/img/products/gamepad.png";
import Keyboard from "../../assets/img/products/keyboard.png";

export default function WishList() {
    return (
      <div className="wishlist_section flex flex-col items-center w-full h-full">
        <div className="wishlist_container flex flex-col items-center w-full">
          <div className="wish_head flex flex-row w-full items-center justify-between">
            <h2>Wishlist (4)</h2>
            <div className="btn_w flex items-center justify-center">
              Move All To Bag
            </div>
          </div>
          <div className="wish_items flex flex-row items-center overflow-x-auto">
            <div className="wish_item flex flex-col">
              <div className="item_img flex flex-col relative">
                <Image
                  src={GucciBag}
                  alt="Gucci Bag"
                  width={100}
                  className="Image"
                  height={300}
                />
                <div className="discount absolute">-35%</div>
                <span className='bbin'>
                  <RiDeleteBinLine className="bin" />
                </span>
                <span className='ccart flex flex-row items-center justify-center gap-2'>
                  <CiShoppingCart className="cart" /> <span>Add To Cart</span>
                </span>
              </div>
              <div className="item_desc">
                <h3>Gucci duffle Bag</h3>
                <div className="price">
                  <span className="disc_price">$960</span>
                  <span className="act_price">$1160</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlist_foryou"></div>
      </div>
    );
}