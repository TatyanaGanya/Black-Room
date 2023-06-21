// Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое



const myFunction = function(){
  document.querySelector(".nav-1").classList.add("nav_aktiv");
}

document.querySelector(".menu").addEventListener('click', () =>{
    myFunction()
})