import { BrowserRouter,Routes, Route, Switch , Link } from "react-router-dom"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Artcourses} from "./Pages/Artcourses";
import {Ballet} from "./Pages/Ballet";
import {Flute} from "./Pages/Flute";
import {Gallery} from "./Pages/Gallery";
import {Guitar} from "./Pages/Guitar";
import {News} from "./Pages/News";
import {Piano} from "./Pages/Piano";
import {Theatre} from "./Pages/Theatre";
import {Violin} from "./Pages/Violin";
import {Workshop} from "./Pages/Workshop";
// {}>> <function></function>
import {Footer} from './components/Footer';


function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar />
  <div>
     <Switch>
     <Route path="/piano" component={Piano} />
     <Route path="/" component={Home} />
     <Route path='/artcourses' component={Artcourses} /> 
    <Route path='/ballet' component={Ballet} />
    <Route path='/flute' component={Flute} />
    <Route path='/gallery' component={Gallery} />
    <Route path='/guitar' component={Guitar} />
    <Route path='/news' component={News} />
    <Route path='/violin' component={Violin} />
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

    
 
    

