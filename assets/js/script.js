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

    let formName = document.getElementById('form-name');
    let eAddress = document.getElementById('form-email');
    let subject = document.getElementById('form-subject');
    let message = document.getElementById('form-message');
  
    let errorName = document.querySelector('.error_name');
    let errorEmail = document.querySelector('.error_email');
    let errorSubject = document.querySelector('.error_subject');
    let errorMessage = document.querySelector('.error_subject')

    //Error Messages   
   
    if(formName.value == ''){   
        errorName.style.display = 'block';
        formName.classList.add('error_highlight');
    } else {
        errorName.style.display = 'hide';
    }

    if(eAddress.value == ''){   
        errorEmail.style.display = 'block';
    } else {
        errorEmail.style.display = 'hide';
    }

    if(subject.value == ''){   
        errorSubject.style.display = 'block';
    } else {
        errorSubject.style.display = 'hide';
    }
    
    if(message.value == ''){   
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'hide';
    }
  

});