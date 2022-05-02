function get(id){
    return document.querySelector(id);
}
function create(id){
    return document.createElement(id);
}

let getData = async (q,URL) => {
    let res = await fetch(URL)
    let data = await res.json()
    console.log(data.articles)
    appendData(data.articles)
}

let appendData = (data) => {
    let body = get("#results");
    body.innerHTML = null;
    data.forEach(({description, title, urlToImage, content})=> {
        let div  = create("div");
        div.setAttribute("class", "news")
        div.addEventListener("click", function(){
            let n ={ description, title, urlToImage, content }
            localStorage.setItem("news", JSON.stringify(n))
            window.location.href = "./news.html"
        });

        let img = create("img");
        img.src = urlToImage;

        let h3 = create("h3");
        h3.innerText = title;

        let p = create("p");
        p.innerText = description;

        let subDiv = create("div");
        subDiv.append(h3,p)

        div.append(img,subDiv)

        body.append(div);
    });

}




export {get, create, getData}