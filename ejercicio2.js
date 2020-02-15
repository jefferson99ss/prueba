let tiradas = 20;

function init(){
    let count = 0;
    for (let i = 0; i < tiradas; i++) {
        count += this.tirarDados();
    }
    console.log("Las veces que dio 10 la suma de los dados fue:" + count);
}

function tirarDados(){
    let dado1 = Math.ceil(Math.random() * 6);
    let dado2 = Math.ceil(Math.random() * 6);
    return this.sumarDados(dado1,dado2);
}

function sumarDados(dado1, dado2){
    if((dado1+dado2) == 10) {
        return 1;
    }
    else {
        return 0;
    }
}