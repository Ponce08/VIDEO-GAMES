const nombre = [{name:"The Witcher 3: Wild Hunt", apellido:'ponce1'}, 
                {name:"Exceptional", apellido:'ponce2'}, 
                {name:"Nintendo Switch", apellido:'ponce3'} ]

const nombre2 = 'EXCEPTIONAL'
let parrafo = '<p>The direct sequel to the Hitman: Blood money, Absolution tells the story of Agent 47, the true intentions of his Agency and how top Agent became a renegade on the run. Unlike previous games in the series, players will get more linear and cinematic experience. The game revolves around objective-based missions, providing various methods of completion. Players can avoid direct confrontation by disguising themselves in other people’s uniforms and use environmental interactions to distract or kill unsuspecting targets. And in case of raising the alarm, players can try to rush the mission with the direct attack, using dozens of available weapons.<br /> Players can use special vision mechanic, called Instinct. It allows seeing through the solid surfaces in order to observe NPC’s, items that can be interacted with and predict the movement of patrolling guards. Absolution provides players with additional challenges and collectibles in order to invite players to explore the maps.</p>'

let parrafo2 = parrafo.replaceAll('<p>', '');
parrafo2 = parrafo2.replaceAll('</p>', '');
parrafo2 = parrafo2.replaceAll('<br />', '');
console.log(parrafo2);