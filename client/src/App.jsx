import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
// componentes
import Welcome from './componentes/welcome/Welcome';
import Home from './componentes/home/Home';
import DetailGame from './componentes/detailGame/DetailGame';
import Form from './componentes/form/Form';
import Navegation from './componentes/navegation/Navegation';


const App =()=> {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className='content_app'>

    
      {/* {pathname !== '/' && <Navegation/>} */}
    
      

     
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<DetailGame/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    
    </div>
  )
}

export default App
