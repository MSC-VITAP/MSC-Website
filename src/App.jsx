import { React } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Home from './routes/Home';
import Memberlogin from './routes/Memberlogin';
import Notfound from './routes/Notfound';
import Underconstruction from './routes/Underconstruction';

function App() {

  return (
    <BrowserRouter>
      <div className='bg-[#1B2A41]'>
        <NavBar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/pageunderconstruction' element={<Underconstruction />} />
          <Route path='/members/login' element={<Memberlogin />} />
          <Route path='/404' element={<Notfound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
