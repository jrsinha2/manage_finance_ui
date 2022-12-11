import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
