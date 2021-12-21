let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
}

window.onscroll = () => {
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
}

var modalOpen = document.querySelectorAll(".main")

modalOpen.forEach(function(open){
    open.onclick = function() {
        let modal = open.getAttribute("data-modal")

        document.getElementById(modal).style.display = "block"
        navbar.classList.remove('active')
        searchForm.classList.remove('active')
    }
})
// Bấm nút X để out modal
var closeModal = document.querySelectorAll(".modal-close")
closeModal.forEach(function(close) {
    close.onclick = function() {
        let modal = (close.closest(".modal").style.display = "none")
    }
})

// Bấm bên ngoài để out modal
var modalclose = document.querySelectorAll(".modal")
modalclose.forEach(function(close) {
    close.onclick = function() {
        let modal = (close.closest(".modal").style.display = "none")
    }
})

// Bấm vào container ko bị out
var modalStop = document.querySelectorAll(".modal-container")

modalStop.forEach(function(stop){
    stop.onclick = function(event) {
       event.stopPropagation()
}})