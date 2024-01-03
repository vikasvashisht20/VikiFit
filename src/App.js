import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
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
   {/* <BrowserRouter basename='/VikiFit'> */}
     <Routes>
        <Route  path='/VikiFit' element= {<Home/>}></Route>
        <Route path='/VikiFit/FitnessNews' element= {<FitnessNews/>}></Route>
        <Route path='/VikiFit/Exercises' element= {<Exercises/>}></Route>
        <Route path='/VikiFit/Pricing' element= {<Pricing/>}></Route>
        <Route path='/VikiFit/FeedBack' element= {<FeedBack />}></Route>
        <Route path='/VikiFit/AboutUs' element={<AboutUs/>}></Route>
        <Route  path='*' element= {<Home/>}></Route>
      </Routes>
   {/* </BrowserRouter> */}
  
   </div>
    <Footer/>
   </>
  );
}

export default App;
