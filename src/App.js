import "./App.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavBar charsLeft="5" />
      <Carousel />
    </>
  );
};

export default App;
