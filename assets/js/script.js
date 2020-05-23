const credit = document.getElementById('credit');
const header = document.getElementById('header');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');





//hide menu
$(menu).hide();

// slide toggle menu button

$(menuButton).click(function(){
    $(menu).slideToggle();
});

