import React from "react";
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
import BlogDetails from "./components/blogs/blog-details";
import BlogCategory from "./components/blogs/blog-category";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeRoutes} exact />
      <Route path="/packages/:title" component={PackageDetail} exact />
      <Route path="/blogs/:title" component={BlogDetails} exact />
      <Route path="/blogs/:type/:title" component={BlogCategory} exact />
    </Switch>
  );
}

export default App;

function HomeRoutes() {
  //scroll to top of page during navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="App">
        <div style={backgroundImage}>
          <div id="home">
            <NavBar />
          </div>
          <HomeSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="packages">
          <Packages />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="offers">
          <Offers />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

const backgroundImage = {
  background: `url(${mountain}) no-repeat`,
};
