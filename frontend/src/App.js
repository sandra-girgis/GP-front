import React ,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import { Home } from "./Pages/Home";
import { Artcourses } from "./Pages/Artcourses";
import { Guitar } from "./Pages/Guitar";
import { Ballet } from "./Pages/Ballet";
import { Flute } from "./Pages/Flute";
import Gallery from "./Pages/Gallery";
import News from "./Pages/News";
import { Piano } from "./Pages/Piano";
import { Theatre } from "./Pages/Theatre";
import { Violin } from "./Pages/Violin";
import { Workshop } from "./Pages/Workshop";
import { Joinus } from "./Pages/Joinus";
import { Admin } from "./Pages/Admin/Admin";
import { Events } from "./Pages/Admin/Events";
import { Imagealbum } from "./Pages/Admin/Imagealbum";
import { Instructors } from "./Pages/Admin/Instructors";
import { Students } from "./Pages/Admin/Students";


import  Login  from "./Pages/login";
// {}>> <function></function>
import { Footer } from "./components/Footer";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {

  const [token,setToken] = useState('')


  const userlogin = (tok) =>{
    setToken(tok);
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div>
          <Switch>
            <Route path="/piano" exact component={Piano} />
            <Route path="/" exact component={Home} />
            <Route path="/artCourses" exact component={Artcourses} />
            <Route path="/ballet" exact component={Ballet} />
            <Route path="/flute" exact component={Flute} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/guitar" exact component={Guitar} />
            <Route path="/news" exact component={News} />
            <Route path="/violin" exact component={Violin} />
            <Route path="/theatre" exact component={Theatre} />
            <Route path="/workshop" exact component={Workshop} />
            {/* <Route path="/classes" exact component={Classes} />
            <Route path="/concerts" exact component={Concerts} />
            <Route path="/exhibitions" exact component={Exhibitions} />
            <Route path="/workshops" exact component={Workshops} /> */}
            <Route path="/joinus" exact component={Joinus} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin" exact component={Events} />
            <Route path="/imagealbum" exact component={Imagealbum} />
            <Route path="/instructors" exact component={Instructors} />
            <Route path="/students" exact component={Students} />
            <Route path="/login" exact ><Login userlogin={userlogin}/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;