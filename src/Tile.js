//import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react";

function Tile({value, onClick}) {
    const colorMap = {2: "GreenYellow", 4:"Chartreuse", 8:"LimeGreen", 16: "PaleGreen", 32:"DarkSeaGreen", 64:"LightSeaGreen", 128:"DarkCyan", 256:"DeepSkyBlue", 512:"DodgerBlue", 1024:"Blue", 2048:"MidnightBlue", 4096:"Maroon"}
    const handleClick = () => {
        onClick(value)
    }
    return (
      <div className={value ? "Tile" : "Empty"} style={{backgroundColor: colorMap[value]}} onClick={onClick ? handleClick : null}>
        <h1>{value}</h1>
      </div>
    );
  }
  
  export default Tile;