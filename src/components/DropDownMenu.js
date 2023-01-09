const DropDownMenu = ({ clicked, top, left, clickHandler, chars }) => {
  if (clicked)
    return (
      <div
        style={{
          position: "fixed",
          top: top + "px",
          left: left + "px",
          zIndex: 1,
          color: "white",
        }}
        onClick={clickHandler}
      >
        {chars.map((char, index) => (
          <li key={index}>
            {/* all this just to get rid of that "-" on "no-face" */}
            {char.charName.charAt(0).toUpperCase() +
              char.charName.slice(1).split("-").join(" ")}
          </li>
        ))}
      </div>
    );
  return null;
};

export default DropDownMenu;
