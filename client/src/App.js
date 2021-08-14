import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import mountain from "./assets/mountain.jpg";
import Services from "./components/services";
import Offers from "./components/offers";
import Contact from "./components/contact";
import Packages from "./components/packages";
import Blogs from "./components/blogs";
import About from "./components/about";
import { Route, Switch } from "react-router-dom";
import PackageDetail from "./components/packages/package-detail";

function App() {
  return (
    <Switch>
      <Route path="/" component={Routes} exact />
      <Route path="/packages/:title" component={PackageDetail} exact />
    </Switch>
  );
}

export default App;

function Routes() {
  return (
    <div>
      <div className="App">
        <div style={backgroundImage}>
          <span id="home">
            <NavBar />
          </span>
          <HomeSection />
        </div>
        <span id="about">
          <About />
        </span>
        <span id="packages">
          <Packages />
        </span>
        <span id="services">
          <Services />
        </span>
        <span id="offers">
          <Offers />
        </span>
        <span id="blogs">
          <Blogs />
        </span>
        <span id="contact">
          <Contact />
        </span>
      </div>
    </div>
  );
}

const backgroundImage = {
  background: `url(${mountain}) no-repeat`,
};
