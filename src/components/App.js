import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './MainMenu/MainMenu';
import Content from './Content/Content';
import '../reset.css';
import { useState } from 'react';



function App() {

  const [validValue, setValidValue] = useState('');
  const [validDeck, setValidDeck] = useState('');


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainMenu setValidValue={setValidValue} setValidDeck={setValidDeck}/>}/>
          <Route path='/content' element={<Content validValue={validValue} setValidValue={setValidValue} validDeck={validDeck} setValidDeck={setValidDeck}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
