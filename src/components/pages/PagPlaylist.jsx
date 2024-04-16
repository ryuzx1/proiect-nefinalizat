import React from "react";
import "./PagPlaylist.css";
import { ReactComponent as PlayIcon } from "../../svgs/playIcon.svg";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { ReactComponent as NoteIcon } from "../../svgs/note.svg";
import { dataPlaylist } from "../datas/dataPlaylist";
import { dataTracks } from "../datas/dataTracks";
import { useParams } from "react-router-dom";

export default function PagPlaylist() {
  let { id } = useParams();

  id = parseInt(id);

  console.log("ID from params:", id);

  const playlist = dataPlaylist[0].find((item) => item.id === id);

  if (!playlist) {
    console.log("Playlist not found");
    return <div>Playlist not found</div>;
  }

  console.log("Matching Playlist:", playlist);

  // Define an array of playlist names and corresponding category IDs
  const playlistCategories = [
    { name: "Home Playlist", category_id: "home" },
    { name: "Sunday Playlist", category_id: "sunday" },
    { name: "Mood Playlist", category_id: "mood" },
    { name: "Focus Playlist", category_id: "focus" },
  ];

  let filteredTracks = [];

  // Loop through each playlist name and filter tracks
  playlistCategories.forEach((playlistCategory) => {
    for (let i = 1; i <= 3; i++) {
      const playlistName = `${playlistCategory.name} ${i}`;
      const category_id = playlistCategory.category_id;

      filteredTracks = filteredTracks.concat(
        dataTracks.filter(
          (track) =>
            track.category_id === category_id &&
            playlist.name.includes(playlistName)
        )
      );
    }
  });

  console.log("Filtered Tracks:", filteredTracks);

  // Shuffle the filteredTracks array
  const shuffledTracks = filteredTracks.sort(() => Math.random() - 0.5);

  // Get a random number between 8 and 12
  const randomCount = Math.floor(Math.random() * (12 - 8 + 1)) + 8;

  // Slice the shuffled array to get 8 to 12 random tracks
  const slicedTracks = shuffledTracks.slice(0, randomCount);

  // Render the sliced tracks
  const renderedTracks = slicedTracks.map((track) => (
    <ul className="songList">
      <li className="list" key={track.id}>
        <div className="songIcon">
          <NoteIcon className="noteI" />
          <PlayIcon className="playI" />
        </div>
        <div className="songDetails">
          <div>
            <img src={track.link} alt={track.songname} />
            <span className="songName">{track.songname}</span>
          </div>
          <span className="smallText">{track.artist}</span>
        </div>
        <div className="songTime">
          <span>songtime</span>
        </div>
      </li>
    </ul>
  ));

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img src={playlist.img} alt="pic" />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase">Playlist</p>
            <h1 className="ttt">{playlist.name}</h1>

            <p className="smallText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              eos.
            </p>
            <div className="playlistPageDesc">
              <p>Spotify</p>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIconPlaylist">
              <PlayIcon className="playI" />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>
          {renderedTracks}
        </div>
      </div>
    </div>
  );
}
