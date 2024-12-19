import React, { useState } from 'react';
import Items from './components/Items.jsx';
//import Input from './components/Input.jsx';

import './App.css';
import DATA from './mocks/API_DATA.json';

const App = () => {

  const [data, setData] = useState(DATA);
  const [val, setVal] = useState('');

  const onValueSubmit = (e) => {
  setVal(e); 
  const items = DATA.items.filter(item => item.namePL.includes(e.toLocaleUpperCase()));
  setData({items});
  }

  return (
    <div className="App">
      <header>
        <h1>Filmy, które były wyświetlone w żagańskim DKF'ie 'Drewniany koń' w <span>2024</span> roku</h1>
        {/* <Input 
        value = {val}
        onFormSubmit = {onValueSubmit} 
        /> */}
      </header>
      <main className='containerApp'>
        <Items data = {data} />
      </main>
      
    </div>
  );
}

export default App;