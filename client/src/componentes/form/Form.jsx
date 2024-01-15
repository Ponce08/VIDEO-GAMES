import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './form.css';
import { getGeneros, postNewGame } from '../../redux/actions';
import validate from '../validation/validation';
import { Link } from 'react-router-dom';


const generosNewGame = [];
const Form =()=>{
    
// Hooks y estado global
    const dispatch = useDispatch();
    const { generos } = useSelector((state)=>state);

// Estados locales
    const [ validation, setValidation ] = useState({});
    const [ gameData, setGameData ] = useState({
        name:'',
        description:'',
        platforms:'',
        imagen:'',
        fecha_De_Lanzamiento:'',
        rating:'',
        generosBDD:[]
    });

// Control de inputs
    const handleChange = (event)=>{
        setGameData({
            ...gameData,
            [event.target.name]: event.target.value
        });
    };
    
    const handleGenres = (event)=>{
        let GENERO = event.target.value
        let generoEncontrado = generosNewGame.includes(GENERO);
        if(!generoEncontrado){
            generosNewGame.push(GENERO)
            setGameData({
                ...gameData,
                generosBDD:generosNewGame
            })
        }else{
            for (let i = 0; i < generosNewGame.length; i++) {
                if(generosNewGame[i] === GENERO){
                    generosNewGame.splice(i, 1)
                    setGameData({
                        ...gameData,
                        generosBDD:generosNewGame
                    })
                }
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch(postNewGame(gameData))
        
        alert('JUEGO CREADO CORECTAMENTE')
    };
    
    useEffect(()=>{
        dispatch(getGeneros())
    }, [])
    
    
    useEffect(() => {
        const { name, description, imagen, fecha_De_Lanzamiento, rating } = validate(gameData);
        if(gameData.name !== '' || gameData.description !== '' || gameData.imagen !== '' || gameData.fecha_De_Lanzamiento !== '' || gameData.rating !== ''){
            setValidation({
                name: name,
                description:description,
                imagen:imagen,
                fecha_De_Lanzamiento:fecha_De_Lanzamiento,
                rating:rating,
            })
        }else{
            setValidation({})
        }
    }, [gameData]);
    
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
                    {validation.name && <div className="cont-p"><p className="p-form">{validation.name}</p></div>}
                </div>
                <div className='content_description'>
                    <label className='label_form' htmlFor="description">Descripcion</label>
                    <textarea name="description" id="" cols="30" rows="10" value={gameData.description} onChange={handleChange}></textarea>
                    {validation.description && <div className="cont-p"><p className="p-form">{validation.description}</p></div>}
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
                    {validation.imagen && <div className="cont-p"><p className="p-form">{validation.imagen}</p></div>}
                </div>
                <div>
                    <label className='label_form' htmlFor="fecha_De_Lanzamiento">Fecha de lanzamiento</label>
                    <input className='input_form' type="date" name='fecha_De_Lanzamiento' value={gameData.fecha_De_Lanzamiento} onChange={handleChange}/>
                    {validation.fecha_De_Lanzamiento && <div className="cont-p"><p className="p-form">{validation.fecha_De_Lanzamiento}</p></div>}
                </div>
                <div>
                    <label className='label_form' htmlFor="rating">Rating</label>
                    <input className='input_form' type="number" name='rating' value={gameData.rating} onChange={handleChange}/>
                    {validation.rating && <div className="cont-p"><p className="p-form">{validation.rating}</p></div>}
                </div>

                <div className='content_generos'>
                    <h2 className='label_titulo_genero'>GENEROS</h2>
                    {generos.map((genero)=>{return <div className='conten_generos_2' key={genero.id}>
                                                        <input className='input_genero' type="checkbox" name='generos' value={`${genero.name}`} onChange={handleGenres}/>
                                                        <label className='label_genero' htmlFor="generos">{genero.name}</label>
                                                   </div>})}

                </div>
            </div>
                    <div className='content_button'><button className='button_form' type='submit' disabled={!gameData.name || !gameData.description || !gameData.imagen || !gameData.fecha_De_Lanzamiento || !gameData.rating}>SUBMIT</button></div>
                    <Link to={'/home'}><div className='content_button'><button className='button_form' type='text'>Home</button></div></Link>

          </form>
        </div>
    )
};

export default Form;