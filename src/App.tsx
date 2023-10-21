import React from 'react';
import './App.css';
import {AppRouter} from "./routing/AppRouter";

function App(): React.JSX.Element {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
