import React from "react";
import "../style/NavBar.css";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi";
import { IoMdTrendingUp } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const [bottomBar, setBottomBar] = useState(false);

  const ProfileIcon = ({ size = 50, color = "blue" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="4" fill={color} />
      <path
        d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"
        fill={color}
      />
    </svg>
  );


  useEffect(() => {
    // Browser detection logic
    const userAgent = navigator.userAgent;

    if (
      userAgent.includes("Firefox") ||
      userAgent.includes("Edg") ||
      userAgent.includes("Chrome")
    ) {
      setBottomBar(true);
    } else {
      setBottomBar(false); // Safari and Opera fall here
    }
  }, []);

  return (
    <>
      <nav className={bottomBar && "bottom"}>
        <div className="screen_limiter">
          <div className="navAction_limiter">
            <NavLink to="/" className="navAction one">
              <GrHomeRounded />

              <p>Home</p>
            </NavLink>
            <NavLink to="likes">
              <HiOutlineHeart />

              <p>Likes</p>
            </NavLink>
            <NavLink to="trends">
            <MdOutlineLeaderboard />

              <p>Trends</p>
            </NavLink>
            <NavLink to="cart">
              <LuShoppingCart />

              <p>Cart</p>
            </NavLink>
            <NavLink to="account">
            <MdOutlineAccountCircle />

              <p>Account</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
