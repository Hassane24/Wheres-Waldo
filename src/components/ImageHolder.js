import { useState } from "react";
import MouseClick from "./MouseClick";
import universe113 from "../assets/universe-113.jpg";
import "../styles/ImageHolder.css";
const ImageHolder = ({ handleClick }) => {
  const [clicked, setClicked] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div className="image-holder">
      <img
        src={universe113}
        onClick={(e) => {
          setClicked(!clicked);
          setX(e.clientX);
          setY(e.clientY);
          handleClick(e);
        }}
      />
      <MouseClick clicked={clicked} left={x + 10} top={y + 5}></MouseClick>
    </div>
  );
};
export default ImageHolder;
