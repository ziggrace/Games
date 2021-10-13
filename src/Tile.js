import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";

function Tile({value, onClick}) {
    const handleClick = () => {
        onClick(value)
    }
    return (
      <div className={value ? "Tile" : "Empty"} onClick={onClick ? handleClick : null}>
        {value}
      </div>
    );
  }
  
  export default Tile;