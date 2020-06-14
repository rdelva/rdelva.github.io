const credit = document.getElementById('credit');
const header = document.getElementById('header');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');




menuButton.addEventListener('click', (e) => {
  

        if(menu.style.display == 'none'){
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }


});


document.addEventListener('scroll', (e) => {
    const header = document.getElementById('header');

    let scrollNum = window.pageYOffset;
    
    if(scrollNum > 150){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
   


}); 