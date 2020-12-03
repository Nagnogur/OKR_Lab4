export function Product(pizza, id){
    let main = document.getElementsByTagName("main")[0];
    let name = document.createElement("h1");
    name.innerHTML = pizza.productName;
    let img = document.createElement("img");
    img.classList.add('product-img');
    img.classList.add('col-sm-6');
    img.src = pizza.images;
    let row0 = document.createElement("div");
    row0.classList.add('row');
    let row1 = document.createElement("div");
    row1.classList.add('row');
    let price = document.createElement("h1");
    price.classList.add('price');
    price.classList.add('col-sm-6');
    price.innerText = pizza.price + " грн";
    let grid = document.createElement("div");
    grid.classList.add('recomended-products');
    grid.classList.add('col-sm-6');
    grid.classList.add('ingredient-grid');
    fetch('https://my-json-server.typicode.com/Nagnogur/OKR_Lab4/ingredients').then(response => response.json()).then(result => { 
    for (const i in pizza.ingredients){
        let card = document.createElement("div");
        card.classList.add('card');
        card.classList.add('ingredient-text');

        let cardImg = document.createElement("img");
        cardImg.src = "img/ingredients/" + result[i].image;
        cardImg.classList.add('card-img-top');
        cardImg.classList.add('ingredient-img');
        
        let cardText = document.createElement("p");
        cardText.innerText = result[i].name;
        cardText.classList.add('card-text');
        cardText.classList.add('ingredient-text');
        card.appendChild(cardText);
        card.appendChild(cardImg);
        grid.appendChild(card);
    } 
});
    
    let button = document.createElement("button");
    button.innerText = "Добавить в корзину";
    button.classList.add('btn');
    button.classList.add('btn-danger');
    button.classList.add('col-sm-3');
    button.classList.add('button-pay');
    button.addEventListener('click', function() {
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

    main.appendChild(name);
    row0.appendChild(img);
    row0.appendChild(grid);
    main.appendChild(row0);
    row1.appendChild(price);
    row1.appendChild(button);
    main.appendChild(row1);
}