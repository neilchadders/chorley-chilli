import './intro.css'
import './screen.background.css'
import { ReactTyped } from "react-typed";



const IntroScreen = () => {
    return (

        <div className = "screen-background main-container">
            
            <div id = "title-text">
                <p className='title-head'>J. F. Bell</p> 
                <p className='intro-text'>Chorley Chilli Sauces</p>      
            </div>
            
           
     
        <ReactTyped
                strings={["Tasty Spices at Tasty Prices"] }          
                typeSpeed={100}
                backSpeed={50}
                loop
                className='intro-text typed'  />
           
        </div>
       
           
    );
}

export default IntroScreen;