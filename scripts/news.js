// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
import {get,create} from "../components/genrealFunctions.js"

get("#navbar").innerHTML = navbar()

let data = JSON.parse(localStorage.getItem("news"))

let appendNews = ({description, title, urlToImage, content}) =>{
    let body = get("#detailed_news");
    body.innerHTML = null;

    let img = create("img")
    img.src = urlToImage;

    let h3 = create("h3")
    h3.innerText = title;

    let p = create("p")
    p.innerText = description
    let p1 = create("p")
    p1.innerText = content

    body.append(img,h3,p,p1)
}
appendNews(data)
let searchCall = (e) => {
    if(e.key == "Enter"){
        let query = get("#search_input").value;
        localStorage.setItem("country",query)
        window.location.href = "./search.html"
    }
}
get("#search_input").addEventListener("keydown",searchCall);
