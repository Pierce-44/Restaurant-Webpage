
    
    // DOM cache
    var content = document.getElementById('content');
    var divHeaderContent = document.createElement("div");
    var divSubHeaderContent = document.createElement("div");
    var divMainBodyContent = document.createElement("div");


    function renderHeader () {

        // header container
        content.appendChild(divHeaderContent);
        divHeaderContent.id = "header";

        // DOM cache
        var divHeader = document.getElementById("header")
        var divLeft = document.createElement("div");
        var divRight = document.createElement("div");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a4 = document.createElement("a");
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        var img3 = document.createElement("img");
        var img4 = document.createElement("img");
        var img5 = document.createElement("img");
        var img6 = document.createElement("img");
        var img7 = document.createElement("img");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");

        // header left social media icons
        divHeader.appendChild(divLeft);
        divLeft.id = "headerLeft";
        divLeft.appendChild(a1).appendChild(img1);
        a1.setAttribute('href', 'https://en-gb.facebook.com/');
        a1.setAttribute('target', '_blank');
        img1.setAttribute('src', 'images/f_logo_RGB-White_58.png');
        img1.setAttribute('class', 'logosSM');

        divLeft.appendChild(a2).appendChild(img2);
        a2.setAttribute('href', 'https://www.instagram.com/?hl=en');
        a2.setAttribute('target', '_blank');
        img2.setAttribute('src', 'images/pngfind.com-instagram-png-white-2773517.png');
        img2.setAttribute('class', 'logosSM');

        divLeft.appendChild(a3).appendChild(img3);
        a3.setAttribute('href', 'https://twitter.com/?lang=en');
        a3.setAttribute('target', '_blank');
        img3.setAttribute('src', 'images/2021 Twitter logo - white.png');
        img3.setAttribute('class', 'logosSM');

        divLeft.appendChild(a4).appendChild(img4);
        a4.setAttribute('href', 'https://uk.linkedin.com/');
        a4.setAttribute('target', '_blank');
        img4.setAttribute('src', 'images/linkedin-3-128.png');
        img4.setAttribute('class', 'logosSM');

        // header right 
        divHeader.appendChild(divRight);
        divRight.id = "headerRight";

        divRight.appendChild(img5);
        img5.setAttribute('src', 'images/clock-time-eight-outline.png');
        img5.setAttribute('class', 'logosHeaderRight');
        divRight.appendChild(p1);
        p1.innerHTML = "Currently Open"
        p1.setAttribute('id', 'openText')

        divRight.appendChild(img6);
        img6.setAttribute('src', 'images/google-maps.png');
        img6.setAttribute('class', 'logosHeaderRight');
        divRight.appendChild(p2);
        p2.innerHTML = "2824 Whitman Court, New York"

        divRight.appendChild(img7);
        img7.setAttribute('src', 'images/cellphone.png');
        img7.setAttribute('class', 'logosHeaderRight');
        divRight.appendChild(p3);
        p3.innerHTML = "+1 203-282-3790"
    };

    function renderSubHeader() {

        // sub header container
        content.appendChild(divSubHeaderContent);
        divSubHeaderContent.id = "subHeader";

        // DOM cache
        var divLeft = document.createElement("div");
        var divRight = document.createElement("div");
        var divEmpty = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var img = document.createElement("img");
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        var img3 = document.createElement("img");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");

        // logo
        divSubHeaderContent.appendChild(divLeft).appendChild(img);
        divLeft.setAttribute('id', 'logo');
        img.setAttribute('src', 'images/pizza-ged6b00d13_640.png');
        img.setAttribute('id', 'pizzaLogo');

        // div sub menus
        divSubHeaderContent.appendChild(divRight);
        divRight.setAttribute('id', 'subMenu');
        divSubHeaderContent.appendChild(divEmpty);
        divEmpty.setAttribute('id', 'divEmpty');

        divRight.appendChild(div1)
        div1.setAttribute('class', 'divSubMenu1')      
        div1.appendChild(p1);
        p1.innerHTML = "HOME"
        p1.setAttribute('class', 'subMenuText');
        p1.id = "p1Line";
        div1.appendChild(img1);
        img1.setAttribute('src', 'images/arrow-down-bold.png');
        img1.setAttribute('class', 'arrowIMG');
        img1.setAttribute('id', 'arrowIMG1');


        divRight.appendChild(div2)
        div2.setAttribute('class', 'divSubMenu2')
        div2.appendChild(p2);
        p2.innerHTML = "MENU"
        p2.setAttribute('class', 'subMenuText');
        p2.id = "p2Line";
        div2.appendChild(img2);
        img2.setAttribute('src', 'images/arrow-down-bold.png');
        img2.setAttribute('class', 'arrowIMG');
        img2.setAttribute('id', 'arrowIMG2');

        divRight.appendChild(div3)
        div3.setAttribute('class', 'divSubMenu3')
        div3.appendChild(p3);
        p3.innerHTML = "CONTACT"
        p3.setAttribute('class', 'subMenuText');
        p3.id = "p3Line";
        div3.appendChild(img3);
        img3.setAttribute('src', 'images/arrow-down-bold.png');
        img3.setAttribute('class', 'arrowIMG');
        img3.setAttribute('id', 'arrowIMG3');

    };

    function renderMainBody() {

        // DOM cache
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var div = document.createElement("div");
        var div1 = document.createElement("div");
        var btn1 = document.createElement('div');
        var img = document.createElement('img');

        // main body container and background
        content.appendChild(divMainBodyContent);
        divMainBodyContent.id = "mainBody";

        // upper text and mix text
        divMainBodyContent.appendChild(div);
        div.setAttribute('id', 'mainBodyDiv')

        div.appendChild(p1);
        p1.setAttribute('id', 'upperText');
        p1.innerHTML = 'The Best Place To Satisfy Your Tummy'
        div.appendChild(p2);
        p2.setAttribute('id', 'midText');
        p2.innerHTML = 'Buy One Get One Free Today!'

        // lower div and items
        div.appendChild(div1);
        div1.setAttribute('id', 'lowerDiv');
        div1.appendChild(btn1);
        btn1.id = "buttonDIV"
        btn1.appendChild(p5);
        btn1.appendChild(img);
        img.setAttribute('src', 'images/cart.png');
        img.setAttribute('class', 'cartIMG');
        p5.innerHTML = "Order Now"
        div1.appendChild(p3);
        p3.innerHTML = "£10.99";
        p3.id = "price1";
        div1.appendChild(p4);
        p4.id = "price2";
        p4.innerHTML = "£18.99";
    };



export { renderHeader, renderSubHeader, renderMainBody };