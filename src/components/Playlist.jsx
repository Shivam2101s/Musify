import { useEffect, useState } from "react";
import "./Playlist.css";

export const Playlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (e) => {
    let value = e.target.value;
    console.log("Filter:", value);
    let playlist = JSON.parse(localStorage.getItem("musify_playlist"));
    let filteredData = [];
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].artists.split(" ").includes(value)) {
        filteredData.push(playlist[i]);
      }
    }
    console.log("new:", filteredData);
    setData(filteredData);
  };

  const getData = () => {
    let playlist = JSON.parse(localStorage.getItem("musify_playlist"));
    console.log("play:", playlist);
    setData(playlist);
  };
  return (
    <div id="playlist_main">
      <h1 id="playlist_head">My Playlist</h1>
      <div id="filterDiv">
        <select name="" id="filterByArtist" onChange={handleFilter}>
          <option hidden>Filter By Artist</option>
          <option value="Zafar,">Ali Zafar</option>
          <option value="Amjad">Amjad Sabri</option>
          <option value="Asim">Asim Azhar</option>
          <option value="Atif">Atif Aslam</option>
          <option value="Gul">Gul Panrra</option>
          <option value="Harshadeep">Harshadeep Kaur</option>
          <option value="Kashif">Kashif Ali</option>
          <option value="Momina">Momina Mustehsan</option>
          <option value="Nabeel">Nabeel Shaukat Ali</option>
          <option value="Noori">Noori</option>
          <option value="Rachel">Rachel Viccaji</option>
          <option value="Rahat">Rahat Fateh Ali Khan</option>
          <option value="Sara">Sara Haider</option>
        </select>
      </div>
      <div id="playlist_sec_div">
        {data.map((e, i) => (
          <div key={i} className="playlist_song_div">
            <img className="playlist_img" src={e.cover_image} alt="" />
            <h2 className="playlist_song_name">{e.song}</h2>
            <p className="playlist_song_artist">
              <b>Artists : </b> {e.artists}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
