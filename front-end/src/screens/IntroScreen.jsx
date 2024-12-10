import './intro.css'
import './screen.background.css'
import ProductCarousel from '../components/ProductCarousel'; // Import the ProductCarousel component
import { ReactTyped } from "react-typed";
import habanero from './habanerowhiteback.jpg'

const IntroScreen = () => {
    return (

        <div className = "screen-background">
            
            <div id = "title-text">
            <p className='title-head'>J. F. Bell</p> 
            <p  className='intro-text'>Chorley Chilli Sauces</p>
            
            
       <div className='intro_text_carousel'>
             <ProductCarousel/> 
        </div> 
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