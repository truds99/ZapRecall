import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './MainMenu/MainMenu';
import Content from './Content'
import '../reset.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainMenu />}/>
          <Route path='/content' element={<Content />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
