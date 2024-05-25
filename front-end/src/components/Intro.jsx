
import logo from '../background.jpg';


const Intro = () => {
    return (
        <header>
        <div className='intro'>
            <div className='intro__text'>
            <h1>Chorley Chilli</h1>
            <p>Chilli Sauce</p>
            </div>
            <img src={logo} alt='chilli' className='intro__img' />
        </div>
        </header>
    );
}

export default Intro;