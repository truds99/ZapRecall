import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './MainMenu/MainMenu';
import Content from './Content/Content';
import '../reset.css';
import { useState } from 'react';



function App() {

  const [validValue, setValidValue] = useState('');


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainMenu setValidValue={setValidValue}/>}/>
          <Route path='/content' element={<Content validValue={validValue} setValidValue={setValidValue}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
