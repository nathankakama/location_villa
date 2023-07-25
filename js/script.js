iconMenu = document.querySelectorAll('svg');
menu = document.querySelector('.menu');
nav = document.querySelector('nav');

nav.style.width = '100%'
// nav.style.height = ''
menu.style.display = 'none';
iconMenu[1].style.display = 'none'

var listenerFunction = ()=>{
    // if (menu.style.display && menu.style.display == 'none'){
    //     menu.style.display = 'block';
    // } else {
    //     menu.style.display = 'none';
    // }
    menu.style.display = 'flex'
    iconMenu[0].style.display = 'none'
    iconMenu[1].style.display = 'block'   
    nav.style.height = '50vh'   
}
iconMenu[0].addEventListener('click', listenerFunction) 

var listenerFunction = ()=>{
    menu.style.display = 'none'
    iconMenu[0].style.display = 'block'
    iconMenu[1].style.display = 'none'
    nav.style.height = '60px'   
}
iconMenu[1].addEventListener('click', listenerFunction) 

// var listenerFunction = ()=>{
//     menu.style.display = 'none'
// }
// iconMenu.addEventListener('dblclick', listenerFunction) 

// var listenerFunction = {
//     iconMenuClick : function (){
//         console.log('click');
//         this.style.color = 'red';
//     }
// }
// iconMenu.addEventListener('click', listenerFunction)

// var listenerFunction = () =>{

//     menuClick : function ()=> {
//         console.log(this);
//         if (this.style.display && this.style.display == 'block'){
//             this.style.display = 'none';
//         } else {
//             this.style.display = 'block'
//         }
//     }
// }