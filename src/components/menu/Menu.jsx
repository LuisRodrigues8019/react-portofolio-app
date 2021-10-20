import "./menu.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#certifications">Certifications</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
                </li>    
                
            </ul>
            <div className="iconsBar">
            <a target="_blank" without rel="noreferrer" href="https://github.com/LuisRodrigues8019" className="a1"><GitHubIcon className="iconsBar"  /></a>
            <a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/luis-rodrigues-da-silva/" className="a1"> <LinkedInIcon className="iconsBar" /></a>
            <a href="" className="a1">  <InstagramIcon className="iconsBar" /></a>
            </div>
            
        </div>
    )
}
