import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener'
import Tile from '../Tile.js'

function TwentyFourtyEight(){
    const [layout, setLayout] = useState([])
    const [highTile, setHighTile] = useState(4)

    useEffect(() => {
        setLayout(layoutInit())
    }, [])

    // useEffect(()=>{
    //     document.addEventListener('keyup', e => handleKeyDown(e));
    //     //return () => document.removeEventListener("keydown", e => handleKeyDown(e));
    // }, [])

    const handleKeyDown = (event) =>{
        event.preventDefault()
        if (event.keyCode === 40) slide("down")
        else if (event.keyCode === 38) slide("up")
        else if (event.keyCode === 37) slide("left")
        else if (event.keyCode === 39) slide("right")
    }

    useEventListener('keydown', handleKeyDown);

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

    const findEmpty = (array) => {
        const empties = []
        for (let obj in array) {
            if (!array[obj].value) empties.push(obj)
        }
        return empties
    }

    const selectRandom = (array) =>{
        return array[Math.floor(Math.random() * array.length)]
    }

    const twoOrFour = () => {
        return Math.random() < .8 ? 2 : 4
    }

    const getColumns = (layoutCopy) => {
        const cols = []
        for (let i = 0; i <= 3; i++){
            const col = []
            for (let j = 0; j <= 12; j+=4){
                col.push(layoutCopy[i+j])
            }
            cols.push(col)
        }
        return cols
    }

    const getRows = (layoutCopy) =>{
        const rows = []
        for (let i = 0; i <= 12; i+=4){
            const row = []
            for (let j = 0; j<= 3; j++){
                row.push(layoutCopy[i + j])
            }
            rows.push(row)
        }
        return rows
    }

    const findHighTile = () =>{
        // console.log("finding")
        let max = 0
        for (let obj of layout){
            max = Math.max(max, obj.value)
        }
        setHighTile(max)
    }

    const slide = (direction) => {
        // console.log("yooooo")
        let layoutCopy = [...layout]
        let changed = false
        if (direction === "up"){
            const cols = getColumns(layoutCopy)
            // console.log(cols)
            for (let col in cols){
                for (let i = 0; i < cols[col].length - 1; i++){
                    if (cols[col][i+1].value && !cols[col][i].value) changed = true
                }
                cols[col] = cols[col].filter(obj => obj.value !== 0)
                for (let i = 0; i < cols[col].length - 1; i++){
                    if (cols[col][i].value === cols[col][i+1].value) {
                        changed = true
                        cols[col][i].value = cols[col][i].value * 2
                        cols[col][i+1].value = 0
                    }
                }
                cols[col] = cols[col].filter(obj => obj.value !== 0)
                // console.log("end of for loop", cols[col])
                while (cols[col].length < 4) cols[col].push({value: 0})
            }
            layoutCopy = []
            for (let i = 0; i < 4; i++){
                for (let j = 0; j < 4; j++){
                    layoutCopy.push(cols[j][i])
                }
            }
            // console.log("copy", layoutCopy)
            // console.log(cols)
        }
        else if (direction === "down"){
            const cols = getColumns(layoutCopy)
            for (let col in cols){
                for (let i = cols[col].length - 1; i > 0; i--){
                    console.log(layout)
                    console.log(cols[col][i-1], cols[col][i])
                    if (cols[col][i-1].value && !cols[col][i].value) changed = true
                }
                cols[col] = cols[col].filter(obj => obj.value !== 0)
                for (let i = cols[col].length - 1; i > 0; i--){
                    if (cols[col][i].value === cols[col][i-1].value) {
                        changed = true
                        cols[col][i].value = cols[col][i].value * 2
                        cols[col][i-1].value = 0
                    }
                }
                cols[col] = cols[col].filter(obj => obj.value !== 0)
                // console.log("end of for loop", cols[col])
                while (cols[col].length < 4) cols[col].unshift({value: 0})
            }
            layoutCopy = []
            for (let i = 0; i < 4; i++){
                for (let j = 0; j < 4; j++){
                    layoutCopy.push(cols[j][i])
                }
            }
        }        
        else if (direction === "left"){
            const rows = getRows(layoutCopy)
            for (let row in rows){
                for (let i = 0; i < rows[row].length - 1; i++){
                    if (rows[row][i+1].value && !rows[row][i].value) changed = true
                }
                rows[row] = rows[row].filter(obj => obj.value !== 0)
                for (let i = 0; i < rows[row].length - 1; i++){
                    if (rows[row][i].value === rows[row][i+1].value) {
                        changed = true
                        rows[row][i].value = rows[row][i].value * 2
                        rows[row][i+1].value = 0
                    }
                }
                rows[row] = rows[row].filter(obj => obj.value !== 0)
                // console.log("end of for loop", rows[row])
                while (rows[row].length < 4) rows[row].push({value: 0})
            }
            layoutCopy = []
            for (let row in rows){
                for (let val in rows[row]){
                    layoutCopy.push(rows[row][val])
                }
            }

        }
        else if (direction === "right"){
            const rows = getRows(layoutCopy)
            // console.log("rows", rows)
            for (let row in rows){
                for (let i = rows[row].length - 1; i > 0; i--){
                    if (rows[row][i-1].value && !rows[row][i].value) changed = true
                }
                rows[row] = rows[row].filter(obj => obj.value !== 0)
                for (let i = rows[row].length - 1; i > 0; i--){
                    if (rows[row][i].value === rows[row][i-1].value) {
                        changed = true
                        rows[row][i].value = rows[row][i].value * 2
                        rows[row][i-1].value = 0
                    }
                }
                rows[row] = rows[row].filter(obj => obj.value !== 0)
                // console.log("end of for loop", rows[row])
                while (rows[row].length < 4) rows[row].unshift({value: 0})
            }
            layoutCopy = []
            for (let row in rows){
                for (let val in rows[row]){
                    layoutCopy.push(rows[row][val])
                }
            }
        }
        if (changed){
            const empties = findEmpty(layoutCopy)
            // console.log("empties", empties)
            const randomEmpty = selectRandom(empties)
            layoutCopy[randomEmpty] = {value: twoOrFour()}
            setLayout(layoutCopy)
            // console.log("copy", layoutCopy)
            findHighTile()
            console.log("done")
        }
        return
    }

    return (
        <div className= "game">
            <div>High Tile is: {highTile}</div>
            <div className="twenty-fourty-eight"> <div className="Board">{layout.map(obj=><Tile value={obj.value ? obj.value : null}/>)}</div>
</div>
            {/* <div>
                <button onClick={e=>slide("up")}>up</button>
                <button onClick={e=>slide("down")}>down</button>
                <button onClick={e=>slide("left")}>left</button>
                <button onClick={e=>slide("right")}>right</button>
            </div> */}
        </div>

    )
}
export default TwentyFourtyEight;