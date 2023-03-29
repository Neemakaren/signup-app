import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Error from './pages/Error';
import Shared from './pages/Shared';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Shared />}>
        <Route path='signup' element={<SignUp setUser={setUser}></SignUp>}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
