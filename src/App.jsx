import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Loader from './components/Loader';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import Navbar from './components/Navbar';
import Searchpage from './pages/Searchpage';
import Searchbar from './components/Searchbar';


const App = () => {
  const [currency, setCurrency] = useState("INR");
  const [show, setshow] = useState(false);
  const handleChange = (e) => {
    setCurrency(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.altKey && e.key === 'm') {
      setshow((prevShow) => !prevShow);
    } else {
      // console.log('Some other key pressed');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className='content'>
      
      <Router>
      {show ? <Searchbar setshow={setshow}  /> : null
      }
        <Navbar handleChange={handleChange} currency={currency} />
        <Routes>
          <Route path='/' element={<Homepage handleChange={handleChange} currency={currency} />} />
          <Route path='/coin/:id' element={<Coinpage currency={currency} />} />
          <Route path='/search/:id' element={<Searchpage currency={currency}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
