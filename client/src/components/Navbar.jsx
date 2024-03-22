import "./Navbar.css";
import HomeIcon from '../assets/icons/Home.svg'
import AboutMeIcon from '../assets/icons/AboutMe.svg'
import ResumeIcon from '../assets/icons/Resume.png'
import ProjectsIcon from '../assets/icons/Projects.png'
import GalleryIcon from '../assets/icons/Gallery.png'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul className="NavbarContainer">
                <li className="NavbarLink">
                <img src={HomeIcon} className="NavbarIcon" />
                <p className='Navbar-Text'>Home</p>
                </li>
                <li className="NavbarLink">
                <img src={AboutMeIcon} className="NavbarIcon" />
                <p className='Navbar-Text'>About Me</p>
                </li>
                <li className="NavbarLink">
                <img src={ResumeIcon} className="NavbarIcon"></img>
                <p className='Navbar-Text'>Resume</p>
                </li>
                <li className="NavbarLink">
                <img src={ProjectsIcon} className="NavbarIcon"></img>
                <p className='Navbar-Text'>Projects</p>
                </li>
                <li className="NavbarLink">
                <img src={GalleryIcon} className="NavbarIcon"></img>
                <p className='Navbar-Text'>Gallery</p>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;