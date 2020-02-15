let notas = new Array(14);

function init() {
    this.notasAleatorias(notas);
    this.calcularPromedio();
    this.calcularNumeroMayor();
    this.calcularNumeroMenor();
    
}

function notasAleatorias(notas) {
    for (let k = 0; k < notas.length; k++) {
        const nota = Math.floor(Math.random() * 6); //numero aleatorio del o al 5
        notas[k] = nota;
    }
    console.log("Las notas son: ", notas)
}

function calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        const element = notas[i];
        suma += element;
    }
    let promedio = suma / notas.length;
    console.log("El promedio de notas es: ", promedio );
}

function calcularNumeroMayor() {
    let numeroMayor = Math.max(...notas)
    console.log("La nota mayor es: " , numeroMayor)
}

function calcularNumeroMenor() {
    let numeroMayor = Math.min(...notas)
    console.log("La nota menor es: " , numeroMayor)
}









