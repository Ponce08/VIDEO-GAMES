import './navegation.css'

const Navegation =()=>{
    return(
        <div className='content_nav'>
            <button className='button_crear_juego'>Crear Juego</button>
            <div className='content_filtros'>
            <label htmlFor="">Filtros</label>
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
                <label htmlFor="">Search🔍</label>
                <input type="text" />
            </div>
        </div>
    )
};

export default Navegation;