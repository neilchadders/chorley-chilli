
import logo from '../background2.jpg';
import './intro.css'

const IntroScreen = () => {
    return (
     
        <div className='centre'>
            <p  className='intro_text'>J F Bell's</p>
            <p className='intro_text'>Chorley Chilli Sauces</p>
       
       
        <div className='intro_img'>
                <img src= {logo} alt="chilli-pic" />
        </div>

        </div>
      
    );
}

export default IntroScreen;