
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
        caixafecharpedido.classList.add("cor-verde","fake-hover");
    }
    
}

function finalizarpedido(){

    const nome = prompt("Qual seu nome?");
    const endereco = prompt("Qual seu endereço?");

    const prato = document.querySelector(".prato .item-selecionado .alimento-nome");
    
    const bebida = document.querySelector(".bebida .item-selecionado .alimento-nome");
    
    const sobremesa = document.querySelector(".sobremesa .item-selecionado .alimento-nome");
    
    const precoprato = Number(document.querySelector(".prato .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    const precobebida = Number(document.querySelector(".bebida .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    const precosobremesa = Number(document.querySelector(".sobremesa .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));

    const precototal = precoprato + precobebida + precosobremesa ;

    const mensagem = "Olá, gostaria de fazer o pedido: \n" + "*- Prato:* " + prato.innerHTML + "\n" + "*- Bebida:* " + bebida.innerHTML + "\n" + "*- Sobremesa:* " + sobremesa.innerHTML + "\n" + "*- Total: R$ " + precototal.toFixed(2) + "*" + "\n*- Nome:* " + nome + "\n*- Endereço:* " + endereco;
    const uri = encodeURI(mensagem);
    const link = "https://wa.me/5521979507925?text=" + uri ;

    window.open(link, "_blank");
         
}

function pedidofeito(){
    const prato = document.querySelector(".prato .item-selecionado .alimento-nome").innerHTML;
    const bebida = document.querySelector(".bebida .item-selecionado .alimento-nome").innerHTML;
    const sobremesa = document.querySelector(".sobremesa .item-selecionado .alimento-nome").innerHTML;

    document.querySelector(".finalizar-pedido .prato-finalizarpedido .nome").innerHTML = prato;
    document.querySelector(".finalizar-pedido .bebida-finalizarpedido .nome").innerHTML = bebida;
    document.querySelector(".finalizar-pedido .sobremesa-finalizarpedido .nome").innerHTML = sobremesa;

    document.querySelector(".finalizar-pedido .prato-finalizarpedido .preco").innerHTML = (document.querySelector(".prato .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    document.querySelector(".finalizar-pedido .bebida-finalizarpedido .preco").innerHTML = (document.querySelector(".bebida .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    document.querySelector(".finalizar-pedido .sobremesa-finalizarpedido .preco").innerHTML = (document.querySelector(".sobremesa .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));

    const a = Number(document.querySelector(".prato .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    const b = Number(document.querySelector(".bebida .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));
    const c = Number(document.querySelector(".sobremesa .item-selecionado .alimento-preco").innerHTML.replace("R$ ", "").replace("," , "."));

    const precototalfinalizarpedido = (a + b + c).toFixed(2);

    document.querySelector(".finalizar-pedido .total-finalizarpedido .preco").innerHTML = precototalfinalizarpedido;

    const caixafinalizarpedido = document.querySelector(".finalizar-pedido");
    caixafinalizarpedido.classList.toggle("esconder");

    const tudocerto = document.querySelector(".finalizar-pedido-pedir");
    tudocerto.classList.add("fake-hover-pedir")

    const cancelar = document.querySelector(".finalizar-pedido .cancelar");
    cancelar.classList.add("fake-hover-cancelar");
}

function fechacaixa(){
    const caixa = document.querySelector(".finalizar-pedido");
    caixa.classList.add("esconder");
}

function fechacaixaicone(){
    const icone = document.querySelector(".icone-fecharpedido");
    icone.classList.add("fake-hover");
    const caixa = document.querySelector(".finalizar-pedido");
    caixa.classList.add("esconder");
}