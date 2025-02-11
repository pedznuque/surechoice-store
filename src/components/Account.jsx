import React from "react";
import "../style/Account.css";
import ThirdNAvBar from "./ThirdNAvBar";
import { RiSettings3Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuWallet } from "react-icons/lu";
import { PiPackageBold } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LuFolderHeart } from "react-icons/lu";

import { RiCoupon3Line } from "react-icons/ri";

const Account = () => {
  return (
    <div className="account">
      <div className="third_navbar_container">
        <ThirdNAvBar />
      </div>

      <div className="account_content_container_overflow">
        <div className="account_content_container">
          <div className="profile_name_container">
            <div className="profile_picture_container">
              <div className="profile_picture_circle"></div>
            </div>
            <div className="details_container">
              <div className="child one">
                <p>Uzumaki Naruto</p>
              </div>
              <div className="child two">
                <p>Followers 200</p> <p>Following 23</p>
              </div>
            </div>
          </div>

          <div className="my_orders_container">
            <div className="my_orders_title">
              <p>MY ORDERS</p> <p>VIEW ALL ORDERS</p>
            </div>
            <div className="order_icons_container">
              <div className="icon">
                <LuWallet />
                <p>To Pay</p>
              </div>
              <div className="icon">
                <PiPackageBold />
                <p>To Ship</p>
              </div>
              <div className="icon">
                <MdOutlineLocalShipping />
                <p>To Receive</p>
              </div>
              <div className="icon">
                <MdOutlineRateReview />
                <p>To Review</p>
              </div>
            </div>
          </div>

          <div className="history_coupon_dashboard">
            <div className="history_coupon_icon_container">
              <div className="icon">
                <MdOutlineWorkHistory />
                <p>History</p>
              </div>
              <div className="icon">
                <LuFolderHeart />
                <p>Whislist</p>
              </div>
              <div className="icon">
                <RiCoupon3Line />
                <p>Coupon</p>
              </div>
            </div>
          </div>

          <div className="account_support_container">
            <div className="support_title">
              <p>SUPPORT</p>
            </div>
            <div className="support_content_container">
              <div className="support_content account_setting_container">
                <RiSettings3Line />
                <p>Account Settings</p>
              </div>
              <div className="support_content message_support_container">
                <MdSupportAgent />
                <p>Message Support</p>
              </div>
              <div className="support_content help_center_container">
                <IoIosHelpCircleOutline />
                <p>Help Centre</p>
              </div>


              <div className="support_content log_out_button"><p>LOG OUT</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
