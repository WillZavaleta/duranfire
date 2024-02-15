let menu = document.getElementById('enlaces');
let hamburguesa = document.getElementsByClassName('hamburguesa')[0];

hamburguesa.addEventListener('click', function(){
    //console.log("click");
    menu.classList.toggle('toggle');
});