import { useState } from 'react';
import { useDispatch } from "react-redux";
import './form.css';
import { postNewGame } from '../../redux/actions';


const Form =()=>{

    const dispatch = useDispatch();

    const [ gameData, setGameData ] = useState({
        name:'',
        description:'',
        platforms:'',
        imagen:'',
        fecha_De_Lanzamiento:'',
        rating:''
    });

    const [ validation, setValidation ] = useState({});

    const handleChange = (event)=>{
        setGameData({
            ...gameData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postNewGame(gameData))
    };

    return(
        <div>
          <form className='content_form' action="" onSubmit={handleSubmit}>
            <div className='content_titulo'>
                <h1 className='titulo_form'>Crear Juego</h1>
            </div>
            <div className='content_form_1'>
                <div>
                    <label className='label_form' htmlFor="name">Nombre</label>
                    <input className='input_form' type="text" name='name' value={gameData.name} onChange={handleChange} />
                </div>
                <div className='content_description'>
                    <label className='label_form' htmlFor="description">Descripcion</label>
                    <textarea name="description" id="" cols="30" rows="10" value={gameData.description} onChange={handleChange}></textarea>
                </div>

                <div>
                    <label className='label_form' htmlFor="platforms">Plataformas</label>
                    <input className='input_form' type="text" name='platforms' value={gameData.platforms} onChange={handleChange}/>
                </div>
            </div>

            <div className='content_form_2'>
                <div>
                    <label className='label_form' htmlFor="imagen">Imagen</label>
                    <input className='input_form' type="text" name='imagen' value={gameData.imagen} onChange={handleChange}/>
                </div>
                <div>
                    <label className='label_form' htmlFor="fecha_De_Lanzamiento">Fecha de lanzamiento</label>
                    <input className='input_form' type="date" name='fecha_De_Lanzamiento' value={gameData.fecha_De_Lanzamiento} onChange={handleChange}/>
                </div>
                <div>
                    <label className='label_form' htmlFor="rating">Rating</label>
                    <input className='input_form' type="number" name='rating' value={gameData.rating} onChange={handleChange}/>
                    <div className='content_button'><button className='button_form' type='submit'>SUBMIT</button></div>
                </div>
            </div>
          </form>
        </div>
    )
};

export default Form;