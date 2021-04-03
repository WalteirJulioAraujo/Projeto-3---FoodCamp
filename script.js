
function deselecionar(parametro){
    const itempre = document.querySelector(parametro + " .item-selecionado");
    const checkpre = document.querySelector(parametro + " .item-selecionado" + " .checkmark");
    if(itempre !== null){
        itempre.classList.remove("item-selecionado");
        checkpre.classList.add("esconder");
    }

}

function selecionado(parametro){
    const item = document.querySelector(parametro);
    const check = document.querySelector(parametro + " .checkmark");
    item.classList.toggle("item-selecionado");
    check.classList.toggle("esconder");
}