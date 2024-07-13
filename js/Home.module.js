import { Details } from "./Details.module.js";
import { UI } from "./UI.module.js";


export class Home {
    ui = new UI();
    details = new Details();
    static firstEnterToWebsite = true;
    loadingScreen = document.querySelector(".lds-dual-ring");
    constructor() {
        if(Home.firstEnterToWebsite){
            this.getCategoryData("mmorpg");
            Home.firstEnterToWebsite = false;
        }
        document.querySelectorAll(".nav-link").forEach( link => {
            link.addEventListener("click", ()=>{
                document.querySelector(".navbar-nav .active").classList.remove("active");
                link.classList.add("active");
                const category = link.getAttribute("data-category");

                this.getCategoryData(category);
            })
        });
    }

    async getCategoryData(category){
        this.loadingScreen.classList.remove("d-none");
        const categoryData = await this.getGames(category);
        this.loadingScreen.classList.add("d-none");
        console.log(categoryData);
        this.ui.displayGames(categoryData);
        // add event listener to cards to show details on click
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", ()=>{
                document.getElementById("game-content").classList.add("d-none");
                document.getElementById("games").classList.add("d-none");

                document.getElementById("game-details").classList.remove("d-none");
                const id = card.getAttribute("data-id");
                this.details.getCategoryDetails(id);
            })
        })
    }
   

    async getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0dfed4e186mshd971d6d72519e71p1bf81cjsn984b97475ecb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const data = await response.json();
        return data;
    }
}