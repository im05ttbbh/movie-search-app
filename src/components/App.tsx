import React from 'react';
import '../App.css';
import { Header } from './Header';
import { Search } from './Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search />
    </div>
  );
}

export default App;