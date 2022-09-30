let item=document.getElementById("item");
let item2=document.getElementById("item3");
let display=document.getElementById("display");
let posicao=document.getElementById("item2");
let list=[];

 

function adicionarUltimaPosition(){
    let itens=item.value;
    list.push(itens);
    display.innerHTML=`<li>[${list}]</li>`;
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
   // let position=parseInt(posicao.value);
    //let itens=item.value;
   let itens=list.pop();
   display.innerHTML=`<li>[${list}]</li>`;
   alert(`elemento removido:..${itens}`)

}

function alterarItem(){

}
function pesquisarItem(){
    let itemPesquisado=item2.value;
    achou=0;
    for(i=0; i<list.length;i++){
       if(itemPesquisado === list[i]){
        //console.log(list[i]);
        //break;
        achou=1
        if(achou == 1){
            console.log("encontrado");
        }else if(achou==0){
            console.log("item nao encontrado");
            break;
        }
       }
      
    }
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

