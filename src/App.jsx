import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {Home} from "./components/Home";
import {Playlist} from "./components/Playlist";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
