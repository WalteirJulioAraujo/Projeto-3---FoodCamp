
function deselecionar(parametro) {
    const itempre = document.querySelector(parametro + " .item-selecionado");
    const checkpre = document.querySelector(parametro + " .item-selecionado" + " .checkmark");
    if(itempre !== null){
        itempre.classList.remove("item-selecionado");
        checkpre.classList.add("esconder");
    }

}

function selecionado(parametro) {
    const item = document.querySelector(parametro);
    const check = document.querySelector(parametro + " .checkmark");
    item.classList.toggle("item-selecionado");
    check.classList.toggle("esconder");
    fecharpedido();
    
}

function fecharpedido(){
    const item1 = document.querySelector(".prato .item-selecionado");
    const item2 = document.querySelector(".bebida .item-selecionado");
    const item3 = document.querySelector(".sobremesa .item-selecionado");

    const caixafecharpedido = document.querySelector(".base .base-menu");

    const checarpedido = ( (item1 && item2 && item3) !== null );

    if(checarpedido){
        caixafecharpedido.innerHTML = "Fechar pedido!" ;
        caixafecharpedido.classList.add("cor-verde");
    }
    
}
