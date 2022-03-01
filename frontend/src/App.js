import './App.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {NavBar} from './components/Navbar';
import {Guitar} from './Pages/Guitar';
import { BrowserRouter,Routes, Route, Link ,Switch} from "react-router-dom"; 
import Navbar from "./components/Navbar";
import {Home} from "./Pages/Home";
import {Artcourses} from "./Pages/Artcourses";
import {Ballet} from "./Pages/Ballet";
import {Flute} from "./Pages/Flute";
import {Gallery} from "./Pages/Gallery";
import {News} from "./Pages/News";
import {Piano} from "./Pages/Piano";
import {Theatre} from "./Pages/Theatre";
import {Violin} from "./Pages/Violin";
import {Workshop} from "./Pages/Workshop";
import Footer from './components/Footer'


function App() {
  return (
<>
<BrowserRouter>
  <Navbar/>
  <div>
    <Switch>
    <Route path="/piano" component={Piano}
      />
    {/* <Route path='/' element={<Home/>} ></Route> */}
    {/* <Route path='./Pages/Artcourses.js' element={<Artcourses/>} ></Route>
    <Route path='./Pages/Ballet.js' element={<Ballet/>} ></Route>
    <Route path='./Pages/Flute.js' element={<Flute/>} ></Route> */}
    {/* <Route path='./Pages/Gallery.js' element={<Gallery/>} ></Route> */}
    <Route path='/guitar' component={Guitar}/>
      
    {/* <Route path='./Pages/News.js' element={<News/>} ></Route> */}
    {/* <Route path='./Pages/Violin.js' element={<Violin/>} ></Route>
    <Route path='./Pages/Theatre.js' element={<Theatre/>} ></Route>
    <Route path='./Pages/Workshop.js' element={<Workshop/>} ></Route> */}
 <Footer/>
 </Switch>
 </div>
  </BrowserRouter>
  </>
  );
}

export default App;


