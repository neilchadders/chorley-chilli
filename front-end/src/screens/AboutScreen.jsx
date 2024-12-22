import "./aboutscreen.css";
import './screen.background.css';
import greenChilli from "./green.chilli.png";
import jcb from "./jcb.jpeg";
import './screen.background.css';


const AboutScreen = () => {
  return (
    <div id = "about-main"> 
      <h1 id="intro-about">Welcome to J.F Bell's Hot Sauces</h1>
      <div className="about-content-div">
        <p className="about-content-text">
          Hey It's me, JCB! I'm Jason, a proud native of Chorley in Lancashire, and the only thing I love more than my long term partner David are hot, hot sauces!
        </p>
       

        <img className="about-content-image" src={jcb} alt="JCB" />
        <p className="about-content-text">
          I'm thrilled to introduce you to my passion project: the finest collection of hot sauces you'll ever taste. Growing up in this beautiful part of England, I developed a love for bold flavors and fiery spices, which led me to create a range of hot sauces that bring a touch of heat and a burst of flavor to every meal.
        </p>
        <img className="about-content-image" src={greenChilli} alt="Chilli Peppers" />
      </div>
    </div>
  );
};

export default AboutScreen;

