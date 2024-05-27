import ParallaxAboutOne from './PAbout1';
import ParallaxAboutTwo from './PAbout2';
import ParallaxAboutThree from './PAbout3';
import TextBox from './Components/TextBox';
import TextBoxWork from './Components/TextBoxWork';
import TextSphere from './Components/TextSphere';
import TextBoxWorkProjects from './Components/TextBoxProject';
import Connections from './Components/Connections';
const Home = () => {
    return (
        <div>
            <ParallaxAboutOne />
            <TextBox />
            <ParallaxAboutTwo />
            <TextSphere />
            <ParallaxAboutTwo />
            <TextBoxWork />
            <ParallaxAboutThree />
            <TextBoxWorkProjects />
            <ParallaxAboutThree />
            <Connections />
        </div>
    );
}

export default Home;