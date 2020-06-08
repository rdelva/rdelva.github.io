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
    
    console.log(scrollNum);

    if(scrollNum > 150){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
   


});
/*
console.log(window.onscroll);

function stickyHeader(header){
    //let sticky = header.offsetTop;
    //console.log(sticky);

    //if Scroll Y is more that 120 sticky

  
    let y = window.pageYOffset;
    console.log(y);

   // When the user scrolls the page, execute myFunction
    // window.onscroll = function() {myFunction()};
}
*/



// Get the offset position of the navbar


/*Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


stickyHeader();*/