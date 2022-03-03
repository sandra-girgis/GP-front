import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Switch } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Artcourses} from "./Pages/Artcourses";
import {Guitar} from "./Pages/Guitar";
import {Ballet} from "./Pages/Ballet";
import {Flute} from "./Pages/Flute";
import {Gallery} from "./Pages/Gallery";
import {News} from "./Pages/News";
import {Piano} from "./Pages/Piano";
import {Theatre} from "./Pages/Theatre";
import {Violin} from "./Pages/Violin";
import {Workshop} from "./Pages/Workshop";
// {}>> <function></function>
import {Footer} from './components/Footer';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar />
  <div>
     <Switch>
     <Route path="/piano" component={Piano} />
     <Route exact path="/" component={Home} />
     <Route path='/artCourses' component={Artcourses} /> 
    <Route path='/ballet' component={Ballet} />
    <Route path='/flute' component={Flute} />
    <Route path='/gallery' component={Gallery} />
    <Route path="/guitar"><Guitar/></Route>
    <Route path='/news' component={News} />
    <Route path="/violin" component={Violin} />
    <Route path='/theatre' component={Theatre} />
    <Route path='/workshop' component={Workshop} />
 </Switch>
 <Footer/>
</div>
</BrowserRouter>
</>
  );
}

export default App;

    
 
    

