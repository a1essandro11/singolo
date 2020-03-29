const LOGOS = document.querySelectorAll('.logo a');
const MENU = document.querySelector('.menu');
const BTN = document.getElementById('btn');
const CLOSE_BTN = document.getElementById('close-btn');
const FILTER = document.querySelector(".portfolio__filter");
const PORTFOLIO = document.querySelector(".portfolio__table");
const FORM = document.querySelector('#myForm');
const BURGER = document.querySelector('.burger');
const menuBlock = document.getElementById('menu-block');
var selectedID = 'menu-home';
var smoothScroll = {
    block: "start",
    behavior: "smooth",
};
var menuTargetIDs = {
    'menu-home': '#slider',
    'menu-serv': '#services',
    'menu-about': '#about',
    'menu-portf': '#portfolio',
    'menu-contact': '#feedback',
};
let changeBG = function () {
    let actualBG = window.getComputedStyle(document.querySelector('.slider')).getPropertyValue('background-color');
    if (actualBG === 'rgb(240, 108, 100)') {
        return 'rgb(100, 139, 240)';
    }
    return 'rgb(240, 108, 100)';
};


LOGOS.forEach(logo => {
    logo.addEventListener('click', () => {
        console.log('LOGO');
        document.getElementById('slider').scrollIntoView(smoothScroll);
    });
});


window.addEventListener('load', () => {
    if (window.pageYOffset === 0) {
        document.querySelector('#menu-home').classList.add('active');
    }
});


MENU.addEventListener('click', (event) => {
    let id = event.target.id;
    console.log(id);

    if (id !== "") {
        document.getElementById(selectedID).classList.remove('active');
        document.getElementById(id).classList.add("active");
        selectedID = id;
        document.querySelector(menuTargetIDs[selectedID]).scrollIntoView(smoothScroll);
    }

    if (BURGER.style.getPropertyValue('transform') === 'rotate(90deg)') {
        hideMenu();
    }

});


window.addEventListener('scroll', () => {
    let sliderOffset = document.querySelector('#slider').offsetTop;
    let servicesOffset = document.querySelector('#services').offsetTop;
    let portfolioOffset = document.querySelector('#portfolio').offsetTop;
    let aboutOffset = document.querySelector('#about').offsetTop;
    let feedbackOffset = document.querySelector('#feedback').offsetTop;
    if (Math.abs(window.pageYOffset - sliderOffset <= 300) || (window.pageYOffset === 0)) {
        document.getElementById(selectedID).classList.remove('active');
        document.getElementById('menu-home').classList.add('active');
        selectedID = 'menu-home';
    }
    if (Math.abs(window.pageYOffset - servicesOffset) <= 280) {
        document.getElementById(selectedID).classList.remove('active');
        document.getElementById('menu-serv').classList.add('active');
        selectedID = 'menu-serv';
    }
    if (Math.abs(window.pageYOffset - portfolioOffset) <= 300) {
        document.getElementById(selectedID).className = "";
        document.getElementById('menu-portf').className = "active";
        selectedID = 'menu-portf';
    }
    if (Math.abs(window.pageYOffset - aboutOffset) <= 300) {
        document.getElementById(selectedID).className = "";
        document.getElementById('menu-about').className = "active";
        selectedID = 'menu-about';
    }
    if (Math.abs(window.pageYOffset - feedbackOffset) <= 300 || (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
        document.getElementById(selectedID).className = "";
        document.getElementById('menu-contact').className = "active";
        selectedID = 'menu-contact';
    }
});


function switchOnOff(which) {
    let phone = document.querySelectorAll('.iphone-mask')[which - 1].parentElement.nextElementSibling;
    if (phone.classList.length === 0) {
        phone.classList.add('hidden');
    } else {
        phone.classList.remove('hidden');
    }
}


document.querySelector('#arrow-right').addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide.active');
    let nextSlide = document.querySelector('.slide.next');
    nextSlide.style.setProperty('left', '100%');
    console.log(nextSlide);

    document.querySelector('.slider').style.setProperty('background-color', changeBG());

    activeSlide.classList.add('toLeft');
    activeSlide.style.opacity = 0;
    nextSlide.classList.add('toLeft');
    nextSlide.style.opacity = 1;

    setTimeout(() => {
        nextSlide.classList.remove('next');
        activeSlide.classList.remove('active');
        nextSlide.classList.remove('toLeft');
        activeSlide.classList.remove('toLeft');
        nextSlide.classList.add('active');
        activeSlide.classList.add('next');
        console.log(nextSlide);
        nextSlide.style.setProperty('left', '0');
    }, 350);
});


