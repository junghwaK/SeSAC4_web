// js 동작 채우기
const icon_menu = document.querySelector('.icon_menu');
const slide_menu = document.querySelector('.slide_menu');

icon_menu.addEventListener('click', function(){
    console.log(slide_menu.classList);
    slide_menu.classList.toggle('d-none');
})

