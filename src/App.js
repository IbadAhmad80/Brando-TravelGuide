import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import mountain from "./assets/mountain.jpg";
import Services from "./components/services";
import Offers from "./components/offers";
import Contact from "./components/contact";
import Packages from "./components/packages";
import Blogs from "./components/blogs";

function App() {
  return (
    <div className="App">
      <div style={backgroundImage}>
        <span id="home">
          {" "}
          <NavBar />
        </span>

        <HomeSection />
      </div>
      <span id="packages">
        {" "}
        <Packages />
      </span>
      <span id="services">
        {" "}
        <Services />
      </span>
      <span id="offers">
        {" "}
        <Offers />
      </span>
      <span id="blogs">
        {" "}
        <Blogs />
      </span>
      <span id="contact">
        {" "}
        <Contact />
      </span>
    </div>
  );
}

export default App;

const backgroundImage = {
  background: `url(${mountain}) no-repeat`,
};
