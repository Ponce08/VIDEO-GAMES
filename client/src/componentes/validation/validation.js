const validate = (gameData) => {
    const validation = {};
    
    // nombre
    if(gameData.name.length > 35) {
        validation.name = 'Debe ser menor que 35 caracteres'
    }

    if(gameData.name.length === 0) {
        validation.name = 'Campo Requerido'
    }

    // descipcion
    if(gameData.description.length > 1000) {
        validation.description = 'la descripcion debe ser menor a 1000 caracteres'
    }

    if(gameData.description.length === 0) {
        validation.description = 'Campo Requerido'
    }

    // imagen
    if(!gameData.imagen.includes('https://')) {
        validation.imagen = 'Debe ser una URL'
    }

    if(gameData.imagen.length === 0) {
        validation.imagen = 'Campo Requerido'
    }

    // fecha y rating
    if(gameData.fecha_De_Lanzamiento.length === 0) {
        validation.fecha_De_Lanzamiento = 'Campo Requerido'
    }

    if(gameData.rating.length === 0) {
        validation.rating = 'Campo Requerido'
    }

    if(gameData.rating === '') {
        validation.rating = 'Debe ser mayor a 0'
    }

    return validation;
};

export default validate;