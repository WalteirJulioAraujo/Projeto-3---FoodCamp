
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

function finalizarpedido(){
    const prato = document.querySelector(".prato .item-selecionado .alimento-nome");
    const bebida = document.querySelector(".bebida .item-selecionado .alimento-nome");
    const sobremesa = document.querySelector(".sobremesa .item-selecionado .alimento-nome");

    // const precoprato = (document.querySelector(".prato .item-selecionado .alimento-preco").innerHTML).toFixed(2);
    // const precobebida = (document.querySelector(".bebida .item-selecionado .alimento-preco").innerHTML).toFixed(2);
    // const precosobremesa = (document.querySelector(".sobremesa .item-selecionado .alimento-preco").innerHTML).toFixed(2);

    // const precototal = precoprato + precobebida + precosobremesa ;

    const mensagem = "Olá, gostaria de fazer o pedido: \n" + " - Prato: " + prato.innerHTML + "/n" + "- Bebida: " + bebida.innerHTML + "/n" + " - Sobremesa: " + sobremesa.innerHTML + "/n" + " Total: R$ " ;
    const uri = encodeURI(mensagem);
    const link = "https://wa.me/5521979507925?text=" + uri ;

    window.open(link, "_blank");

}