import "../styles/ImageHolder.css";
const ImageHolder = ({ image, onClickHandler }) => (
  <div className="image-holder">
    <img src={image} alt="" onClick={onClickHandler} />
  </div>
);
export default ImageHolder;