document.querySelector('#arrow-left').addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide.active');
    let nextSlide = document.querySelector('.slide.next');
    nextSlide.style.setProperty('left', '-100%');
    console.log(nextSlide);

    document.querySelector('.slider').style.setProperty('background-color', changeBG());

    activeSlide.classList.add('toRight');
    activeSlide.style.opacity = 0;
    nextSlide.classList.add('toRight');
    nextSlide.style.opacity = 1;

    setTimeout(() => {
        nextSlide.classList.remove('next');
        activeSlide.classList.remove('active');
        nextSlide.classList.remove('toRight');
        activeSlide.classList.remove('toRight');
        nextSlide.classList.add('active');
        activeSlide.classList.add('next');
        console.log(nextSlide);
        nextSlide.style.setProperty('left', '0');
    }, 350);
});


PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('div > img').forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');
});


FILTER.addEventListener('click', (event) => {
    if (event.target.className !== 'filter__item') return;

    let elements = PORTFOLIO.querySelectorAll("div");
    let filterButtons = FILTER.querySelectorAll('button');

    filterButtons.forEach(filter_btn => {
        filter_btn.classList.remove('focus');
    });
    event.target.classList.add('focus');

    elements.forEach(el => {
        el.style.opacity = 0;
    });

    setTimeout(() => {
        let temp = elements[0].innerHTML;
        for (let index = 0; index < elements.length - 1; index++) {
            elements[index].innerHTML = elements[index + 1].innerHTML;
        }
        elements[elements.length - 1].innerHTML = temp;
    }, 200);

    let n = 0;
    elements.forEach(el => {
        console.log(n += 25);
        setTimeout(() => el.style.opacity = 1, 200 + n);
    });
});


function sendForm() {
    event.preventDefault();
    document.getElementById('message-block').style.setProperty('height', document.querySelector('body').scrollHeight + 'px');

    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result-subject').innerText = (subject === '') ? ('Без темы') : ('Тема: ' + subject);

    const describe = document.getElementById('describe').value.toString();
    document.getElementById('result-describe').innerText = (describe === '') ? ('Без описания') : ('Описание: ' + describe);

    document.getElementById('message-block').classList.remove('hidden');
}


CLOSE_BTN.addEventListener('click', (event) => {
    document.getElementById('result-subject').innerText = '';
    document.getElementById('result-describe').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.querySelector('form').reset();
});


function switchMenu() {
    if (BURGER.style.getPropertyValue('transform') == 'rotate(90deg)') {
        hideMenu();
    } else {
        showMenu();
    }
}

function hideMenu() {
    BURGER.style.setProperty('transform', 'rotate(0deg)');
    MENU.classList.remove('toRight');
    MENU.classList.add('toLeft');
    menuBlock.classList.add('hidden');
    setTimeout(() => {
        MENU.style.setProperty('display', 'none');
    }, 235);
}

function showMenu() {
    BURGER.style.setProperty('transform', 'rotate(90deg)');
    MENU.style.setProperty('display', 'unset');
    MENU.style.setProperty('left', '0');
    MENU.classList.remove('toLeft');
    MENU.classList.add('toRight');
    menuBlock.style.setProperty('height', document.querySelector('body').scrollHeight + 'px');
    menuBlock.classList.remove('hidden');
}


window.onresize = (event) => {
    if (window.innerWidth > 768) {
        document.getElementById('menu-block').classList.add('hidden');
        MENU.style.setProperty('display', 'unset');
    } else {
        document.getElementById('menu-block').classList.add('hidden');
        MENU.style.setProperty('display', 'none');
        BURGER.style.setProperty('transform', 'rotate(0deg)');
    }
};
