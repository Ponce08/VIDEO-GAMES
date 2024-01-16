import './navegation.css'

const Navegation =({crear_juego, ordenar, buscar_juego, input_search, button_home, generosBDD})=>{
    return(
        <div className='content_nav'>
           
            {crear_juego}
            
            {input_search}
            {button_home}
                
            {generosBDD}
            

            {ordenar}

            {buscar_juego}

        </div>
    )
};

export default Navegation;