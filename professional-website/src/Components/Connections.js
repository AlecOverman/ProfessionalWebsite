import git from '../Assets/social.png';
import link from '../Assets/link.png';
import resume from '../Assets/resume.png';
const Connections = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <a id='connect-a'></a>
                <a
                    href="https://www.linkedin.com/in/alec-overman-950a8226a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxk0Nk3HASFmdTWT3ai7dZA%3D%3D">
                    <img src={link} width="30" height="30"
                        alt="Linkedin of Alec Overman"></img>
                </a>
                <a href="https://github.com/GitAlecoutofHere">
                    <img src={git} width="30" height="30"
                        alt="Github of Alec Overman"></img>
                </a>
                <a href="https://drive.google.com/file/d/1lN7WJNUiTw621ig85pZMf-LANBKUSJyy/view?usp=sharing">
                    <img src={resume} width="30" height="30"
                        alt="Resume of Alec Overman"></img>
                </a>
            </div>
        </nav >
    );
}

export default Connections;