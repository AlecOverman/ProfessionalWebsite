import { Parallax } from 'react-parallax';
import AboutThree from './Assets/pc0.jpg'; //

const ParallaxAboutThree = () => (
    <Parallax className="AboutThree" bgImage={AboutThree} bgImageAlt="ParallaxThree" strength={800}>
        <div className='about-content'>
        </div>
    </Parallax>
);

export default ParallaxAboutThree