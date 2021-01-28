
//menu-btn класс на кнопке бургера
document.querySelector(".menu-btn").addEventListener("click",() =>{
    //.toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector(".menu-btn").classList.toggle("active")
    document.querySelector(".header-menu").classList.toggle("active")
})


//.header-menu-item это класс который в ссылках меню.
// Нужен для закрытия при клике на них
document.querySelectorAll(".header-menu-item").forEach((oneLink) => {
   //oneLink это имя одной ссылки меню. Придумываем сами название.
    oneLink.addEventListener ("click",() =>{
        document.querySelector(".menu-btn").classList.toggle("active")
        document.querySelector(".header-menu").classList.toggle("active")
  })
})

