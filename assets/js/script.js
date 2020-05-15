const credit = document.getElementById('credit');
const header = document.getElementById('header');

console.log(header);

if(header.classList.contains('header-homepage')){
    console.log('credit');

}

//Changed featured determined by location
if (document.url == 'index.html'){
    console.log('Homepage');
}
