import Details from "./Details.js";
import { Ui } from "./UI.js";
export class Home {
    constructor() {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          
          this.Changeactive(link);
          const category=link.getAttribute("data-category");
          this.getgames(category);
        });
      });
      this.ldsring=document.querySelector(".lds-ring");
      this.details=document.getElementById('details');
      this.home=document.getElementById('home');
      this.UI=new Ui;
      this.getgames("MMORPG");
    }
    
   Changeactive(link){
    document.querySelector(".active").classList.remove("active");
          link.classList.add("active");
    
        }
    async getgames(category) {
        this.ldsring.classList.remove("d-none")
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '60b137a943mshd501c3c962b387ep124fffjsna2bcb43cb045',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
  
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
    //   return response;
    //   const category=link.getAttribute("data-category")
    //       const categoryData=await this.getgames(category);
    this.ldsring.classList.add("d-none")

          this.UI.Display(response);
          document.querySelectorAll('.card').forEach(card=>{
            card.addEventListener("click",()=>
            {
                this.Details=new Details;
                this.details.classList.remove("d-none");
                this.home.classList.add("d-none");
                new Details(card.getAttribute('data-id'));
            })
          })
    }
  }
  
  