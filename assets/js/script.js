const credit = document.getElementById('credit');
const header = document.getElementById('header');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const submit = document.getElementById('submit');





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

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.getElementById('form-name');
    let eAddress = document.getElementById('form-email');
    let subject = document.getElementById('form-subject');
    let message = document.getElementById('form-message');


    if(name === '' ){
        console.log('Please fill out your name');
    }

});