import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
// componentes
import Welcome from './componentes/welcome/Welcome';
import Home from './componentes/home/Home';
import DetailGame from './componentes/detailGame/DetailGame';
import Form from './componentes/form/Form';
import Generos from './componentes/generos/Generos';
import BuscarGame from './componentes/buscarGame/BuscarGame';


const App =()=> {

  return (
    <div className='content_app'>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<DetailGame/>}/>
        <Route path='/crear_juego' element={<Form/>}/>
        <Route path='/generos' element={<Generos/>}/>
        <Route path='/buscar_juego' element={<BuscarGame/>}/>
      </Routes>
    </div>
  )
}

export default App
