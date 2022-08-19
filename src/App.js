import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import Home from './components/Home';
import Home2 from './components/Home2';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
