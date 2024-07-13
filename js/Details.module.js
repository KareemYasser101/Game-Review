import { UI } from "./UI.module.js";

export class Details {
    ui = new UI();
    loadingScreen = document.querySelector(".lds-dual-ring");
    constructor(){}

    async getCategoryDetails(id){
        this.loadingScreen.classList.remove("d-none");
        const categoryDetails = await this.getDetails(id);
        this.loadingScreen.classList.add("d-none");
        console.log(categoryDetails);
        this.ui.displayDetails(categoryDetails);
        // add event listener to close buttons to close details section
        document.getElementById("btnClose").addEventListener("click", ()=>{
            document.getElementById("game-content").classList.remove("d-none");
            document.getElementById("games").classList.remove("d-none");

            document.getElementById("game-details").classList.add("d-none");
        })
    }



    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0dfed4e186mshd971d6d72519e71p1bf81cjsn984b97475ecb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const data = await response.json();

        return data;
    }
}