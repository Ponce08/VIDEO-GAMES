let nombre = [{name:"The Witcher 3: Wild Hunt", apellido:'ponce1'}, 
                {name:"Exceptional", apellido:'ponce2'}, 
                {name:"Nintendo Switch", apellido:'ponce3'} ]



let obj = nombre.sort((a, b)=>{
    if(a.name < b.name) return -1
})

console.log(nombre);