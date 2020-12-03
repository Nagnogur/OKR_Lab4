import {Product} from "./product.js"

export async function GetProduct(num){
    const url = 'https://my-json-server.typicode.com/Nagnogur/OKR_Lab4/products';

    let response = await fetch(url);
    let json;
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      json = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    let i = 0;
    for (const e of json) {
        if (e.url == num){
            Product(e, i);
            return e;
        }
        i++;
    }
}

export function Home(){
    console.log(123);
    document.getElementsByTagName("main")[0].innerHTML = `<div class="home-page" id="">
    <div class="slider">
        <img class="left-arrow" src="img/arrow.png" alt="">
        <div class="slide-content">
            <div class="slide-img-cont">
                <img class="slide-img" src="img/slider1.jpg" style="left: 0%;" alt="">
            </div>
            <div class="slide-img-cont">
                <img class="slide-img" src="img/slider2.jpg" style="left: 100%;" alt="">
            </div>
        </div>
        <img class="right-arrow" src="img/arrow.png" alt="">  
    </div>
    <h1>Рекоендованные товары</h1>
    <div class="recomended-products">
        <div class="card product-list" id="product1">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product2">
            <img class="card-img-top" src="img/product-list2.jpg" alt="">
            <h5 class="card-title">Пицца Маргарита</h5>
            <p class="card-text">Моцарелла, Соус Domino's</p>
            <button class="btn btn-link more">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product3">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">124 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product4">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
    </div>
</div>`
}

export function Catalog(){
    console.log(321);
    document.getElementsByTagName("main")[0].innerHTML = `<div class="catalog" id="catalog">
    <h1>Пицца: Классические</h1>
    <div class="recomended-products">
        <div class="card product-list" id="product1">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product2">
            <img class="card-img-top" src="img/product-list2.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_Mozzarella">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product3">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
    </div>
    <h1>Пицца: Фирменные</h1>
    <div class="recomended-products">
        <div class="card product-list" id="product4">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product5">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product6">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price bold">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product7">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product8">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
    </div>
    <h1>Пицца: Легенды</h1>
    <div class="recomended-products">
        <div class="card product-list" id="product9">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product10">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product11">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product12">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product13">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product14">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
    </div>
    <h1>Пицца: Премиум</h1>
    <div class="recomended-products">
        <div class="card product-list" id="product15">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
        <div class="card product-list" id="product16">
            <img class="card-img-top" src="img/product-list1.jpg" alt="">
            <h5 class="card-title">Пицца Пепперони с томатами</h5>
            <p class="card-text">Моцарелла, Пепперони, помидоры, Соус Барбекю</p>
            <button class="btn btn-link more" id="pizza_pepperoni">Подробнее</button>
            <div class="row">
                <p class="card-text col-sm-6 price">93 грн</p>
                <button class="col-sm-5 to-cart btn btn-danger">В корзину</button>
            </div>
        </div>
    </div>
</div>`
}