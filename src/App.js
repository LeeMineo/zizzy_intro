import React from 'react';
import './App.css';

import { Header, Footer } from './components';
import { Start, Value, Service, Tech, Team } from './sections';

function App() {
  return (
    <div className="App">
      <Header />

      <Start />
      <Value />
      <Service />
      <Tech />
      <Team />

      <Footer />
    </div>
  );
}

export default App;
