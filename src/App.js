import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ComicsList from './components/ComicsList';
import AddComic from './components/AddComic';

import { useState } from 'react';


function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }
  return (
    <div className="App">
      <header className="App-header">
  <img src="/images/images.jpeg" alt=""/>
        <h2>Comics</h2>
        <h3>Latest Releases</h3>
<AddComic handleReload={handleReload} />
      </header>
      <Router>
        <ComicsList reload={reload} />
      </Router>
    </div>
    
  );
}

export default App;
