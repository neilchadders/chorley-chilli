import './intro.css'
import './screen.background.css'
import { Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactTyped } from "react-typed";
import NewSlider from '../components/NewSlider';

const IntroScreen = () => {
    return (

        <div className = "screen-background main-container">
            
            <div id = "title-text">
                <p className='title-head'>J. F. Bell</p> 
                <p className='intro-text'>Chorley Chilli Sauces</p>      
            </div>
            
            <LinkContainer className = "enter-button" to="/shop">
                <Nav.Link>Shop</Nav.Link>
            </LinkContainer> 

            <NewSlider />
        
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