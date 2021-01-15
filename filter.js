// Filter Menu and Filter Item

let sorttBtn = document.querySelector('.what-we-offer__filter-menu').children;
let sorttItem = document.querySelector('.what-we-offer__item-container').children;

for(let i = 0; i < sorttBtn.length; i++){
    sorttBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sorttBtn.length; j++){
            sorttBtn[j].classList.remove('current');
        }

        this.classList.add('current');

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sorttItem.length; k++){
            sorttItem[k].classList.remove('active');
            sorttItem[k].classList.add('delete');

            if(sorttItem[k].getAttribute('data-item') == targetData || targetData == "one"){
                sorttItem[k].classList.remove('delete');
                sorttItem[k].classList.add('active');
            }
        }
    });
}



// Changing About Sections
const aboutHeading = document.querySelector('.about__heading');
const aboutParagraph = document.querySelector('.about__paragraph');

const WhoWeAre = document.getElementById('who-we-are');
const mission = document.getElementById('mission');
const vision = document.getElementById('vision');
const values = document.getElementById('values');
const aboutBtn = document.getElementById('about-btn');
const aboutImg = document.querySelector('.about__img').children[0];


WhoWeAre.addEventListener('click', function() {
    aboutHeading.textContent = 'Who We Are';
    aboutParagraph.textContent = 'We are Infinity Access Technologies played a vital role in connecting automotive supply chain, adopting best of the technologies to provide innovative solutions and focus on bringing business value through digital technology.';
    aboutBtn.style.display = "inline-block";
    aboutImg.src = 'img/laptop.png';
});

mission.addEventListener('click', function() {
    aboutHeading.textContent = 'Our Mission';
    aboutParagraph.textContent = "Enabling customers to accomplish their ambitions and realize their vision. By investing in our people, partners and technology we add value to those we serve with a focus on readiness, responsiveness and resolution.";
    aboutBtn.style.display = "none";  
    aboutImg.src = 'img/our-goal.png';  
});

vision.addEventListener('click', function() {
    aboutHeading.textContent = 'Our Vision';
    aboutParagraph.textContent = "To enable people throughout the world to realize their full potential. Build customer trust and value by providing a quality and futuristic services the first time, every time.";
    aboutBtn.style.display = "none";
    aboutImg.src = 'img/vision.png';  
});

values.addEventListener('click', function() {
    aboutHeading.textContent = 'Our Values';
    aboutParagraph.textContent = "Infinity Access has always been at the vanguard of the IT movement in India with the sole objective to empower people with technological advancements. We value Honesty and integrity, which generate long-term client loyalty and a sincere focus on providing exceptional customer service.";
    aboutBtn.style.display = "none";
    aboutImg.src = 'img/values.png';
});


// Code for Navigation Image Slider
$(document).ready(function(){
    for (var i=1; i <= $('.slider__slide').length; i++){
        $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
    }
    setTimeout(function(){
        $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);
})

function goToSlide(number){
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

function nextSlide() {
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++;
    if (currentSlide > totalSlides){
        currentSlide = 1;
    }
    goToSlide(currentSlide);
}

function prevSlide() {
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide--;
    if (currentSlide < 1){
        currentSlide = totalSlides;
    }
    goToSlide(currentSlide);
}

// Infinte Loop for Slider
(function(delay, callback) {
    var loop = function() {
        callback();
        setTimeout(loop, delay);
    };     
    loop();
})(10000, function() {
    nextSlide();
});

$('.slider__next, .go-to-next').on('click', function(){
    nextSlide();
});

// Filter Menu and Item

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

// Code for New Arrivals Section
const sortButton =  document.querySelector('.filter-item__menu').children;
const sortChildren = document.querySelector('.our-skills__content').children;

for(let i = 0; i < sortButton.length; i++) {
    sortButton[i].addEventListener('click', function(){
        for(let j = 0; j < sortButton.length; j++) {
            sortButton[j].classList.remove('current');
        }
        this.classList.add('current');

        let targetClass = this.textContent;

        for(let k = 0; k < sortChildren.length; k++) {
            sortChildren[k].classList.remove('disp-flex');

            if(sortChildren[k].getAttribute('data-item') == targetClass){
                sortChildren[k].classList.add('disp-flex');
            }
        }

    });
}

// Our work.

const ourWorkElements = Array.prototype.slice.call(document.querySelector('.our-work__container').children[1].children);
const modal = document.querySelector('.modal__container');
const modalHeading = document.querySelector('.modal__heading');
const modalDesc = document.querySelector('.modal__description');


ourWorkElements.forEach(function(item){
    item.addEventListener('click', (e)=> {  
        modal.style.display = "flex";
        let className = e.target.className;
        if(className == 'box-content' || className == 'post') {
            if (className == 'post') {
                modalDesc.textContent = e.path[2].getAttribute('data-item');
            } else {
                modalDesc.textContent = e.target.getAttribute('data-item');
            }
            modalHeading.textContent = e.target.textContent;
        }
    });
});

function cross() {
    modal.style.display = '';   
}