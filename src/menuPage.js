
// DOM cache
var content = document.getElementById('content');
var divContent = document.createElement("div");
var div = document.createElement("div");

function renderMenu() {
    
    //contact main container and grid div
    content.appendChild(divContent).appendChild(div);
    divContent.id = "menuContainer";
    div.id = "gridDiv";

    // DOM cache
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    var img6 = document.createElement("img");
    var img7 = document.createElement("img");
    var img8 = document.createElement("img");
    var h1 = document.createElement("h2");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h2");
    var h4 = document.createElement("h2");
    var h5 = document.createElement("h2");
    var h6 = document.createElement("h2");
    var h7 = document.createElement("h2");
    var h8 = document.createElement("h2");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");


    // pizza 1
    div.appendChild(div1).appendChild(img1);
    div1.appendChild(h1);
    div1.appendChild(p1);
    div1.className = "pizzaDiv";
    h1.innerHTML = "Carne";
    p1.innerHTML = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
    img1.setAttribute('src', 'images/carne.png');
    img1.setAttribute('class', 'pizzaImg');

    // pizza 2
    div.appendChild(div2).appendChild(img2);
    div2.appendChild(h2);
    div2.appendChild(p2);
    div2.className = "pizzaDiv";
    h2.innerHTML = "Colorato";
    p2.innerHTML = "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil";
    img2.setAttribute('src', 'images/colorato.png');
    img2.setAttribute('class', 'pizzaImg');

    // pizza 3
    div.appendChild(div3).appendChild(img3);
    div3.appendChild(h3);
    div3.appendChild(p3);
    div3.className = "pizzaDiv";
    h3.innerHTML = "Colorato";
    p3.innerHTML = "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";
    img3.setAttribute('src', 'images/crema.png');
    img3.setAttribute('class', 'pizzaImg');

    // pizza 4
    div.appendChild(div4).appendChild(img4);
    div4.appendChild(h4);
    div4.appendChild(p4);
    div4.className = "pizzaDiv";
    h4.innerHTML = "Abacaxi";
    p4.innerHTML = "Tomato sauce, Bacon, Pineapple, Olives, Basil";
    img4.setAttribute('src', 'images/disgustoso.png');
    img4.setAttribute('class', 'pizzaImg');

    // pizza 5
    div.appendChild(div5).appendChild(img5);
    div5.appendChild(h5);
    div5.appendChild(p5);
    div5.className = "pizzaDiv";
    h5.innerHTML = "Gamberi";
    p5.innerHTML = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
    img5.setAttribute('src', 'images/gamberi.png');
    img5.setAttribute('class', 'pizzaImg');

    // pizza 6
    div.appendChild(div6).appendChild(img6);
    div6.appendChild(h6);
    div6.appendChild(p6);
    div6.className = "pizzaDiv";
    h6.innerHTML = "Chilli";
    p6.innerHTML = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
    img6.setAttribute('src', 'images/pepe.png');
    img6.setAttribute('class', 'pizzaImg');

    // pizza 7
    div.appendChild(div7).appendChild(img7);
    div7.appendChild(h7);
    div7.appendChild(p7);
    div7.className = "pizzaDiv";
    h7.innerHTML = "Pomodoro";
    p7.innerHTML = "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";
    img7.setAttribute('src', 'images/pomodoro.png');
    img7.setAttribute('class', 'pizzaImg');

    // pizza 8
    div.appendChild(div8).appendChild(img8);
    div8.appendChild(h8);
    div8.appendChild(p8);
    div8.className = "pizzaDiv";
    h8.innerHTML = "Salsiccia";
    p8.innerHTML = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
    img8.setAttribute('src', 'images/salsiccia.png');
    img8.setAttribute('class', 'pizzaImg');
}


export { renderMenu };