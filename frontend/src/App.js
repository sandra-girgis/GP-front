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
import { Instructor } from "./Pages/Instructor";
import { Student } from "./Pages/Student";

import Gallery from "./Pages/Gallery";
import Concerts from "./Pages/Concerts";
import News from "./Pages/News";
import { Piano } from "./Pages/Piano";
import { Theatre } from "./Pages/Theatre";
import { Violin } from "./Pages/Violin";
import { Workshop } from "./Pages/Workshop";
import { Joinus } from "./Pages/Joinus";
import Events from "./Pages/Admin/Events";
import Imagealbum from "./Pages/Admin/Imagealbum";
import Instructors from "./Pages/Admin/Instructors";
import Students from "./Pages/Admin/Students";
import { Addstudent } from "./Pages/Admin/Addstudent";
import { Addinstructor } from "./Pages/Admin/Addinstructor";
import { Addevent } from "./Pages/Admin/Addevent";
import { Addimage} from "./Pages/Admin/Addimage";

// import { Editevent} from "./Pages/Admin/Editevent";
// import { Deletevent} from "./Pages/Admin/Deletevent";
// import { Editimage} from "./Pages/Admin/Editimage";
// import { Deletimage} from "./Pages/Admin/Deletimage";
// import { Deleteinstractor} from "./Pages/Admin/Deleteinstractor";
// import { Editinstructor} from "./Pages/Admin/Editinstructor";
// import { Editstudent} from "./Pages/Admin/Editstudent";
// import { Deletstudent} from "./Pages/Admin/Deletstudent";

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
             {/* <Route path="/classes" exact component={Classes} /> */}
            <Route path="/concerts" exact component={Concerts} />
            {/*<Route path="/exhibitions" exact component={Exhibitions} />
            <Route path="/workshops" exact component={Workshops} /> */}
            <Route path="/joinus" exact component={Joinus} />
            <Route path="/instructor" exact component={Instructor} />
            <Route path="/student" exact component={Student} />
            <Route path="/event" exact component={Events} />
            <Route path="/imagealbum" exact component={Imagealbum} />
            <Route path="/instructors" exact component={Instructors} />
            <Route path="/students" exact component={Students} />
            <Route path="/addstudent" exact component={Addstudent} />
            <Route path="/addevent" exact component={Addevent} />
            <Route path="/addimage" exact component={Addimage} />
            <Route path="/addinstructor" exact component={Addinstructor} />
            {/* <Route path="/editevent" exact component={Editevent} />
            <Route path="/deletevent" exact component={Deletevent} />
            <Route path="/editimage" exact component={Editimage} />
            <Route path="/ deletimage" exact component={Deletimage} />
            <Route path="/deleteinstractor" exact component={Deleteinstractor} />
            <Route path="/editinstructor" exact component={Editinstructor} />
            <Route path="/editstudent" exact component={Editstudent} />
            <Route path="/deletstudent" exact component={Deletstudent} /> */}
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