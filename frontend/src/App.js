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
import Gallery from "./Pages/Gallery";
import News from "./Pages/News";
import { Piano } from "./Pages/Piano";
import { Theatre } from "./Pages/Theatre";
import { Violin } from "./Pages/Violin";
import { Workshop } from "./Pages/Workshop";
import { Joinus } from "./Pages/Joinus";
// {}>> <function></function>
import { Footer } from "./components/Footer";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
 
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;