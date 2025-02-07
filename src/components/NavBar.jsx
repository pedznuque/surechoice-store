import React from "react";
import "../style/NavBar.css";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { useState } from "react";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={toggle && "toggled"}>
        <div className="content_container">
          <div className="content one">
            <div className="brand_name">SureCHOICE</div>
            <span onClick={() => setToggle(!toggle)}>
              <GiHamburgerMenu />
            </span>
          </div>
          <div className={`content two ${toggle && "toggled"}`}>
            <NavLink to="/" onClick={() => setToggle(!toggle)} >HOME</NavLink>
            <NavLink to="/store" onClick={() => setToggle(!toggle)} >STORE</NavLink>
            <NavLink to="/about" onClick={() => setToggle(!toggle)} >ABOUT US</NavLink>
            <NavLink to="/contacts" onClick={() => setToggle(!toggle)}>CONTACTS</NavLink>
          </div>
          <div className={`content three ${toggle && "toggled"}`}>
            <div className="icon">
              <abbr title="Cart">
                <FiShoppingBag />
              </abbr>
              <span>CART</span>
            </div>
            <div className="profile_container">
              <span><IoPersonCircleOutline /></span>
              PROFILE
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
