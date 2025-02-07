import React, { useState, useCallback } from "react";
import "../style/Store.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillFunnelFill } from "react-icons/bs";




function Store() {



  const [ toggleFilter, setToggleFilter ] = useState(false)



  return (
    <div className="store">
      <div className="store_content">
        <div className={`row one ${toggleFilter && 'toggledFilter'}`}>
          <div className={`filter_container ${toggleFilter && 'toggledFilter'}`}>
            <div className="title">FILTERS</div>
            <div className="checker_container">
              <p>CATEGORIES</p>
              <div className="boxes"></div>
            </div>
            <div className="checker_container">
              <p>PRICE</p>
              <div className="boxes"></div>
            </div>
            <div className="checker_container">
              <p>COLOR</p>
              <div className="boxes"></div>
            </div>
          </div>
        </div>
        <div className="row two">
          <div className="search_container">
            <div className="filter_toggle_container" onClick={() => setToggleFilter(!toggleFilter)}><BsFillFunnelFill />
            </div>
            <div className="search_bar">
              <div className="input">
                <input type="text" />
              </div>
              <div className="submit">
                <FaMagnifyingGlass />
              </div>
            </div>
          </div>
          <div className="item_container">
            <div className="placeholder_container">
              <div className="placeholder_wrapper">
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
                <div className="placeholder">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row three"></div>
      </div>
    </div>
  );
}

export default Store;
