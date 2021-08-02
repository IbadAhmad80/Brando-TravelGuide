import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import mountain from "./assets/mountain.jpg";
import Services from "./components/services";
import Offers from "./components/offers";

function App() {
  return (
    <div className="App">
      <div style={backgroundImage}>
        <NavBar />
        <HomeSection />
      </div>
      <Services />
      <Offers />
    </div>
  );
}

export default App;

const backgroundImage = {
  background: `url(${mountain}) no-repeat`,
};
