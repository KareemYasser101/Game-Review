export class UI{
    constructor(){}

    displayGames(data){
        let gamesData = ``;
        for (let i = 0; i < data.length; i++) {
            gamesData += `
            <div class="col">
              <div data-id = "${data[i].id}" class="card h-100">
                <div class="card-body">
                  <img src="imgs/thumbnail.jpg" class="card-img-top object-fit-cover" alt="...">
                  <div class="name-fees d-flex justify-content-between mt-3">
                    <h5 class="card-title">${data[i].title}</h5>
                    <div class="fees rounded-1 d-flex justify-content-center align-items-center">Free</div>
                  </div>
                  <p class="card-text text-center my-1">${data[i].short_description.split(" ", 6)}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div class="game-type rounded-1">
                    <small class="text-uppercase">${data[i].genre}</small>
                  </div>
                  <div class="platform rounded-1">
                    <small>${data[i].platform}</small>
                  </div>
                </div>
              </div>
            </div>`
        }
        document.getElementById("game-row").innerHTML = gamesData;
    }

    displayDetails(data){
        let gamesDetails = `
        <div class="container">
        <header class="header d-flex justify-content-between align-items-center">
           <h1 class="text-center h3 py-4">Details Game</h1>
           <button class="btn-close btn-close-white" id="btnClose"></button>
        </header>
        <div class="row g-4" id="detailsContent">
        <div class="col-md-4">
          <img src="imgs/thumbnail.jpg" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
          <h3>Title: ${data.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
          <p class="small">${data.description}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>
  
        </div>
      </div>`;
      document.getElementById("game-details").innerHTML = gamesDetails;
    }
}