const Carousel = ({ image, onClickHandler }) => (
  <div className="image-holder">
    <img src={image} alt="" onClick={onClickHandler} />
  </div>
);
export default Carousel;
