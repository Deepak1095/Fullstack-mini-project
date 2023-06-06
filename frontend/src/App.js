import logo from './logo.svg';
import './App.css';
import Signup from './Routes/signup';
import Login from './Routes/login';
import MainRoutes from './Routes/MainRoutes';
import Navbar from './Components/navabr';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
