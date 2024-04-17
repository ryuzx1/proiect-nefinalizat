import "./Playlists.css";
import { ReactComponent as PlayIcon } from "../../svgs/playIcon.svg";
import { Link } from "react-router-dom";
import { dataPlaylist } from "../../datas/dataPlaylist";

export default function Playlists(props) {
  const matchedPlaylist = dataPlaylist[0].filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className="cardsWrapInner">
      {matchedPlaylist.map((playlist, id) => (
        <Link
          to={"/playlist/" + playlist.id}
          style={{ textDecoration: "none" }}
        >
          <div className="card" key={id}>
            <div className="cardImage">
              <img href="#ttt" src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span className="subTextSmall">{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
