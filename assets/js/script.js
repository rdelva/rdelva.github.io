const credit = document.getElementById('credit');
const header = document.getElementById('header');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

if(header.classList.contains('header-homepage')){
    
}




// toggle menu button

menu.style.display = 'none';  //hide menu
menuButton.addEventListener('click',  (e) => {

    if(menu.style.display === 'none'){
        menu.style.display = 'block';
        console.log('hi');

    } else {
        menu.style.display = 'none';
    }
    
   

});
