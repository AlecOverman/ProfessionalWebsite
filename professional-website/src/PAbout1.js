import { Parallax } from 'react-parallax';
import AboutOne from './Assets/pc1.jpg'; //

const ParallaxAboutOne = () => (
    <Parallax className="AboutOne" bgImage={AboutOne} bgImageAlt="ParallaxOne" strength={800}>
        <div className='about-content'>
            <span className="img-text">Alec Overman</span>
        </div>
    </Parallax>
);

export default ParallaxAboutOne