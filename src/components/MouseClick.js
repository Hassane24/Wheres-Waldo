const MouseClick = ({ clicked, top, left, clickHandler }) => {
  if (clicked)
    return (
      <div
        style={{
          position: "fixed",
          top: top + "px",
          left: left + "px",
          zIndex: 15,
          color: "white",
        }}
        onClick={clickHandler}
      >
        <div>No face</div>
        <div>Vash</div>
        <div>Saitama</div>
      </div>
    );
  return null;
};

export default MouseClick;
