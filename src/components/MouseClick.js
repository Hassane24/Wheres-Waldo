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
        <div>Saitama</div>
        <div>Vash</div>
      </div>
    );
  return null;
};

export default MouseClick;
