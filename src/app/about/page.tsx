import './about.css';
import Image from 'next/image';
import AboutB from '../../assets/img/avatar/about_banner.png';
import Action from '@/components/action/page';
import { BiStoreAlt } from 'react-icons/bi';
import { CiDollar } from 'react-icons/ci';
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import DollarBag from "../../assets/img/icons/moneybag.png";
import ShoppingBag from "../../assets/img/icons/shopping.svg";
import WillSmith from '../../assets/img/avatar/willsmith.png';
import EmmaWatson from '../../assets/img/avatar/emmawatson.png';
import TomCruise from '../../assets/img/avatar/tomcruise.png';
import Link from 'next/link';

export default function About() {
    return (
      <div className="about_section">
        <div className="about_top">
          <div className="profile_nav flex flex-row gap-1 items-start justify-start">
            <span className="faint">Home</span>
            <span className="faint">/</span>
            <span className="full">My Account</span>
          </div>
        </div>

        <div className="about_container flex flex-row items-center w-full gap-4">
          <div className="about_text w-1/2 flex flex-col items-start gap-2">
            <h1>Our Story</h1>
            <span className="story gap-2">
              <p>
                Launced in 2015, Exclusive is South Asia's premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </span>
          </div>
          <div className="about_img w-1/2 flex flex-col items-center justify-center">
            <Image src={AboutB} alt="" width={500} height={300} />
          </div>
        </div>

        <div className="about_stats">
          <div className="about_stat">
            <div className="stat_img">
              <BiStoreAlt className="stat_icon" />
            </div>
            <h1>10.5k</h1>
            <div className="stat_desc">Sellers active on our site</div>
          </div>
          <div className="about_stat">
            <div className="stat_img">
              <CiDollar className="stat_icon" />
            </div>
            <h1>33k</h1>
            <div className="stat_desc">Monthly Product Sales</div>
          </div>
          <div className="about_stat">
            <div className="stat_img">
              <Image
                src={ShoppingBag}
                alt=""
                width={60}
                height={60}
                className="stat_icon"
              />
            </div>
            <h1>45.5k</h1>
            <div className="stat_desc">Customers active on our site</div>
          </div>
          <div className="about_stat">
            <div className="stat_img">
              <Image
                src={DollarBag}
                alt=""
                width={60}
                height={60}
                className="stat_icon"
              />
            </div>
            <h1>25k</h1>
            <div className="stat_desc">Annual Gross sales on our site</div>
          </div>
        </div>

        <div className="about_devs_con">
          <div className="about_devs flex flex-row flex-nowrap overflow-auto">
            <div className="about_dev flex flex-col">
              <div className="dev_image">
                <Image
                  src={TomCruise}
                  alt=""
                  width={60}
                  height={60}
                  className="stat_icon"
                />
              </div>
              <div className="dev_desc">
                <h2>Tom Cruise</h2>
                <span className="dev_title">Founder & Chairman</span>
                <div className="dev_links">
                  <Link href="https://www.x.com/tom_cruise-1b1b1">
                    <FaXTwitter className="dev_social" />
                  </Link>

                  <Link href="https://www.instagram.com/tom_cruise-1b1b1">
                    <FaInstagram className="dev_social" />
                  </Link>

                  <Link href="https://www.linkedin.com/tom_cruise-1b1b1">
                    <FaLinkedinIn className="dev_social" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="about_dev flex flex-col">
              <div className="dev_image">
                <Image
                  src={EmmaWatson}
                  alt=""
                  width={60}
                  height={60}
                  className="stat_icon"
                />
              </div>
              <div className="dev_desc">
                <h2>Emma Watson</h2>
                <span className="dev_title">Managing Director</span>
                <div className="dev_links">
                  <Link href="https://www.x.com/Emma_Watson-1b1b1">
                    <FaXTwitter className="dev_social" />
                  </Link>

                  <Link href="https://www.instagram.com/Emma_Watson-1b1b1">
                    <FaInstagram className="dev_social" />
                  </Link>

                  <Link href="https://www.linkedin.com/Emma_Watson-1b1b1">
                    <FaLinkedinIn className="dev_social" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="about_dev flex flex-col">
              <div className="dev_image">
                <Image
                  src={WillSmith}
                  alt=""
                  width={60}
                  height={60}
                  className="stat_icon"
                />
              </div>
              <div className="dev_desc">
                <h2>Will Smith</h2>
                <span className="dev_title">Product Designer</span>
                <div className="dev_links">
                  <Link href="https://www.x.com/Will_Smith-1b1b1">
                    <FaXTwitter className="dev_social" />
                  </Link>

                  <Link href="https://www.instagram.com/Will_Smith-1b1b1">
                    <FaInstagram className="dev_social" />
                  </Link>

                  <Link href="https://www.linkedin.com/Will_Smith-1b1b1">
                    <FaLinkedinIn className="dev_social" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Action />
      </div>
    );
}