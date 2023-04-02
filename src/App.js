import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import MainContain from './components/MainContain';

function App() {
  return (
    <BrowserRouter>
      <MainContain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:companyId" element={<Details />} />
        <Route />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
