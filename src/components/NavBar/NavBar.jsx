import "./NavBar.css";
import { ReactComponent as HomeIcon } from "../../svgs/home.svg";
import { ReactComponent as SearchIcon } from "../../svgs/search.svg";
import { ReactComponent as LibraryIcon } from "../../svgs/library.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [isActive1, setActive1] = useState(false);

  const toggleClass1 = () => {
    setActive1(!isActive1);
  };
  const [isActive2, setActive2] = useState(false);

  const toggleClass2 = () => {
    setActive2(!isActive2);
  };

  return (
    <div className="navBar">
      <div className="logo">Logo</div>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={isActive ? "active" : null} onClick={toggleClass}>
            <HomeIcon />
            Home
          </li>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <li className={isActive1 ? "active1" : null} onClick={toggleClass1}>
            <SearchIcon />
            Search
          </li>
        </Link>
        <Link to="/your-library" style={{ textDecoration: "none" }}>
          <li className={isActive2 ? "active2" : null} onClick={toggleClass2}>
            <LibraryIcon />
            Your Library
          </li>
        </Link>
      </ul>
      <div className="cookies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}
