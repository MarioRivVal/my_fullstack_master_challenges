// Quise hacer un reto un poco más complicado simulando un juego para encontrar el ganador 
// entre un numero introducido de jugadores con un numero introducido de dados
// Utilice bucles for para usar más las bases. Quise introducir mas opciones, pero para proxima vez.


const rollDice = function (playersNumber, dicesNumber) {
  const players = {};

  for (let i = 1; i <= playersNumber; i++) {
    let total = 0;

    for (let j = 0; j <= dicesNumber; j++) {
      total += Math.floor(Math.random() * 6) + 1;
    }

    players[`player_${i}`] = total;
  }

  return players;
};



// -------------------------------------- //

const findWinner  = function(playersNumber, dicesNumber){

  let winner ={
    player: "",
    score: 0
  }

  const scores = rollDice(playersNumber, dicesNumber)

  for (let key in scores){

    // console.log(scores[key])
    
   if(scores[key] > winner.score){
    winner.player = key;
    winner.score = scores[key]
   }
  }

  console.log(`The winner is ${winner.player} with ${winner.score} points`)




}

console.log(`
\n--------------------------------------------------------
RETO MÁS COMPLEJO
--------------------------------------------------------
`);

findWinner(3,2)