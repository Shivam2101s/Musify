import "./Home.css";
import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`
      )
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log("Music Data:", res);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  if (localStorage.getItem("musify_playlist") === null) {
    localStorage.setItem("musify_playlist", JSON.stringify([]));
  }

  const addToPlaylist = (song) => {
    let playlist = JSON.parse(localStorage.getItem("musify_playlist"));
    console.log("song :", song);
    if (playlist.filter((e) => e.song === song.song).length > 0) {
      alert("Song is already in playlist !!");
    } else {
      playlist.push(song);
      alert("Song added to playlist !!");
      localStorage.setItem("musify_playlist", JSON.stringify(playlist));
    }
  };

  const playSong = (e) => {
    console.log("play", e.url);
    var audio = new Audio(`${e.url}`);
    audio.play();
  };

  const pauseSong = (e) => {
      window.location.reload();
  }

  return (
    <div id="home_main">
      {data.map((e, i) => (
        <div
          key={i}
          className="song_div"
          style={{
            backgroundImage: "url(" + `${e.cover_image}` + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="song_info_div">
            <div className="btn_div">
              <button className="fav_btn" onClick={() => addToPlaylist(e)}>
                ♡
              </button>
              <button className="play_btn" onClick={() => playSong(e)}>
                ▷
              </button>
              <button className="pause_btn" onClick={() => pauseSong(e)}>□</button>
            </div>
            <p className="song_name">{e.song}</p>
            <p className="song_artist">
              <marquee>
                {" "}
                <b>Artists : </b>
                {e.artists}
              </marquee>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
