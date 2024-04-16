import "./Mid.css";

import Categories from "../Categories/Categories";
import { Routes, Route } from "react-router-dom";
import PagPlaylist from "../pages/PagPlaylist";
import { SearchTrack } from "../Search/SearchTrack";

export default function Mid() {
  return (
    <div className="mid">
      <div className="upperNav">
        <a href="#">Login</a>
      </div>
      <div className="midContent">
        <Routes>
          <Route path="/" element={<Categories />}></Route>
          <Route path="/search" element={<SearchTrack />}>
            Search
          </Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" element={<PagPlaylist />}></Route>
        </Routes>
        {/* <Categories /> */}
      </div>
    </div>
  );
}
