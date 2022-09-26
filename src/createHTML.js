// Manager card
const createManager = function (manager) {
  return `
  <div class="card col-3">
    <div class="card-header" style="background-color: #89E8F6">
      <h3>${manager.name}</h3>
      <h3>Manager</h3>
    </div>
    <div class="card-body">
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
  `;
};
// Engineer card
const createEngineer = function (engineer) {
  return `
  <div class="card col-3">
    <div class="card-header" style="background-color: #89E8F6">
      <h3>${engineer.name}</h3>
      <h3>Engineer</h3>
    </div>
    <div class="card-body">
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="officeNumber">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>
  `;
};
// Intern card
const createIntern = function (intern) {
  return `
  <div class="card col-3">
    <div class="card-header" style="background-color: #89E8F6">
      <h3>${intern.name}</h3>
      <h3>Intern</h3>
    </div>
    <div class="card-body">
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="officeNumber">School: ${intern.school}</p>
    </div>
  </div>
  `
};

createHTML = (data) => {
  cardArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createManager(employee);
      cardArray.push(managerCard);
    }
    if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);
      cardArray.push(engineerCard);
    }
    if (role === 'Intern') {
      const internCard = createIntern(employee);
      cardArray.push(internCard);
    }
  }
  const teamCards = cardArray.join('');
  const createTeam = createTeamPage(teamCards);
  return createTeam;
};

// Create HTML
const createTeamPage = function (teamCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
      <nav class="navbar" style="background-color: #e3f2fd;">
        <span class="navbar-brand h1">Team Profile</span>
      </nav>
    </header>
  
    <main>
      <div class="container">
        <div class="row justify-content-center">
          ${teamCards}
        </div>
      </div>
    </main>
    
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  </body>
  </html>
  `;
};

module.exports = createHTML;