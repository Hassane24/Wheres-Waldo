const MouseClick = ({ clicked, x, y }) => {
  if (clicked)
    return (
      <div style={{ position: "fixed", top: y, left: x, zIndex: 1 }}>
        <div>No foce</div>
        <div>Saitama</div>
        <div>Vash</div>
      </div>
    );
  return null;
};

export default MouseClick;
