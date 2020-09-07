import React from 'react';
import './App.css';
import MemeGenerator from './MemeGenerator'

/** App
  * App -> MemeGenerator -> MemeForm, MemeList (-> MemeCard)
 */
function App() {
  return (
    <div className="App">
      <MemeGenerator />
    </div>
  );
}

export default App;
