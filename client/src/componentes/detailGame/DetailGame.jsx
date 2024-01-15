import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import './detailGame.css';
import { getById, stateNull } from "../../redux/actions";
import { useParams } from "react-router-dom";


const DetailGame =()=>{

    const { gameID } = useSelector((state)=>state);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(getById(params.id))
        return ()=> dispatch(stateNull())
    }, [params.id]);

    // limpieza de parrafo:
    let description2 = gameID?.description?.replaceAll('<p>', '');
     description2 = description2?.replaceAll('</p>', '');
     description2 = description2?.replaceAll('<br />', '');
     description2 = description2?.replaceAll('<br/>', '');
     description2 = description2?.replaceAll('<br>', '');



    return (
        <div>
            <div className="content_detail">
                <div className="content_img_descrip">
                    <img className='image_detail' src={gameID?.image} alt={gameID?.name} />
                </div>
                <div className="content_information">
                    <h3 className="h3_detail"><span className="span_detail">ID: </span>{gameID?.id}</h3> 
                    <h1 className="name_detail">{gameID?.name}</h1>
                    <h3 className="h3_detail"><span className="span_detail">Plataformas: </span>{gameID?.platforms?.map((platform)=>{return <span className="span_platform" key={platform.platform.id}>*{platform.platform.name}</span>})}</h3>
                    <h3 className="h3_detail"><span className="span_detail">Fecha de Lanzamiento: </span>{gameID?.released}</h3>
                    <h3 className="h3_detail"><span className="span_detail">Rating: </span>{gameID?.rating}</h3>
                    <h3 className="h3_detail"><span className="span_detail">GENEROS: </span>{gameID?.genres?.map((genre)=>{return <span className="span_genre" key={genre.id}>*{genre.name} </span>})}</h3>
                </div>
            </div>
                <p className="descrip_detail">{description2}</p>
        </div>
    )
};

export default DetailGame;