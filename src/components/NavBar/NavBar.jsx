import "./NavBar.css";
import { ReactComponent as HomeIcon } from "../../svgs/home.svg";
import { ReactComponent as SearchIcon } from "../../svgs/search.svg";
import { ReactComponent as LibraryIcon } from "../../svgs/library.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../../svgs/logo.svg";

console.log(Logo);

export function NavBar() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="navBar">
      <div className="logo">
        <Logo />
      </div>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            className={activeTab === "home" ? "active" : null}
            onClick={() => handleTabClick("home")}
          >
            <HomeIcon />
            Home
          </li>
        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <li
            className={activeTab === "search" ? "active" : null}
            onClick={() => handleTabClick("search")}
          >
            <SearchIcon />
            Search
          </li>
        </Link>
        <Link to="/your-library" style={{ textDecoration: "none" }}>
          <li
            className={activeTab === "library" ? "active" : null}
            onClick={() => handleTabClick("library")}
          >
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
