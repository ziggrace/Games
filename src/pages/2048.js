import React, { useState, useEffect } from 'react';
import Tile from '../Tile.js'

function TwentyFourtyEight(){
    const [layout, setLayout] = useState([])

    useEffect(() => {
        setLayout(layoutInit())
    }, [])

    const layoutInit = () =>{
        const init = [{value:2}, {value: 4}]
        for (let i=0; i<14; i++){
            init.push({value:0})
        }
        return shuffle(init)
    }

    const shuffle = (array) => {
        const output = array
        for (let i = output.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [output[i], output[randomIndex]] = [output[randomIndex], output[i]];
        }
        //console.log("hi", output)
        return output
    };

    return (
        <div className="twenty-fourty-eight">
            <div className="Board">{layout.map(obj=><Tile value={obj.value ? obj.value : null}/>)}</div>
            {/* <button>up<button/> */}
            {/* <button>down<button/> */}
        </div>

    )
}
export default TwentyFourtyEight;