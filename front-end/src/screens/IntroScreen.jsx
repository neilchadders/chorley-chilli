
import './intro.css'
import ProductCarousel from '../components/ProductCarousel';

const IntroScreen = () => {
    return (
     
        <div className='centre'>
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