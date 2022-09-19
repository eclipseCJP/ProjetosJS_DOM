let valor=document.getElementById("numero");
let display=document.getElementById("display");



function mostrarTabuada(){
    let numero=parseInt(valor.value);
    escolherNumero(numero);
}

function exibir(numero){
    for(i=1; i<=10; i++){
        display.innerHTML += `<p>${i} x ${numero} = ${i*numero}</p>`;
    }
}

function escolherNumero(numero){
    switch(numero){
        case 1:
                exibir(numero);
            break;
            case 2:
                exibir(numero);
            break;
            case 3:
                exibir(numero);
            break;
            case 4:
                exibir(numero);
            break;
            case 5:
                exibir(numero);
            break;
            case 6:
                exibir(numero);
            break;
            case 7:
                exibir(numero);
            break;
            case 8:
                exibir(numero);
            break;
            case 9:
                exibir(numero);
            break;
            case 10:
                exibir(numero);
            break;
            default:
                alert("opcao invalida");
                break;
    }
}
