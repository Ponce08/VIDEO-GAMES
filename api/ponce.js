const nombre = [{name:"The Witcher 3: Wild Hunt", apellido:'ponce1'}, 
                {name:"Exceptional", apellido:'ponce2'}, 
                {name:"Nintendo Switch", apellido:'ponce3'} ]

const nombre2 = 'EXCEPTIONAL'

const modified = nombre.filter((obj)=>{
    return obj.name.toUpperCase() === nombre2
})


console.log(modified);


// {
//     "name":"BioShock",
//     "description":"excelente juego",
//     "platforms":["xbox", "Pc", "play satation"],
//     "imagen":"https://store-images.s-microsoft.com/image/apps.30409.67843716406394594.0a78af59-8cd1-4a9f-a1fe-8a05327d3e7f.17ef10cd-482f-4bbc-ae29-3f827ef750c4?q=90&w=480&h=270",
//     "fecha_De_Lanzamiento":"2007-08-21",
//     "rating":4.09
//   }