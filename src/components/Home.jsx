import React from "react";
import "../style/home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const feauturedPhotoSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  var categorySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  var flashDealsSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home">
      <div className="second_navbar_container">
        <div className="second_navbar_container_limiter">
          <div className="brand_name">
            <p>sureCHOICE</p>
          </div>
          <div className="search_bar_container">
            <div className="second_navbar_search_layer">
              <input type="text" />
              <div className="search_icon">
                <FaMagnifyingGlass />
              </div>
            </div>
          </div>
          <div className="notif_mail_icon_container">
            <div className="notif_icon_container">
              <FaRegBell />
            </div>
            <div className="mai_icon_container">
              <MdMailOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="home_content_overflow_container">
        <div className="home_content_container">
          <div className="home_featured_photo_container">
            <Slider {...feauturedPhotoSettings}>
              <div className="home_featured_photo">
                <img src="clock_alarm_clock_time_222141_1280x720.jpg" alt="" />
              </div>
              <div className="home_featured_photo">
                <img
                  src="summer_inscription_glasses_172220_1280x720.jpg"
                  alt=""
                />
              </div>
              <div className="home_featured_photo">
                <img src="business-strategy-success-target-goals.jpg" alt="" />
              </div>
            </Slider>
          </div>

          <div className="home_category_container_limiter">
            <div className="home_category_container">
              <div className="home_category_title_container">
                <p>CATEGORIES</p>
              </div>
              <div className="home_category_item_container">
                <Slider {...categorySettings}>
                  <div className="home_category_item">
                    <div className="item_container">
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                  <div className="home_category_item">
                    <div className="item_container">
                      {" "}
                      <div className="item"></div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="flash_deals_container_limiter">
            <div className="flash_deals_container">
              <div className="flash_deals_title_container">
                <p>FLASH DEALS</p>
              </div>
              <div className="flash_deals_item_container">
                <Slider {...flashDealsSettings}>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      {" "}
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      {" "}
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      {" "}
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flash_deals_item">
                    <div className="item_container">
                      {" "}
                      <div className="item">
                        <div className="item_image_container"></div>
                        <div className="item_details_container">
                          <p>PRICE: 0.00</p>
                          <p>LESS -0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="explore_container_limiter">
            <div className="explore_container">
              <div className="explore_title_container">
                <p>MORE TO EXPLORE</p>
              </div>

              <div className="explore_items_container_overflow">
                <div className="explore_items_container">
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="explore_items">
                    <div className="image_container"></div>
                    <div className="details_container">
                      <p className="title">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                      <div className="price_sold_container">
                        <p className="price">100.00</p>
                        <p className="sold">0 sold</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
