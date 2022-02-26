import { renderHeader, renderSubHeader, renderMainBody } from './homePage';
import { renderContact } from './contactPage';
import { renderMenu } from './menuPage';


var loadPage = (function () {
    renderHeader();
    renderSubHeader();
    renderMainBody();
})();

var tabControl = (function () {
    var homeStatus = "live";
    var contactStatus = "deleted";
    var menuStatus = "deleted";

    // DOM cache
    var menu = document.querySelector('.divSubMenu2');
    var menuBtn = document.getElementById('buttonDIV');
    var home = document.querySelector('.divSubMenu1');
    var contact = document.querySelector('.divSubMenu3');
    var mainBodyDiv = document.getElementById('mainBody');
    var homeUnderline = document.getElementById('p1Line');
    var menuUnderline = document.getElementById('p2Line');
    var menuArrowLine = document.getElementById('arrowIMG2');
    var contactUnderline = document.getElementById('p3Line');
    var contactArrowLine = document.getElementById('arrowIMG3');
    var homeArrowline = document.getElementById('arrowIMG1');


    // home load eventListner
    home.addEventListener('click', homeLoad);

    // menu load eventListner
    menu.addEventListener('click', menuLoad);
    menuBtn.addEventListener('click', menuLoad);

    // contact load eventListner
    contact.addEventListener('click', contactLoad);


    // home load function 
    function homeLoad() {
        
        // removing contact page content
        if (contactStatus === "live") {
            var contentBodyDiv = document.getElementById('contactDiv');
            var contentBody = document.getElementById('contentContainer');
    
            while (contentBodyDiv.firstChild) {
                contentBodyDiv.removeChild(contentBodyDiv.lastChild);
            }
            contentBody.remove();
        }

        // removing menu page content
        if (menuStatus === "live") {
            var menuBodyDiv = document.getElementById('gridDiv');
            var menuBody = document.getElementById('menuContainer');
    
            while (menuBodyDiv.firstChild) {
                menuBodyDiv.removeChild(menuBodyDiv.lastChild);
            }
            menuBody.remove();
        }
        
        // rendering the home main body content
        if (homeStatus === "deleted") {
            renderMainBody();
        };

        homeStatus = "live";
        contactStatus = "deleted";
        menuStatus = "deleted";

        // css for the home/menu/contact tags
        homeUnderline.style.border = null;
        homeArrowline.style.border = null;
        menuUnderline.style.borderBottom = null;
        menuArrowLine.style.borderBottom = null;
        contactUnderline.style.borderBottom = null;
        contactArrowLine.style.borderBottom = null;
        menuBtn = document.getElementById('buttonDIV');
        menuBtn.addEventListener('click', menuLoad);
    };


    // menu load fucntion
    function menuLoad() {

        // removing contact page content
        if (contactStatus === "live") {
            var contentBodyDiv = document.getElementById('contactDiv');
            var contentBody = document.getElementById('contentContainer');
    
            while (contentBodyDiv.firstChild) {
                contentBodyDiv.removeChild(contentBodyDiv.lastChild);
            }
            contentBody.remove();

        }

        // rendering the home main body content
        if (menuStatus === "deleted") {
            renderMenu();
        };

        // removing the home main body conent
        while (mainBodyDiv.firstChild) {
            mainBodyDiv.removeChild(mainBodyDiv.lastChild);
        }
        mainBodyDiv.remove();

        menuStatus = "live";
        homeStatus = "deleted";
        contactStatus = "deleted";

        // css for the home/menu/contact tags
        contactUnderline.style.borderBottom = null;
        contactArrowLine.style.borderBottom = null;
        homeUnderline.style.border = "0px";
        homeArrowline.style.border = "0px";
        menuUnderline.style.borderBottom = "3px solid white";
        menuArrowLine.style.borderBottom = "3px solid white";

    };

    // contact load function
    function contactLoad() {

        // removing the home main body conent
        while (mainBodyDiv.firstChild) {
            mainBodyDiv.removeChild(mainBodyDiv.lastChild);
        }
        mainBodyDiv.remove();

        // rendering the contact content
        if (contactStatus === "deleted") {
            renderContact();
        };

        // removing the menu content
        if (menuStatus === "live") {
            var menuBodyDiv = document.getElementById('gridDiv');
            var menuBody = document.getElementById('menuContainer');
    
            while (menuBodyDiv.firstChild) {
                menuBodyDiv.removeChild(menuBodyDiv.lastChild);
            }
            menuBody.remove();
        }
        
        // css for the home/menu/contact tags
        homeUnderline.style.border = "0px";
        homeArrowline.style.border = "0px";
        menuUnderline.style.borderBottom = null;
        menuArrowLine.style.borderBottom = null;
        contactUnderline.style.borderBottom = "3px solid white";
        contactArrowLine.style.borderBottom = "3px solid white";

        homeStatus = "deleted";
        menuStatus = "deleted";
        contactStatus = "live";
    };

})();