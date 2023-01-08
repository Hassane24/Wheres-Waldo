import { useState } from "react";
import MouseClick from "./MouseClick";
import universe113 from "../assets/universe-113.jpg";
import "../styles/ImageHolder.css";
const ImageHolder = ({ handleClick, clickHandler, chars }) => {
  const [clicked, setClicked] = useState(false);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);

  return (
    <div className="image-holder">
      <img
        src={universe113}
        onClick={(e) => {
          setClicked(!clicked);
          setImageX(e.clientX);
          setImageY(e.clientY);
          handleClick(e);
        }}
      />
      <MouseClick
        chars={chars}
        clicked={clicked}
        left={imageX + 10}
        top={imageY + 5}
        clickHandler={(e) => {
          setClicked(!clicked);
          clickHandler(e);
        }}
      ></MouseClick>
    </div>
  );
};
export default ImageHolder;
