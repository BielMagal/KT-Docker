import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8080/items")
      .then(res => res.json())
      .then(
        result => result.error
          ? setError(result.error)
          : setItems(result.items),
        error => setError(error));
  }, []);

  console.log({items, error});
  const renderItems = () => items? items.map(item => (
      <div className="Item-div">
        <div className="Item-id">{item.id}</div>
        <div className="Item-name">{item.name}</div>
      </div>
    )) : null;

  return (
    <div className="App">
      <header className="App-header">
        {error? "Ocorreu um erro inesperado" : renderItems()}
      </header>
    </div>
  );
}

export default App;
