export function Order() {
    let main = document.getElementsByTagName("main")[0];

    let row1 = document.createElement("div");
    row1.classList.add("row");
    let name = document.createElement("h1");
    name.innerHTML = "Оформление заказа"; 


    let form = document.createElement("form");
    form.classList.add("col-md-8");
    form.appendChild(name);
    let formRow1 = document.createElement("div");
    formRow1.classList.add("form-row");

    let formGroup1 = document.createElement("div");
    formGroup1.classList.add("form-group", "col-md-4");
    let nameL = document.createElement("label");
    nameL.htmlFor = "inputName";
    nameL.innerText = "ФИО";
    let nameI = document.createElement("input");
    nameI.type = "text";
    nameI.classList.add("form-control");
    nameI.id = "inputName";
    nameI.placeholder = "ФИО";
    nameI.required = true;

    let formGroup2 = document.createElement("div");
    formGroup2.classList.add("form-group", "col-md-4");
    let phoneL = document.createElement("label");
    phoneL.htmlFor = "inputPhone";
    phoneL.innerText = "Телефон";
    let phoneI = document.createElement("input");
    phoneI.type = "tel";
    phoneI.classList.add("form-control");
    phoneI.id = "inputPhone";
    phoneI.pattern = "[0-9]{10}";
    phoneI.placeholder = "1234567890";
    phoneI.required = true;

    let formGroup3 = document.createElement("div");
    formGroup3.classList.add("form-group", "col-md-4");
    let emailL = document.createElement("label");
    emailL.htmlFor = "inputEmail";
    emailL.innerText = "Email";
    let emailI = document.createElement("input");
    emailI.type = "email";
    emailI.classList.add("form-control");
    emailI.id = "inputEmail";
    emailI.placeholder = "qweq@gmail.com";
    emailI.required = true;

    let formGroup4 = document.createElement("div");
    formGroup4.classList.add("form-group", "col-md-12");
    formGroup4.style.padding = 0;
    let addressL = document.createElement("label");
    addressL.htmlFor = "inputAddress";
    addressL.innerText = "Адрес";
    let addressI = document.createElement("input");
    addressI.type = "text";
    addressI.classList.add("form-control");
    addressI.id = "inputAddress";
    addressI.placeholder = "1234 Main St";
    addressI.required = true;

    let formRow2 = document.createElement("div");
    formRow2.classList.add("form-row");

    let formGroup5 = document.createElement("div");
    formGroup5.classList.add("form-group", "col-md-6");
    let dateL = document.createElement("label");
    dateL.htmlFor = "inputDate";
    dateL.innerText = "Дата";
    let dateI = document.createElement("input");
    dateI.type = "date";
    dateI.classList.add("form-control");
    dateI.id = "inputDate";
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    dateI.min = today;
    let date = new Date();
    date.setDate(date.getDate() + 7);
    dd = String(date.getDate()).padStart(2, '0');
    mm = String(date.getMonth() + 1).padStart(2, '0');
    yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd;
    dateI.max = date;
    dateI.required = true;

    let formGroup6 = document.createElement("div");
    formGroup6.classList.add("form-group", "col-md-6");
    let timeL = document.createElement("label");
    timeL.htmlFor = "inputTime";
    timeL.innerText = "Дата";
    let timeI = document.createElement("input");
    timeI.type = "time";
    timeI.classList.add("form-control");
    timeI.id = "inputTime";
    timeI.min = "9:00";
    timeI.max = "18:00";
    timeI.required = true;

    formGroup1.appendChild(nameL);
    formGroup1.appendChild(nameI);
    formRow1.appendChild(formGroup1);
    form.appendChild(formRow1);
    formGroup2.appendChild(phoneL);
    formGroup2.appendChild(phoneI);
    formRow1.appendChild(formGroup2);
    form.appendChild(formRow1);
    formGroup3.appendChild(emailL);
    formGroup3.appendChild(emailI);
    formRow1.appendChild(formGroup3);
    form.appendChild(formRow1);

    formGroup4.appendChild(addressL);
    formGroup4.appendChild(addressI);
    form.appendChild(formGroup4);

    formGroup5.appendChild(dateL);
    formGroup5.appendChild(dateI);
    formRow2.appendChild(formGroup5);
    formGroup6.appendChild(timeL);
    formGroup6.appendChild(timeI);
    formRow2.appendChild(formGroup6);
    form.appendChild(formRow2);
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Заказать";

    form.appendChild(submit);
    row1.appendChild(form);

    let cart = document.createElement("div");
    cart.classList.add("col-md-4");
    cart.id = "cart";
    row1.appendChild(cart);
    main.appendChild(row1);

    submit.addEventListener("click", async function() {
      let cartContent = JSON.parse(localStorage.getItem("cart"));
      let order = {
        name: nameL.value,
        phone: phoneL.value,
        email: emailL.value,
        address: addressL.value,
        date: dateL.value,
        time: timeL.value,
        products: cartContent
      };
      
      let response = await fetch('https://my-json-server.typicode.com/Nagnogur/OKR_Lab4/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(order)
      });
      
      let result = await response.json();
      location.hash = "#order/" + result.id;
    })
    Products();
}

function Order1(products) {
  let orderComp = document.getElementById("cart");
  let name = document.createElement("h1");
  name.innerHTML = "Ваш заказ:";   
  orderComp.appendChild(name);

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) {
      cart = Array();
  }
  let i = 0;
  let ul = document.createElement("ul");
  ul.classList.add("order-cart");
  orderComp.appendChild(ul);
  let sum = 0;
  for (const e of cart) {
    let prod = products[e.id];

    let li = document.createElement("li");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = prod.productName;

    let price = document.createElement("p");
    price.classList.add("card-text");
    let pr = roundNumber(prod.price * e.num, 2);
    price.innerText = e.num + " x " + prod.price + " = " + pr + " грн";
    sum += pr;
    li.appendChild(title);
    li.appendChild(price);
    ul.appendChild(li);
    i++;
  }
  let li = document.createElement("li");
  let price = document.createElement("p");
  price.classList.add("card-text");
  price.innerText = "Ціна: " + sum + " грн";
  li.appendChild(price);
  ul.appendChild(li);
}

async function Products(){
  const url = 'https://my-json-server.typicode.com/Nagnogur/OKR_Lab4/products';

  let response = await fetch(url);
  let json;
  if (response.ok) { 
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  Order1(json);
  return json;
}

function roundNumber(num, dec) {
  var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  return result;
}