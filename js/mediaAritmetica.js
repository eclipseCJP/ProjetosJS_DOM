let nota1=document.getElementById("valor1");
let nota2=document.getElementById("valor2");
let display=document.getElementById("resultado");

function media(numero1,numero2){
    return (numero1 + numero2) / 2;
}

function situacao(m){
    if(m >= 7){
        return "aprovado";
    }else{
        return "reprovado";
    }
}

function calcular(){
    let numero1=parseFloat(nota1.value);
    let numero2=parseFloat(nota2.value);
    let notaFinal=media(numero1,numero2);
    let status=situacao(notaFinal);
    display.innerHTML="media calculada "+notaFinal+ " situacao: "+status;
}
/* 
    Detalhes observados
    A ordem de criacao e chamada de funcoes
    Posso para funcoes para outras variaveis o que melhora a leitura do codigo
    Conversao de String para float
    
    licoes que melhorei
    *Estou aos poucos conseguindo trabalhar o paradigma funcional
    e conseguindo passar funcoes dentro de outras funcoes.
    */



