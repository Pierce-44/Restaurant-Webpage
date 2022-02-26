
// DOM cache
var content = document.getElementById('content');
var divContent = document.createElement("div");
var div = document.createElement("div");

function renderContact() {
    
    //contact main container and sub div
    content.appendChild(divContent).appendChild(div);
    divContent.id = "contentContainer";

    //DOM cache
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");

    // phone number and address
    div.appendChild(div1);
    div.appendChild(div2);
    div.id = "contactDiv"

    div1.appendChild(img1);
    div1.className = "contactText";
    img1.setAttribute('src', 'images/cellphone.png');
    img1.setAttribute('class', 'contactPageIcon');
    div1.appendChild(p1);
    p1.innerHTML = "+1 203-282-3790"

    div2.appendChild(img2);7
    div2.className = "contactText";
    img2.setAttribute('src', 'images/google-maps.png');
    img2.setAttribute('class', 'contactPageIcon');
    div2.appendChild(p2);
    p2.innerHTML = "2824 Whitman Court, New York"

    // map image
    div.appendChild(img3);
    img3.setAttribute('src', 'images/map.png');
    img3.setAttribute('class', 'contactMapImg');
};

export { renderContact };