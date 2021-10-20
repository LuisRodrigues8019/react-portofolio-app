import "./topbar.scss"
import {Mail} from "@material-ui/icons"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';






export default function Topbar({ menuOpen,setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <img src="assets/avatar.svg" className="avatar"/>
                    <a href="#intro" className="logo">L.R.</a>
                    <div className="itemContainer">
                    <a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019" className="a1"><GitHubIcon className="icon"  /></a>
                    <a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/luis-rodrigues-da-silva/" className="a1"> <LinkedInIcon className="icon" /></a>
                    <a href="" className="a1">  <InstagramIcon className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon2" />
                        <span>rodriguesdasilvaluis@gmail.com</span>
                    </div>
                    
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
