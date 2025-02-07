import React from "react";
import "../style/Home.css";
import { BiSolidCategory } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcShipped } from "react-icons/fc";
import Footer from "./Footer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Home() {
  return (
    <div className="home">
      <div className="home_content_container">
        <div className="section one">
          <div className="featured">
            <img
              src="summer_inscription_glasses_172220_2048x1152.jpg"
              alt="1"
            />
            <div className="get_started_button">
              Explore now <FaArrowRightLong />
            </div>
            || <Skeleton />
          </div>
        </div>
        <div className="section two">
          <div className="categories_container">
            <div className="categories_title">
              <p className="title">
                CATEGORIES <BiSolidCategory />
              </p>

              <p className="description">
                Browse through our diverse selection of products designed to
                meet all your needs. From everyday essentials to unique finds,
                discover everything you’re looking for and more. Find your
                perfect match today!
              </p>
            </div>
            <div className="categories_catalog">
              <div className="catalog one">
                <div className="image_container"></div>
                <div className="catalog_title_container">
                  <p>Lorem</p>
                </div>
              </div>
              <div className="catalog two">
                <div className="image_container"></div>
                <div className="catalog_title_container">
                  <p>Lorem</p>
                </div>
              </div>
              <div className="catalog three">
                <div className="image_container"></div>
                <div className="catalog_title_container">
                  <p>Lorem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section three">
          <div className="free_shipping_container">
            <div className="title_container">
              <p>Enjoy Free Shipping Worldwide!</p>
            </div>
            <div className="placeholders_container">
              <div className="placeholder">
                <div className="icon">
                  <img src="shipped.png" alt="" />
                </div>
                <div className="description">
                  <p>Free Shipping on All Orders!</p>
                </div>
              </div>
              <div className="placeholder">
                <div className="icon">
                  <img src="free.png" alt="" />
                </div>
                <div className="description">
                  <p>Worldwide free shipping no minimum required!</p>
                </div>
              </div>
              <div className="placeholder">
                <div className="icon">
                  <img src="fast-delivery.png" alt="" />
                </div>
                <div className="description">
                  <p>
                    Expect your order within 10–15 days for international
                    shipping.
                  </p>
                </div>
              </div>
              <div className="placeholder">
                <div className="icon">
                  <img src="shopping-bag.png" alt="" />
                </div>
                <div className="description">
                  <p>Order Today and Save on Shipping Costs!</p>
                </div>
              </div>
              <div className="placeholder">
                <div className="icon">
                  <img src="cargo-insurance.png" alt="" />
                </div>
                <div className="description">
                  <p>
                    Your order will be carefully packaged and shipped with love.
                  </p>
                </div>
              </div>
              <div className="placeholder">
                <div className="icon">
                  <img src="return-on-investment.png" alt="" />
                </div>
                <div className="description">
                  <p>Hassle-Free Returns for Damaged Goods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section four">
          <div className="why_us_container">
            <div className="title">
              <p>WHY US?</p>
            </div>
            <div className="introduction">
              <p>
                We’re committed to offering top-quality products, exceptional
                customer service, and a seamless shopping experience.
              </p>
            </div>
            <div className="usp">
              <div className="usp_catalog one">
                <div className="image">
                  <img
                    src="magnifier_magnification_book_235426_1280x720.jpg"
                    alt=""
                  />
                </div>
                <div className="description">
                  <p className="title">QUALITY</p>
                  <p>
                    Only the best – we handpick every item for its quality and
                    durability.
                  </p>
                </div>
              </div>
              <div className="usp_catalog two">
                <div className="image">
                  <img src="money_dollars_bill_216864_1280x720.jpg" alt="" />
                </div>
                <div className="description">
                  <p className="title">PRICE</p>
                  <p>Affordable pricing without compromising on quality.</p>
                </div>
              </div>
              <div className="usp_catalog three">
                <div className="image">
                  <img
                    src="clock_alarm_clock_time_222141_1280x720.jpg"
                    alt=""
                  />
                </div>
                <div className="description">
                  <p className="title">CONVENIENCE</p>
                  <p>
                    Easy navigation, fast checkout, and hassle-free returns make
                    shopping with us a breeze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
