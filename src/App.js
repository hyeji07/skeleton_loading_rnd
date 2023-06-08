import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import LayoutDefault from './layout/LayoutDefault';
import './styles/base/resetStyle.scss';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault/>}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
