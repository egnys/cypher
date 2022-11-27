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

function App(props) {

  return (
    <div className='text-indigo-900'>
      <Navbar/>
      <Routes>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/symmetrical' element={<Symmetrical names={props.names}/>}/>
        <Route path='/asymmetrical' element={<></>}/>
        <Route path='/ceasar' element={<Ceasar langs={props.langs} encMess={props.ceasarEncMess} decMess={props.ceasarDecMess} names={props.names}/>}/>
        <Route path='/apfine' element={<Apfine langs={props.langs} encMess={props.apfineEncMess} decMess={props.apfineDecMess} names={props.names}/>}/>
        <Route path='/atbash' element={<Atbash langs={props.langs} encMess={props.atbashEncMess} decMess={props.atbashDecMess} names={props.names}/>}/>
        <Route path='/slogan' element={<Slogan langs={props.langs} encMess={props.sloganEncMess} decMess={props.sloganDecMess} names={props.names}/>}/>
        <Route path='/vigenere' element={<Vigenere langs={props.langs} encMess={props.vigenereEncMess} decMess={props.vigenereDecMess} names={props.names}/>}/>
        <Route path='/gronsfeld' element={<Gronsfeld langs={props.langs} encMess={props.gronsfeldEncMess} decMess={props.gronsfeldDecMess} names={props.names}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
