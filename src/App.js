import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from './../src/Pages/LoginPage';
import RegisterPage from './../src/Pages/RegisterPage';
import HomePage from './../src/Pages/HomePage';
import ViewPage from './../src/Pages/ViewPage';
import WeatherPage from './Pages/WeatherPage';
import MenuPage from './Pages/MenuPage';

function App() {
   
  return (
    <div className="App">
      
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<LoginPage/>}></Route>
             <Route path="/menu" element={<MenuPage/>}></Route>
             <Route path="/home" element={<HomePage/>}></Route>
             <Route path="/weather" element={<WeatherPage/>}></Route>
             <Route path="/view" element={<ViewPage/>}></Route>
             <Route path="/register" element={<RegisterPage/>}></Route>
          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
