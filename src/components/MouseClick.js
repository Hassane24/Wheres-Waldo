const MouseClick = ({ clicked, top, left }) => {
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
      >
        <div>No foce</div>
        <div>Saitama</div>
        <div>Vash</div>
      </div>
    );
  return null;
};

export default MouseClick;
