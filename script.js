function selecionado(parametro){
    const item = document.querySelector(parametro);
    const check = document.querySelector(parametro + " .checkmark");
    item.classList.toggle("item-selecionado");
    check.classList.toggle("esconder");
}