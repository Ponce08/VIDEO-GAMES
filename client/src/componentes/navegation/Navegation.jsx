import './navegation.css'

const Navegation =({crear_juego, generos, ordenar, buscar_juego, input_search, button_home})=>{
    return(
        <div className='content_nav'>
           
            {crear_juego}

            {input_search}
            {button_home}

            {generos}

            {ordenar}

            {buscar_juego}

        </div>
    )
};

export default Navegation;