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
          setX(e.pageX);
          setY(e.pageY);
          handleClick(e);
        }}
      />
      <MouseClick clicked={clicked} x={x + 10} y={y + 5}></MouseClick>
    </div>
  );
};
export default ImageHolder;
