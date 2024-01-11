let nombre = [{name:"The Witcher 3: Wild Hunt", apellido:'ponce1'}, 
                {name:"Exceptional", apellido:'ponce2'}, 
                {name:"Nintendo Switch", apellido:'ponce3'} ]

nombre.push('ponce')
nombre.push(['julieta'])

let obj = { nombre: [...nombre]}

console.log(obj);