import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Problem from './pages/Problem';
import Main from './pages/Main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/problem' exact element={<Problem/>}></Route>
            <Route path='/main' exact element={<Main/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
