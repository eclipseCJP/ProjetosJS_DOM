let inputIdade=document.getElementById("idade");
let botao=document.getElementById("bnt");
let display=document.getElementById("tela");

function verificarIdade(){
    let idade=inputIdade.value;
    menor = idade < 18 ? true : false; 
    if(menor){
        display.innerHTML=`menor de idade`;
    }else{
        display.innerHTML=`maior de idade`;
    }

}