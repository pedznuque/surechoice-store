import React from "react";
import "../style/Contacts.css";
import Footer from "./Footer";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts_content">
        <div className="section one">
          <div className="contact_title">
            <p>CONTACTS</p>
          </div>
          <div className="contact_description">
            <p>
              We’re here to help! At sureCHOICE, we value your questions,
              feedback, and concerns. Whether you need assistance with an order,
              have a product inquiry, or just want to say hello, our team is
              ready to assist you.
            </p>
          </div>

          <div className="why_us_container">
            <div className="content one">
              <img src="customer-service.png" alt="1" />
              <div className="title">
                <p>ORDER SUPPORT</p>
              </div>
              <div className="content_description">
                <p>Need help with an existing order? We’ve got you covered.</p>
              </div>
            </div>
            <div className="content two">
              <img src="unboxing.png" alt="1" />
              <div className="title">
                <p>PRODUCT QUESTION</p>
              </div>
              <div className="content_description">
                <p>Need help with an existing order? We’ve got you covered.</p>
              </div>
            </div>
            <div className="content three">
              <img src="feedback.png" alt="1" />
              <div className="title">
                <p>FEEDBACK</p>
              </div>
              <div className="content_description">
                <p>Need help with an existing order? We’ve got you covered.</p>
              </div>
            </div>
          </div>

          <div className="response_time">
            <p>
              We strive to respond to all inquiries within 24 Hours. Thank you
              for choosing sureCHOICE – your satisfaction is our priority!
            </p>
          </div>

          <div className="cta">
            <p>Your feedback matters to us. Contact us now!</p>
          </div>
        </div>
        <div className="section two">
          <div className="contact_no_container">
            <div className="contact_placeholder">
              <img src="philippines.png" alt="1" />
              <p>+639105827036</p>
            </div>
            <div className="contact_placeholder">
              <img src="whatsapp.png" alt="" /> <p>NOT AVAILABLE</p>
            </div>
            <div className="contact_placeholder">
              <img src="landline.png" alt="" />
              <p>NOT AVAILABLE</p>
            </div>
          </div>
        </div>

        <div className="section three">
          <div className="socmed title">
            <p>VISIT OUR SOCIAL MEDIA</p>
          </div>
          <div className="socmed descriptions">
            <p>
              Lorem lorem ipsum aasjs as s sasasa asas assasa saasas jshsassajs
              shjaha sjwihjww ajhajs aisui{" "}
            </p>
          </div>
          <div className="socmed content">
            <div className="placeholder facebook">
              <img src="pile-3d-facebook-logos.jpg" alt="1" />
              <div className="title_bar">
                <p>FACEBOOK</p>
                <p>VISIT</p>
              </div>
            </div>
            <div className="placeholder instagram">
            <img src="pile-3d-instagram-logos.jpg" alt="1" />
              <div className="title_bar">
                <p>instagram</p>
                <p>VISIT</p>
              </div>
            </div>
            <div className="placeholder twitter">
            <img src="9539259.jpg" alt="1" />
              <div className="title_bar">
                <p>X</p>
                <p>VISIT</p>
              </div>
            </div>
            <div className="placeholder linked">
            <img src="social-media-icons-rendering.jpg" alt="1" />
              <div className="title_bar">
                <p>LINKEDIN</p>
                <p>VISIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
