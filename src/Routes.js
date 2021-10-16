import { Switch, Route } from 'react-router-dom';
import Board from './pages/Board.js'
import TwentyFourtyEight from './pages/2048.js';
import Tetris from './pages/Tetris.js'

function Routes()  {
    return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        {/* <Route exact path='/' component={Home}></Route> */}
        <Route exact path='/' component={Board}></Route>
        <Route exact path='/2048' component={TwentyFourtyEight}></Route>
        <Route exact path='/Tetris' component={Tetris}></Route>
      </Switch>
    );
  }
  
  export default Routes;