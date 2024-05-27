import { Parallax } from 'react-parallax';
import AboutTwo from './Assets/pc2.jpg'; //

const ParallaxAboutTwo = () => (
    <Parallax className="AboutTwo" bgImage={AboutTwo} bgImageAlt="ParallaxTwo" strength={800}>
    </Parallax>
);

export default ParallaxAboutTwo