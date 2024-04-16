import Playlists from "../Playlists/Playlists";
import "./Categories.css";

const dataCategories = [
  {
    id: 1,
    name: "Focus",
    subtext: "Music to help you concentrate",
  },
  {
    id: 2,
    name: "Mood",
    subtext: "Playlists to match your mood",
  },
  {
    id: 3,
    name: "Sountrack your home",
    subtext: " ",
  },
  {
    id: 4,
    name: "Kick this back this Sunday...",
    subtext: " ",
  },
];

export default function Categories() {
  return (
    <div>
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          {/* <span className="seeAll">SEE ALL</span> */}
          <p className="subText">{category.subtext}.</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  );
}
