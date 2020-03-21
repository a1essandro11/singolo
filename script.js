document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
document.getElementById('vert_on').onclick = vertOn;
document.getElementById('black_vert').onclick = vertOn;
document.getElementById('hor_on').onclick = horOn;
document.getElementById('black_hor').onclick = horOn;
document.getElementById('f1').addEventListener('submit',sayInfo);


let button_container= document.getElementById('pick');

console.log(button_container);

let buttons=button_container.getElementsByTagName('li');
console.log(buttons);

let current_page=document.location.hash;


for (let index = 0; index < buttons.length; index++) { 
    if (current_page.length) {
        
        if (buttons[index].className.includes(current_page)) {
            buttons[index].className += ' active';
        }
    }
    else{
        current_page = '#home';
        if (buttons[index].className.includes(current_page)) {
            buttons[index].className += ' active';
        }
        
    }
    buttons[index].addEventListener('click',function(){
        let current = button_container.getElementsByClassName('active');
        current[0].className=current[0].className.replace(' active', '');
        this.className += ' active';
    })    
}

let image_container = document.getElementsByClassName('portfolio__table')[0];

image_container.addEventListener('click',function(event){
    console.log(event.target.parentElement);
        // if (event.target.tagName {
            
        // }
        console.log(event.target);

    let image_wrapper = event.target.parentElement;
    let image_wrappers = image_container.getElementsByClassName('portfolio__item');
    for (let index = 0; index < image_wrappers.length; index++) {
        if (image_wrappers[index].className.includes('active')) {
          image_wrappers[index].className=  image_wrappers[index].className.replace(' active', '');
        }   
    }    

    image_wrapper.className += " active";

});


function sayInfo(e){
    e.preventDefault();
    var sub = document.getElementById('subject').value;
    var subject='Тема: '+sub;
    if (sub==='') {
        subject="Без темы";
    }
    
   
    var desc = document.getElementById('describe').value;

    var describe='Описание: '+desc;
    if (desc==='') {
        describe="Без описания"
    }
    var message='Письмо отправлено \n'+subject+'\n'+describe;

alert(message);
document.getElementById('describe').value='';
document.getElementById('subject').value='';
document.getElementById('name').value='';
document.getElementById('email').value='';



}

document.getElementById('last_button').onclick = lastOn;
document.getElementById('last_screen').onclick = lastOn;

var screen_on_l=1;
function lastOn(){
    var screenL= document.getElementById('last_screen');
   switch (screen_on_l) {

    case 0:
        screen_on_l=1;
        screenL.style.backgroundColor='transparent';
        break;
       case 1:
           screen_on_l=0;
        screenL.style.backgroundColor='black';
           break; 
   }  
}


var screen_on_h=1;
function horOn(){
    var screenH= document.getElementById('black_hor');
   switch (screen_on_h) {

    case 0:
        screen_on_h=1;
        screenH.style.backgroundColor='transparent';
        break;
       case 1:
           screen_on_h=0;
        screenH.style.backgroundColor='black';
           break; 
   }  
}

var screen_on_v=1;
function vertOn(){
    var screenV= document.getElementById('black_vert');
   switch (screen_on_v) {
    case 0:
        screen_on_v=1;
        screenV.style.backgroundColor='transparent';
        break;
       case 1:
           screen_on_v=0;
        screenV.style.backgroundColor='black';
           break;   
   }  
}

function bgChange(left){
    var slider=document.getElementById('slider');        
        if (left==-906) {   
            slider.style.backgroundColor="#648bf0";
        }
        if (left==0) {
            slider.style.backgroundColor="#f06c64";
        }
    }
        
var left=0;
function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left=left+906;
    if (left>0) {
        left=-906;
    }
    bgChange(left)
    polosa.style.left=left + 'px';  
    
}

function sliderRight() {
    var polosa = document.getElementById('polosa');
    left=left-906;
    if (left<-906) {
        left=0;
    }
        bgChange(left)    
    polosa.style.left=left + 'px';  
}



function shuffle() {
    var container = document.getElementById("portfolio__table");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('portfolio__item'));
      elementsArray.forEach(function(element){
      container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }
  
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }


  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}





window.addEventListener('scroll', function() {
    var portfolio_pos = document.getElementById('portfolio');
    var header_pos = document.getElementById('header'); 
    var services_pos = document.getElementById('services'); 
    var slider_height = document.getElementById('services').offsetTop; 
    var about_pos = document.getElementById('about'); 
    var contact_pos = document.getElementById('contact'); 
    for (let index = 0; index < buttons.length; index++) {   
      
            buttons[index].className= buttons[index].className.replace(' active','')      
       
    }
   
    

     if (portfolio_pos.offsetTop<=pageYOffset && pageYOffset<=(portfolio_pos.offsetTop+portfolio_pos.offsetHeight)){
         this.console.log('portfolio')
        for (let index = 0; index < buttons.length; index++) { 
            if (buttons[index].className.includes('#portfolio')) {
                buttons[index].className += ' active';
            }
           
        }
     }

     
     if (header_pos.offsetTop<=pageYOffset && pageYOffset<=(header_pos.offsetTop+slider_height)){
        for (let index = 0; index < buttons.length; index++) { 
            if (buttons[index].className.includes('#home')) {
                buttons[index].className += ' active';
            }
        }
     }

     if (services_pos.offsetTop<=pageYOffset && pageYOffset<=(services_pos.offsetTop+services_pos.offsetHeight)){

        this.console.log('services')
        for (let index = 0; index < buttons.length; index++) { 
            if (buttons[index].className.includes('#services')) {
                buttons[index].className += ' active';
            }
        }
     }

     if ( about_pos.offsetTop<=pageYOffset && pageYOffset<=( about_pos.offsetTop+ about_pos.offsetHeight)){

        this.console.log('services')
        for (let index = 0; index < buttons.length; index++) { 
            if (buttons[index].className.includes('#about')) {
                buttons[index].className += ' active';
            }
        }
     }

     if ( contact_pos.offsetTop<=pageYOffset && pageYOffset<=( contact_pos.offsetTop+ contact_pos.offsetHeight)){

        this.console.log('services')
        for (let index = 0; index < buttons.length; index++) { 
            if (buttons[index].className.includes('#contact')) {
                buttons[index].className += ' active';
            }
        }
     }
  });

