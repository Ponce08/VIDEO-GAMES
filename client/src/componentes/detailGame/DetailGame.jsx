import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import './detailGame.css';
import { getById } from "../../redux/actions";
import { useParams } from "react-router-dom";


const DetailGame =()=>{

    const { gameID } = useSelector((state)=>state);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(getById(params.id))
    }, [params.id]);

    // limpieza de parrafo:
    let description2 = gameID?.description?.replaceAll('<p>', '');
     description2 = description2?.replaceAll('</p>', '');
     description2 = description2?.replaceAll('<br />', '');

    return (
        <div className="content_detail">
            <img className='image_detail' src={gameID?.image} alt={gameID?.name} />
            <h3 className="ID_detail">ID:{gameID?.id}</h3>
            <h1 className="name_detail">{gameID?.name}</h1>
            <h3 className="plataf_detail">Plataformas: {gameID?.platforms?.map((platform)=>{return <span key={platform.platform.id}>{platform.platform.name} </span>})}</h3>
            <p className="descrip_detail">{description2}</p>
            <h3>Fecha de Lanzamiento: {gameID?.released}</h3>
            <h3>Rating: {gameID?.rating}</h3>
            <h3>GENEROS: {gameID?.genres?.map((genre)=>{return <span key={genre.id}>{genre.name} </span>})}</h3>
        </div>
    )
};

export default DetailGame;