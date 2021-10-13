import Tile from '../Tile.js'
import React, { useState, useEffect } from 'react';

function Board() {
    const [board, setBoard] = useState([])
    const [isWinner, setisWinner] = useState(false)

    useEffect(() => {
        setBoard(boardInit())
    }, [])

    useEffect(()=>{
        console.log("b", board)
    })
    useEffect(()=>{
        console.log("checking")
        checkForWin()
    },[board])

    const checkForWin = () =>{
        for (let i = 0; i < board.length - 1; i++){
            console.log(board[i].key, i)
            if (board[i].key !== i) return;
        }
        if (board.length) setisWinner(true)
    }

    const boardInit = () =>{
        const newBoard = []
        for (let i = 1; i < 16; i++){
            newBoard.push({key: i})
            //newBoard.push(<Tile key={i} value={i} isEmpty={false} onClick={tileSwap}/>)
        }
        //newBoard.push(<Tile key={0} value={null} isEmpty={true}/>)
        newBoard.push({key: 0})
        //console.log("init", newBoard)
        return shuffle(newBoard)
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

    const tileSwap = (val) => {
        //console.log(board)
        if (!val) return
        const boardCopy = [...board]
        let index//, curTile
        for (let tile = 0; tile < boardCopy.length; tile++){
            if (boardCopy[tile].key === val) {
                // console.log(boardCopy)
                // console.log(tile)
                //curTile = boardCopy[tile]
                //console.log("cur", curTile)
                console.log(tile)
                index = tile
            }
        }
        if (index % 4 > 0){
            console.log("yo")
            if (boardCopy[index - 1].key === 0){
                [boardCopy[index], boardCopy[index-1]] = [boardCopy[index-1], boardCopy[index]];
                setBoard(boardCopy)
                return
            }
        }

        if (index > 3){
            if (boardCopy[index - 4].key === 0){
                [boardCopy[index], boardCopy[index-4]] = [boardCopy[index-4], boardCopy[index]];
                setBoard(boardCopy)
                return
            }
        }

        if (index < 12){
            if (boardCopy[index + 4].key === 0){
                [boardCopy[index], boardCopy[index+4]] = [boardCopy[index+4], boardCopy[index]];
                setBoard(boardCopy)
                return
            }
        }
        //console.log(index)
        if (index % 4 < 3){
            // console.log(index)
            // console.log(boardCopy[index + 1].props.value);
            // console.log(board[index + 1].props.value);
            if (boardCopy[index + 1].key === 0){
                [boardCopy[index], boardCopy[index+1]] = [boardCopy[index+1], boardCopy[index]];
                setBoard(boardCopy)
                return
            }
        }
        //console.log(val)
    }
    if (isWinner){
        return <div>
            Yo you won
        </div>
    }
    return (
      <div className="Board">
        {board.map(obj => <Tile key={obj.key} value={obj.key ? obj.key : null} onClick={tileSwap}/>)}
      </div>
    );
  }
  
  export default Board;