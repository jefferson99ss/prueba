function init(){
    this.imprimirFicha();
}

function imprimirFicha(){
    let count = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            console.log("Ficha : " + i + " : " + j );
            count++;
        }
    }
    console.log("Suma de las fichas es = " + count)
}