// var, let, (const = constante => não muda)
// funcção change de checkbox é pra mudar
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
})