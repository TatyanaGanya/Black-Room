// Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое



const myFunction = function(){
  document.querySelector(".nav-1").classList.toggle("nav_aktiv");
}

document.querySelector(".menu").addEventListener('click', () =>{
    myFunction()
})