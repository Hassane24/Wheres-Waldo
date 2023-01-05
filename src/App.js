import "./App.css";
import ImageHolder from "./components/ImageHolder";
import NavBar from "./components/Navbar";
import universe113 from "./assets/universe-113.jpg";

const App = () => {
  return (
    <>
      <NavBar charsLeft="5" />
      <ImageHolder image={universe113} onClickHandler={(e) => console.log(e)} />
    </>
  );
};

export default App;
