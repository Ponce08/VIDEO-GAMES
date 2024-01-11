import { Link } from 'react-router-dom';
import './navegation.css'

const Navegation =()=>{
    return(
        <div className='content_nav'>
            <Link to={'/crear_juego'}>
                <button className='button_nav'>Crear Juego</button>
            </Link>

            <Link to={'/generos'}>
                <button className='button_nav'>Generos</button>
            </Link>

            <div className='content_filtros'>
                <label className='label_nav' htmlFor="">Ordenar</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value="">Todos los juegos</option>
                    <option value="">Mayor Rating</option>
                    <option value="">Menor Rating</option>
                    <option value="">De la A-Z</option>
                    <option value="">De la Z-A</option>
                </select>
            </div>

            <div className='content_search'>
                <label className='label_nav' htmlFor="">Search🔍</label>
                <input className='imput_nav' type="text" />
            </div>
        </div>
    )
};

export default Navegation;