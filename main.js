import {GoToPage} from "./js/routing.js"

GoToPage();

window.addEventListener("hashchange", GoToPage);

let cart = document.getElementsByClassName("cart")[0];
cart.addEventListener("click", function() {
    document.location.hash = "#cart";
});

