
import './intro.css'
import ProductCarousel from '../components/ProductCarousel';

const IntroScreen = () => {
    return (
     
        <div className='centre'>
            <div id = "title-text">
            <p  className='intro_text'>J F Bell's</p>
            <p className='intro_text'>Chorley Chilli Sauces</p>
            </div>
                 
       
        <div className='intro_text_carousel'>
             <ProductCarousel/>
        </div>
       
        </div>
      
    );
}

export default IntroScreen;