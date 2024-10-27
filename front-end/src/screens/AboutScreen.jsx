import "./aboutscreen.css"
import greenChilli from "./green.chilli.png"

const AboutScreen = () => {
  return (
    <div id = "about-main">

        
    <h1 id = "intro-about">Welcome to J.F Bell's Hot Sauces!</h1>
    <div class = "about-content-div">
      <p class = "about-content">Hello and welcome! I'm Jason, a proud native of Chorley in Lancashire, and I'm thrilled to introduce you to my passion project: the finest collection of hot sauces you'll ever taste. Growing up in this beautiful part of England, I developed a love for bold flavors and fiery spices, which led me to create a range of hot sauces that bring a touch of heat and a burst of flavor to every meal.</p>
      <img class = "about-content" src={greenChilli} alt="Chilli Peppers" />
    </div>
    {/* The image is displayed twice in the code above. 
    <img src={greenChilli} alt="Chilli Peppers" class = "about-image"/>
    <p class = "about-content">Each bottle of my hot sauce is crafted with care, using only the freshest ingredients and a blend of unique spices that are sure to tantalize your taste buds. From mild and tangy to fiercely hot, there's something in my collection for everyone, whether you're a seasoned chili aficionado or just starting to explore the world of spicy foods.</p>
    <p class = "about-content">What sets my sauces apart is the perfect balance of heat and flavor. I'm committed to quality and authenticity, ensuring that each sauce not only brings the heat but also enhances the natural flavors of your dishes. Plus, all my products are made right here in Lancashire, supporting local agriculture and businesses.</p>
    <p class = "about-content">Join me on this spicy journey and elevate your culinary adventures with my handcrafted hot sauces. Whether you're looking to add a kick to your favorite recipes or find the perfect gift for a fellow spice lover, you've come to the right place. Dive in, explore the flavors, and let the heat inspire your cooking!</p>
    <p class = "about-content">Thank you for visiting John's Hot Sauces, and I hope you enjoy every fiery bite!</p>
    */}
    </div>
  );
};

export default AboutScreen;