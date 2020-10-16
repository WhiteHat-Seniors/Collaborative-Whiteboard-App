import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  function func() {}
  return (
    <div className="header">
      <label
        className="checkBtn"
        onClick={() => {
          const tags = document.getElementsByClassName("tags");
          if (tags[0].style.display === "") {
            tags[0].style.display = "block"; //using js function for slide down effect of navbar
            tags[1].style.display = "block";
            tags[2].style.display = "block";
            tags[3].style.display = "block";
          } else {
            tags[0].style.display = "";
            tags[1].style.display = "";
            tags[2].style.display = "";
            tags[3].style.display = "";
          }
        }}
      >
        <i class="fas fa-bars"></i>
      </label>

      <div className="headerLink Hide">
        {" "}
        {/*creating a div for navbar*/}
        <ul>
          <li className="tags">
            <Link to={props.onelink}>{props.one}</Link>
          </li>
          <li className="tags">
            <Link to={props.twolink}>{props.two}</Link>
          </li>
          <li className="tags">
            <Link to="/collaborate">{props.three}</Link>
          </li>
        </ul>
      </div>

      <div className="headerLog Hide">
        <ul>
          <li className="tags">
            <Link to={props.fourlink}>{props.four}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
