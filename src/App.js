import logo from './logo.svg';
import './App.css';
import Board from './pages/Board.js'
import Navbar from  "./Navbar.js";
import Routes from  "./Routes.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
