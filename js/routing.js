import {Home, Catalog, GetProduct} from "./home.js"
import {Product} from "./product.js"

export function GoToPage() {
    let pages = document.getElementsByTagName("main")[0].children;
    let hash = document.location.hash.slice(1).split("/");
    let num = hash[1];
    hash = hash[0];
    let body = document.getElementsByTagName("main")[0];
    switch(hash) {
        case "":{
            body.innerHTML = "";
            Home();  
            break;
        }
        case "catalog":{
            body.innerHTML = "";
            Catalog();
            let buttons = document.getElementsByClassName("more");
            for (const v of buttons) {
                v.addEventListener('click', function(e){
                document.location.hash = "#product/" + e.target.id;
                })
            }
            break;
        }
        case "product":{
            body.innerHTML = "";
            GetProduct(num);
            
            break;
        }
    }
}