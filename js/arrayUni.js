let item=document.getElementById("item");
let display=document.getElementById("display");
let posicao=document.getElementById("item2");
let list=[];



function ultimaPosition(){
    let itens=item.value;
    list.push(itens);
    display.innerHTML=`<li>[${list}]</li>`;
}


function primeiraPosition(){
    let itens=item.value;
    list.unshift(itens);
    display.innerHTML=`<li>[${list}]</li>`;

}


function escolherPosition(){
    let position=parseInt(posicao.value);
    let itens=item.value;
   list.splice(position,0,itens);
   display.innerHTML=`<li>[${list}]</li>`;
   console.log(position)

}



//1-METODO PUSH()
/**
 * ALEM DE ADICIONAR O NOVO ITEM NA ULTIMA POSICAO
 * RETORNA O NOVO TAMANHO DO ARRAY
 */

//2-METODO UNSHIFT()
/**
 * ADICIONA UM ELEMENTO NA PRIMEIRA POSICAO DO VETOR
 **/

//3-METODO SPLICE()
/**
 * O METODO PERMITE ALEM DE ESCOLHER A POSICAO ONDE SERÁ ADICIONADO 
 * O NOVO ITEM TAMBEM PERMITE EXCLUIR.
 * (POSICAO PARA ADICIONAR,POSICAO PARA EXCLUIR,ITEM A SER ADICIONADO)
 **/