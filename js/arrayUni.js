let item=document.getElementById("item");
let display=document.getElementById("display");
let list=[];

function mostrarItem(){
    let itens=item.value;
    list.push(itens);
    display.innerHTML=`<h3>${list}</h3>`;

}

//1-METODO PUSH()
/**
 * ALEM DE ADICIONAR O NOVO ITEM NA ULTIMA POSICAO
 * RETORNA O NOVO TAMANHO DO ARRAY
 */