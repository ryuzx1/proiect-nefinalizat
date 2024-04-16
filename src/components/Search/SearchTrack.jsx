import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchTrack.css";

export function SearchTrack() {
  const CLIENT_ID = "4e4f75fc8e3c4851983d1c38b2b43593";
  const REDIRECT_URI = "http://localhost:3000/search";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });

    setTracks(data.tracks.items);
  };

  const renderTracks = () => {
    return tracks.map((track) => (
      <div key={track.id}>
        {track ? (
          <img
            width={"200px"}
            height={"200px"}
            src={track.album.images[1].url}
            alt=""
          />
        ) : (
          <div>No Image</div>
        )}
        {track.name}
      </div>
    ));
  };

  console.log(tracks);

  const inputs = document.querySelectorAll("input");

  inputs.forEach((el) => {
    el.addEventListener("blur", (e) => {
      if (e.target.value) {
        e.target.classList.add("dirty");
      } else {
        e.target.classList.remove("dirty");
      }
    });
  });

  return (
    <div className="searchAlbum">
      <div className="cox">
        <header className="searchAlbum-header">
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </header>
        <div className="form__group field">
          <form onSubmit={searchArtists}>
            <input
              type="text"
              className="form__field"
              required
              placeholder="Name"
              name="name"
              id="name"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <label for="name" class="form__label">
              Song Name
            </label>
            {/* <button type={"submit"}>Search</button> */}
          </form>
          {renderTracks()}
        </div>
      </div>
    </div>
  );
}
