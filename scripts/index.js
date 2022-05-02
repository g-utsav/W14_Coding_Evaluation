// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {get, create, getData} from "../components/genrealFunctions.js";
import navbar from "../components/navbar.js";

get("#navbar").innerHTML = navbar()



getData("",`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)


let searchCall = (e) => {
    if(e.key == "Enter"){
        let query = get("#search_input").value;
        localStorage.setItem("country",query)
        window.location.href = "./search.html"
    }
}
get("#search_input").addEventListener("keydown",searchCall);

let side = get("#sidebar>div").children
for(let x of side){
    // console.log(x.id)
    x.addEventListener("click", function(){
        getData("",`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x.id}`)
    })
}
