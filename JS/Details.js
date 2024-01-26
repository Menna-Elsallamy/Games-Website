import { Ui } from "./UI.js";
export default class Details{
    constructor(id){
        document.getElementById('btnClose').addEventListener('click',()=>{
            document.getElementById('details').classList.add("d-none");
            document.getElementById('home').classList.remove("d-none");
        })
      this.ldsring=document.querySelector(".lds-ring");
      this.getdetails(id);
    }
    async getdetails(id){
    this.ldsring.classList.remove("d-none")
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60b137a943mshd501c3c962b387ep124fffjsna2bcb43cb045',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await api.json();
        this.ldsring.classList.add("d-none")
        // console.log(response);
        new Ui().displayDetails(response);
    }

}

