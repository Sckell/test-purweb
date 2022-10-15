const sliderNext = document.querySelector('.slider-arrow-next')
const sliderBack = document.querySelector('.slider-arrow-back')

const slide = document.querySelectorAll('.swipper-wrapper');
const image = document.querySelectorAll('.swipper-wrapper ');
const sliderLine = document.querySelector('.swipper-wrapper');
let count = 0;
let width;
function init(){
    width = document.querySelector('.swipper-wrapper').offsetWidth;
    sliderLine.style.width = width * image.length + 'px'
    image.forEach(item =>{
        item.style.width = width + 'px'
    })
    rollSlider()
}
window.addEventListener('resize', init);
init()

sliderNext.addEventListener('click', function (){
    count--;
    if (count < 0 ) {
        count = image.length - 2;
    }
    rollSlider();
});
sliderBack.addEventListener('click', function (){

    count++;
    if (count >= image.length - 1) {
        count = 0;
    }
    rollSlider();
});
function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count*width+'px)';
}

const listAll = document.querySelectorAll('.slider__list')

let sliderIndex = 0

const activeSlide = n =>{
    listAll.forEach(items =>{
        items.classList.remove('list-active')
    })
    listAll[n].classList.add('list-active')
}

const nextSLide = () =>{

    if(sliderIndex == slide.length - slide.length){
        sliderIndex = 3
        activeSlide(sliderIndex)
    }else{
        sliderIndex--
        activeSlide(sliderIndex)
    }
}

const backSLide = () =>{
    if(sliderIndex == slide.length - 2){
        sliderIndex = 0
        activeSlide(sliderIndex)
       
    }else{
        sliderIndex++
        activeSlide(sliderIndex)
    }
}
sliderNext.addEventListener('click', nextSLide)
sliderBack.addEventListener('click', backSLide)