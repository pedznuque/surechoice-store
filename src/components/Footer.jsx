import React from "react";
import "../style/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content one">
        <div className="row one">
          <div className="title">
            <h2>DON'T MISS OUT!</h2>
            <p>is simply dummy text of the printing and typesetting</p>
          </div>

          <div className="form_container">
            <form action="">
              <div className="email_container">
                <label>NAME:</label>
                <input type="text" />
              </div>
              <div className="birthday_container">
                <label>EMAIL ADDRESS:</label>
                <input type="text" />
              </div>
            </form>
            <div className="sign_up_button">SIGN UP</div>
          </div>
        </div>
        <div className="row two">
          <div className="link_container one">
            <h3>OUR COMPANY</h3>

            <li>ABOUT US</li>
            <li>OUR PARTNERS</li>
            <li>CERTIFICATES</li>
            <li>TERMS AND CONDITION</li>
          </div>

          <div className="link_container two">
            <h3>CUSTOMER SUPPORT</h3>

            <h4>CONTACTS</h4>
            <div className="social_media_container">
              <div className="item">
                <a href="">
                  <BsFacebook />
                </a>
              </div>
              <div className="item">
                <a href="">
                  <BsTwitterX />
                </a>
              </div>
              <div className="item">
                <a href="">
                  <BsInstagram />
                </a>
              </div>
              <div className="item">
                <a href="">
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <div className="email_us_button">EMAIL US</div>
          </div>
        </div>
        <div className="row three">
          <div className="link_container">
            <div className="title">
              <h3>QUICK LINKS</h3>
            </div>
            <div className="item_container">
              <div className="item_row one">
                <li>HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
                <li>CONTACTS</li>
              </div>
              <div className="item_row two">
                <li>CART</li>
                <li>LOG-IN</li>
                <li>CATEGORIES</li>
                <li>PRODUCTS</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_content two">
      
        <a href="">PRIVACY POLICY</a>
        <p>&copy; 2025 COPYRIGHTS. ALL RIGHTS RESERVES</p>
        <a href="">TERMS OF SERVICE</a>
      </div>
    </div>
  );
}

export default Footer;
