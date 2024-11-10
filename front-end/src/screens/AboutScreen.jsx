import "./aboutscreen.css";
import './screen.background.css';
import greenChilli from "./green.chilli.png";
import './global.background.css';

const AboutScreen = () => {
  return (
    <div className = "screen-background"> 
      <h1 id="intro-about">Welcome to J.F Bell's Hot Sauces</h1>
      <div className="about-content-div">
        <p className="about-content-text">
          Hello and welcome! I'm Jason, a proud native of Chorley in Lancashire, and I'm thrilled to introduce you to my passion project: the finest collection of hot sauces you'll ever taste. Growing up in this beautiful part of England, I developed a love for bold flavors and fiery spices, which led me to create a range of hot sauces that bring a touch of heat and a burst of flavor to every meal.
        </p>
        <img className="about-content-image" src={greenChilli} alt="Chilli Peppers" />
      </div>
    </div>
  );
};

export default AboutScreen;

