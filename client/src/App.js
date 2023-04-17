import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing';
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path={'/landing'} element={<Landing />} />
        <Route path={'/home'} element={<Home />} />

      </Routes>
      <Footer />

    </div >
  );
}

export default App;
