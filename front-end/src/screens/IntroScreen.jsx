
import './intro.css'
import ProductCarousel from '../components/ProductCarousel'; // Import the ProductCarousel component

const IntroScreen = () => {
    return (
     
        <div className = "background-class">
            <div id = "title-text">
            <p className='title-head'>J. F. Bell</p> 
            <p  className='intro-text'>Chorley Chilli Sauces</p>
            <p className='intro-text'>Tasty Spices at Tasty Prices</p>
            </div>
                 
       
        <div className='intro_text_carousel'>
             <ProductCarousel/> 
        </div>
       
        </div>
      
    );
}

export default IntroScreen; 