import React from "react";
import "../style/PromoBanner.css";

function PromoBanner() {
  return (
    <div className="promo_banner">
      <div className="content_container">
        <div className="currency">USD</div>
        <div className="promo">Free shipping on selected products.</div>
        <div className="support">Support</div>
      </div>
    </div>
  );
}

export default PromoBanner;
