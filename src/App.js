import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import mountain from "./assets/mountain.jpg";

function App() {
  return (
    <div className="App">
      <div style={backgroundImage}>
        <NavBar />
        <HomeSection />
      </div>
    </div>
  );
}

export default App;

const backgroundImage = {
  background: `url(${mountain}) no-repeat`,
};
