import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu/Menu';
import Symmetrical from './components/Menu/Symmetrical/Symmetrical.jsx';
import Ceasar from './components/Menu/Symmetrical/Ceasar';
import Apfine from './components/Menu/Symmetrical/Apfine.jsx';
import Atbash from "./components/Menu/Symmetrical/Atbash";
import Slogan from "./components/Menu/Symmetrical/Slogan";
import Vigenere from "./components/Menu/Symmetrical/Vigenere";
import Gronsfeld from "./components/Menu/Symmetrical/Gronsfeld";

import Asymmetrical from "./components/Menu/Asymmetrical/Asymmetrical";
import Rsa from "./components/Menu/Asymmetrical/RSA";
import {isPrime} from "./Redux/State";
import Main from "./components/Main";
import Elgamal from "./components/Menu/Asymmetrical/Elgamal";

function App(props) {

  return (
    <div>
        <div className='text-indigo-900'>
            <Navbar/>
            <Routes>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/' element={<Main/>}/>

                <Route path='/symmetrical' element={<Symmetrical symNames={props.symNames}/>}/>
                <Route path='/asymmetrical' element={<Asymmetrical asymNames={props.asymNames}/>}/>
                <Route path='/ceasar' element={<Ceasar langs={props.langs} encMess={props.ceasarEncMess} decMess={props.ceasarDecMess} symNames={props.symNames}/>}/>
                <Route path='/apfine' element={<Apfine langs={props.langs} encMess={props.apfineEncMess} decMess={props.apfineDecMess} symNames={props.symNames}/>}/>
                <Route path='/atbash' element={<Atbash langs={props.langs} encMess={props.atbashEncMess} decMess={props.atbashDecMess} symNames={props.symNames}/>}/>
                <Route path='/slogan' element={<Slogan langs={props.langs} encMess={props.sloganEncMess} decMess={props.sloganDecMess} symNames={props.symNames}/>}/>
                <Route path='/vigenere' element={<Vigenere langs={props.langs} encMess={props.vigenereEncMess} decMess={props.vigenereDecMess} symNames={props.symNames}/>}/>
                <Route path='/gronsfeld' element={<Gronsfeld langs={props.langs} encMess={props.gronsfeldEncMess} decMess={props.gronsfeldDecMess} symNames={props.symNames}/>}/>

                <Route path='/rsa' element={<Rsa langs={props.langs} encMess={props.RSA_EncMess} decMess={props.RSA_DecMess} asymNames={props.asymNames} isPrime={isPrime}/>} />
                <Route path='/elgamal' element={<Elgamal langs={props.langs} encMess={props.Elgamal_EncMess} decMess={props.Elgamal_DecMess} asymNames={props.asymNames} isPrime={isPrime}/>} />
            </Routes>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
