function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/${player1}-bg.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/${player2}-bg.svg" alt="Bandeira de ${player2}">
    </li> 
  `
}
let delay= -0.4;
function createCard(date, day, games){
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
         ${games}       
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =   
    createCard("20/11", "domingo", 
    createGame('qatar', '15:00', 'ecuador')) +
    createCard("21/11", "segunda", createGame('england', '09:00', 'iran') +
    createGame('senegal', '12:00', 'netherlands') +
    createGame('united states', '15:00', 'wales')
    ) +
    createCard("22/11", "terça", createGame('cameroon', '15:00', 'brazil') +
    createGame('cameroon', '15:00', 'brazil') +
    createGame('cameroon', '15:00', 'brazil') +
    createGame('cameroon', '15:00', 'brazil')
    )  
