import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./Mid.css";
import Categories from "../Categories/Categories";
import PagPlaylist from "../pages/PagPlaylist";
import { SearchTrack } from "../Search/SearchTrack";
import Login from "../Login/Login";

export default function Mid() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("loggedInUser");
    if (userFromStorage) {
      setLoggedInUser(userFromStorage);
    }
  }, []);

  const handleLogin = (username) => {
    setLoggedInUser(username);
    localStorage.setItem("loggedInUser", username);
  };

  return (
    <div className="mid">
      <div className="upperNav">
        {loggedInUser ? (
          <p>Welcome, {loggedInUser}!</p>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
      <div className="midContent">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/search" element={<SearchTrack />}>
            Search
          </Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" element={<PagPlaylist />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </div>
  );
}
