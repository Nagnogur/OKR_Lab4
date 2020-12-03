export function Cart(){
    GetProducts();
}

 function Cart1(products){
    let main = document.getElementsByTagName("main")[0];
    let name = document.createElement("h1");
    name.innerHTML = "Корзина";

    let row0 = document.createElement("div");
    row0.classList.add('row');

    

    main.appendChild(name);
    
    main.appendChild(row0);


    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = Array();
    }
    let i = 0;
    for (const e of cart) {
        let prod = products[e.id];

        let grid = document.createElement("div");
        grid.classList.add('col-lg-3');
        grid.classList.add('col-md-4');
        grid.classList.add('col-sm-6');
        grid.id = i;

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = prod.images;

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = prod.productName;

        let price = document.createElement("p");
        price.classList.add("card-text");
        price.innerText = roundNumber(prod.price * e.num, 2) + " грн (" + e.num + ")";

        let del = document.createElement("button");
        del.classList.add("btn", "btn-light");
        del.innerHTML = "Удалить";
        del.id = i;
        cardBody.appendChild(price);
        cardBody.appendChild(title);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        grid.appendChild(cardDiv);
        row0.appendChild(grid);
        cardBody.appendChild(del);
        del.addEventListener('click', function() {
            cart.splice(this.id, 1);
            let cartNum = document.getElementById("cart-num");
            cartNum.innerHTML = cart.length;
            localStorage.setItem("cart", JSON.stringify(cart));
            row0.removeChild(document.getElementById(this.id));
            if (cartNum.innerHTML == 0) {
                location.hash = "#catalog";
            }
        })


        
        i++;
    }
    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger", "col-sm-6", "col-md-3", "col-lg-2");
    button.innerText = "Оформить заказ";
    button.onclick = function() {
        location.hash = "#order";
    };
    main.appendChild(button);
}

async function GetProducts(){
    const url = 'https://my-json-server.typicode.com/Nagnogur/OKR_Lab4/products';

    let response = await fetch(url);
    let json;
    if (response.ok) { 
      json = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    Cart1(json);
    return json;
}

function roundNumber(num, dec) {
    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
    return result;
}