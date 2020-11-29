export function Product(pizza){
    let main = document.getElementsByTagName("main")[0];
    let name = document.createElement("h1");
    name.innerHTML = pizza.productName;
    let img = document.createElement("img");
    img.classList.add('product-img');
    img.src = pizza.images;
    main.appendChild(name);
    main.appendChild(img);
}