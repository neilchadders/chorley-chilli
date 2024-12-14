import './intro.css'
import './screen.background.css'
import { ReactTyped } from "react-typed";



const IntroScreen = () => {
    return (

        <div className = "main-container">
            
            <div id = "title-text">
                <p className='title-head'>J. F. Bell</p> 
                <p className='intro-text'>Chorley Chilli Sauces</p>      
            </div>
            
           
        <div className="typed-div">
        <ReactTyped
                strings={["Tasty Spices at Tasty Prices"] }          
                typeSpeed={100}
                backSpeed={50}
                loop
                className='intro-text typed'  />
           
        </div>
        </div>
       
           
    );
}

export default IntroScreen;