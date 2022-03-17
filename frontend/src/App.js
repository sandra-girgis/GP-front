import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import { Home } from "./Pages/Home";
import { Artcourses } from "./Pages/Artcourses";
import { Guitar } from "./Pages/Guitar";
import { Ballet } from "./Pages/Ballet";
import { Flute } from "./Pages/Flute";
import Instructor from "./Pages/Instructor";
import Student from "./Pages/Student";
import Passtd from "./Pages/passtd";
import Pasins from "./Pages/pasins";

// import { ShowStudents } from "./Pages/Admin/Events";
import Concerts from "./Pages/Concerts";
import News from "./Pages/News";
import Classes from "./Pages/Classes";
import Exhibitions from "./Pages/Exhibitions";
import Workshops from "./Pages/Workshops";
import { Piano } from "./Pages/Piano";
// import { Theatre } from "./Pages/Theatre";
import { Violin } from "./Pages/Violin";
import { Workshop } from "./Pages/Workshop";
import { Joinus } from "./Pages/Joinus";
// import  Events  from "./Pages/Admin/Events";
// import Imagealbum from "./Pages/Admin/Image";
// import Instructors2 from "./Pages/Admin/Instructors2";
// import Students from "./Pages/Admin/Students";
// import { Addstudent } from "./Pages/Admin/Addstudent";
// import { Addinstructor2 } from "./Pages/Admin/Addinstructor2";
// import { Addimage} from "./Pages/Admin/Addimage";
// import  { Addevent }  from "./Pages/Admin/Addevent";
import Events from "./Pages/Admin/Events";
import Image from "./Pages/Admin/Image";
import Album from "./Pages/Admin/Album";
import Instructors from "./Pages/Admin/Instructors";
import Students from "./Pages/Admin/Students";
import { Addstudent } from "./Pages/Admin/Addstudent";
import { Addinstructor } from "./Pages/Admin/Addinstructor";
import { Addimage } from "./Pages/Admin/Addimage";
import { Addalbum } from "./Pages/Admin/Addalbum";
import { Addevent } from "./Pages/Admin/Addevent";



// import { Editevent} from "./Pages/Admin/Editevent";
// import { Deletevent} from "./Pages/Admin/Deletevent";
// import { Editimage} from "./Pages/Admin/Editimage";
// import { Deletimage} from "./Pages/Admin/Deletimage";
// import { Deleteinstractor} from "./Pages/Admin/Deleteinstractor";
// import { Editinstructor} from "./Pages/Admin/Editinstructor";
// import { Editstudent} from "./Pages/Admin/Editstudent";
// import { Deletstudent} from "./Pages/Admin/Deletstudent";

import  Login  from "./Pages/login";
import  Register  from "./Pages/register";
// {}>> <function></function>
import { Footer } from "./components/Footer";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
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
            <Route path="/guitar" exact component={Guitar} />
            <Route path="/news" exact component={News} />
            <Route path="/violin" exact component={Violin} />
            {/* <Route path="/theatre" exact component={Theatre} /> */}
            <Route path="/workshop" exact component={Workshop} />
            <Route path="/classes" exact component={Classes} />
            <Route path="/concerts" exact component={Concerts} />
            <Route path="/exhibitions" exact component={Exhibitions} />
            <Route path="/workshops" exact component={Workshops} />
            <Route path="/joinus" exact component={Joinus} />
            
                    {/* <Route path="/event" exact component={Events} />
                    <Route path="/imagealbum" exact component={Imagealbum} />
                    <Route path="/instructors" exact component={Instructors2} />
                    <Route path="/students" exact component={Students} />
                    <Route path="/addstudent" exact component={Addstudent} />
                    <Route path="/addevent" exact component={Addevent} />
                    <Route path="/addimage" exact component={Addimage} />
                    <Route
                      path="/addinstructor"
                      exact
                      component={Addinstructor2}
                   /> */}
            <Route path="/event" exact component={Events} />
            <Route path="/image" exact component={Image} />
            <Route path="/album" exact component={Album} />
            <Route path="/instructors" exact component={Instructors} />
            <Route path="/students" exact component={Students} />
            <Route path="/addstudent" exact component={Addstudent} />
            <Route path="/addevent" exact component={Addevent} />
            <Route path="/addimage" exact component={Addimage} />
            <Route path="/addalbum" exact component={Addalbum} />
            <Route path="/addinstructor" exact component={Addinstructor} />

                  <Route path="/instructor" exact component={Instructor} />
                  <Route path="/pasins" exact component={Pasins} />
                 
                    <Route path="/student" exact component={Student} />
                    <Route path="/passtd" exact component={Passtd} />
                  
              <Route path="/login" exact>
                <Login />
              </Route>
            
            <Route path="/register" exact component={Register} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
