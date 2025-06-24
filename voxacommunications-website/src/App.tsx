import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleHomePage from './SimpleHomePage';
import SponsorsEmbed from './embed/SponsorsEmbed';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SimpleHomePage />} />
          <Route path="/embed/sponsors" element={<SponsorsEmbed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
