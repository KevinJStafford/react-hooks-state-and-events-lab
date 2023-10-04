import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [state, setState] = useState(false)
  const appClass = state ? "App dark" : "App light"
  const renderButtonText = state ? "Light Mode" : "Dark Mode"

  function handleButtonClick() {
    console.log('clicked')
    setState((currentState) => !currentState)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButtonClick}>{ renderButtonText }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
