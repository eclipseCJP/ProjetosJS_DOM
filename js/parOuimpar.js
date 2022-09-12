let numero=document.getElementById("numero");
let resposta=document.getElementById("resultado");

function parOUimpar(){
    let valor = numero.value;
         if(valor % 2 == 0){
            resposta.innerHTML=`${valor} é par`;
        }else{
            resposta.innerHTML=`${valor} é impar`;
    }
}
