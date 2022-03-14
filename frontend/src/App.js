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
import Events from "./Pages/Admin/Events";
import Imagealbum from "./Pages/Admin/Imagealbum";
import Instructors from "./Pages/Admin/Instructors";
import Students from "./Pages/Admin/Students";
import { Addstudent } from "./Pages/Admin/Addstudent";
import { Addinstructor } from "./Pages/Admin/Addinstructor";
import Addevent from "./Pages/Admin/Addevent";
import { Addimage } from "./Pages/Admin/Addimage";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Passtd from "./Pages/passtd";
import Pasins from "./Pages/pasins";
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
            {sessionStorage.token ? (
              <>
                {sessionStorage.is_superuser === "true" ? (
                  <>
                    <Route path="/event" exact component={Events} />
                    <Route path="/imagealbum" exact component={Imagealbum} />
                    <Route path="/instructors" exact component={Instructors} />
                    <Route path="/students" exact component={Students} />
                    <Route path="/addstudent" exact component={Addstudent} />
                    <Route path="/addevent" exact component={Addevent} />
                    <Route path="/addimage" exact component={Addimage} />
                    <Route
                      path="/addinstructor"
                      exact
                      component={Addinstructor}
                    />
                  </>
                ) : sessionStorage.is_staff === "true" ? (
                  <>
                  <Route path="/instructor" exact component={Instructor} />
                  <Route path="/pasins" exact component={Pasins} />
                  </>
                ) : (
                  <>
                    <Route path="/student" exact component={Student} />
                    <Route path="/passtd" exact component={Passtd} />
                  </>
                )}
              </>
            ) : (
              <Route path="/login" exact>
                <Login />
              </Route>
            )}
            <Route path="/register" exact component={Register} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
