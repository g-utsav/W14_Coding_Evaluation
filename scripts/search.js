// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {get, create, getData} from "../components/genrealFunctions.js"
import navbar from "../components/navbar.js"

get("#navbar").innerHTML = navbar()


let val = localStorage.getItem("country")
// console.log(val)

getData("",`https://masai-mock-api.herokuapp.com/news?q=${val}`)


let searchCall = (e) => {
    if(e.key == "Enter"){
        let query = get("#search_input").value;
        localStorage.setItem("country",query)
        getData("",`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    }
}
get("#search_input").addEventListener("keydown",searchCall);


