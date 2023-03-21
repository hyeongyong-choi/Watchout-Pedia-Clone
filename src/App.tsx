import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={MainPage}/>
        <Route path="/tv" Component={TvPage}/>
        <Route path="/movie/:id" Component={MovieDetail}/>
        <Route path="/tv/:id" Component={TvDetail}/>
      </Routes>
    </Router>
  );
}

export default App;
