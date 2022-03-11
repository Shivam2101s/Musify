import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () =>{
    return (
        <div id="navbar">
            <img id="logo" src="https://seeklogo.com/images/M/musify-logo-A6AF18BD60-seeklogo.com.png" alt="NA" />
            <div id="navbar_div1">
            <Link className="navbar_link" to={"/"}>Home</Link>  </div>
            <div id="navbar_div2"> <Link className="navbar_link" to={"/playlist"}>My Playlist</Link></div>
            <img id="coke_logo" src="https://cutacut.com/wp-content/uploads/2021/12/Coke-Studio-1200x675.png" alt="" />
        </div>
    )
}