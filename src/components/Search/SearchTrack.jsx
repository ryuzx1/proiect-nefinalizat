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
      <div className="cardTrack" key={track.id}>
        <img className="card-image" src={track.album.images[1].url} alt="" />
        <div className="card-content">
          <div className="track-name">{track.name}</div>
          <div className="artist-name">{track.artists[0].name}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="searchAlbum">
      <div className="cox">
        <header className="searchAlbum-header">
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Database
            </a>
          ) : (
            <div></div>
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
              spellcheck="false"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <label htmlFor="name" className="form__label">
              Song Name
            </label>
            {/* <button type={"submit"}>Search</button> */}
          </form>

          <div className="cardsWrapSearch">{renderTracks()}</div>
        </div>
      </div>
    </div>
  );
}
