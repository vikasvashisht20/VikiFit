import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Link} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Exercises from './pages/Exercises';
import Pricing from './pages/Pricing';
// import SignUp from './pages/SignUp';
import Home from './pages/Home';
import FitnessNews from './pages/FitnessNews';
import FeedBack from './pages/FeedBack';

import Footer from './components/Footer';


function App() {
  return (
    <>
   <div>
   <Navbar/>
   <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/FitnessNews' element= {<FitnessNews/>}></Route>
        <Route path='/Exercises' element= {<Exercises/>}></Route>
        <Route path='/Pricing' element= {<Pricing/>}></Route>
        <Route path='/FeedBack' element= {<FeedBack />}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
      </Routes>
   </div>
    <Footer/>
   </>
  );
}

export default App;
