import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';

function App() {
   return (
      <div className="App">
         <Home />
         {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <button className='btn  btn-primary'>Text</button>
         </header> */}
      </div>
   );
}

export default App;
