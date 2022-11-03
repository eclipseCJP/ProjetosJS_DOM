let item=document.getElementById("item");
let item3=document.getElementById("item3");
let item4=document.getElementById("item4");
let display=document.getElementById("display");
let posicao=document.getElementById("item2");
let list=[];

 

function adicionarUltimaPosition(){
    let itens=item.value;
    list.push(itens);
    display.innerHTML=`[${list}]`;
}
function adicionarPrimeiraPosition(){
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
function removerUltimoElemento(){
   let itens=list.pop();
   display.innerHTML=`<li>[${list}]</li>`;
   alert(`elemento removido:..${itens}`)

}
function pesquisarItem(){
    let itemAlterado=item3.value;
    let achou;
    for( i=0; i<list.length; i++){
        if(itemAlterado===list[i]){
            achou=i;
            alert(`posicao${i}`);
        }
        
    }
    return achou;
}
function alterarItem(){
    let posicao=pesquisarItem();
    let itemAlterado=item4.value;
    list.splice(posicao,1,itemAlterado);
    display.innerHTML=`[${list}]`;
        
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
 * O METODO PERMITE:
 *  1 - ESCOLHER A POSICAO ONDE SERÁ ADICIONADO O NOVO ITEM 
 *  2 - PERMITE EXCLUIR ITEM.
 *  3 - PERMITE ALTERAR OS ELEMENTOS DO ARRAY 
 * (POSICAO PARA ADICIONAR,POSICAO PARA EXCLUIR,ITEM A SER ADICIONADO)
 **/

//3-METODO POP()
/**
 * O METODO POP() PERMITE DUAS ACOES:
 * 1 EXCLUIR O ULTIMO ELEMENTO DE UM ARRAY 
 * 2 RETORNAR O ELEMENTO EXCLUIDO
 *  **/

