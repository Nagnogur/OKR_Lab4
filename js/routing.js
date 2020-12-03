import {Home, Catalog, GetProduct} from "./home.js"
import {Product} from "./product.js"
import {Cart} from "./cart.js"
import {Order} from "./order.js"

export function GoToPage() {
    let loader = document.getElementById("loader");
    loader.classList.remove('hidden'); 
    let pages = document.getElementsByTagName("main")[0].children;
    let hash = document.location.hash.slice(1).split("/");
    let num = hash[1];
    hash = hash[0];
    let body = document.getElementsByTagName("main")[0];

    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = Array();
    }
    let cartNum = document.getElementById("cart-num");
    cartNum.innerHTML = cart.length;

    switch(hash) {
        case "":{
            body.innerHTML = "";
            Home(); 
            window.setTimeout(function() {
                loader.classList.add('hidden');
            }, 500)
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
            let toCart = document.getElementsByClassName("to-cart");
            for (const v of toCart) {
                v.addEventListener('click', function(e){
                    let id = v.parentNode.parentNode.id.slice(7) - 1;
                    console.log(id);
                    let count = prompt("Enter number:", 1);
                    count = parseInt(count, 10);
                    if (count == NaN){
                        count = 1;
                    }
                    let ord = {
                        "id": id,
                        num: count
                    }
                    let cart = JSON.parse(localStorage.getItem("cart"));
                    if (cart == null) {
                        cart = Array();
                        cart.push(ord);
                    }
                    else {
                        let flag = true;
                        for (const i of cart) {
                            if (i.id == id){
                                i.num += count;
                                flag = false;
                            }
                        }
                        if (flag){
                            cart.push(ord);
                        }
                    }
                    let cartNum = document.getElementById("cart-num");
                    cartNum.innerHTML = cart.length;
                    localStorage.setItem("cart", JSON.stringify(cart));
                })
            }
            window.setTimeout(function() {
                loader.classList.add('hidden');
            }, 500)
            break;
        }
        case "product":{
            body.innerHTML = "";
            GetProduct(num);
            window.setTimeout(function() {
                loader.classList.add('hidden');
            }, 500)
             
            break;
        }
        case "cart":{
            let cartNum = document.getElementById("cart-num");
            if (cartNum.innerHTML == 0) {
                location.hash = "#catalog";
            }
            else{
                body.innerHTML = "";
                Cart();  
                window.setTimeout(function() {
                    loader.classList.add('hidden');
                }, 500)   
            }      
            break;
        }
        case "order":{
            if (cartNum.innerHTML == 0) {
                document.location.hash = "#catalog";
            }
            else if (num == null){
                loader.classList.add('hidden');
                body.innerHTML = "";
                Order();
            }
            break;
        }
        default:{
            document.location.hash = "";  
            break;
        }
    }
}

