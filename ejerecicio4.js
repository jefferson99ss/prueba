 let numero = 2500;
function init(){
    this.numerosRomanos(numero);
}
function numerosRomanos(numero) {
	let
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(let i = 6; num = values[i], letra = letras[i]; i--) {
		if(numero >= num) {
			let r = Math.floor(numero / num); 
			numero -= r * num; 
			if(r < 4){
				while(r--){
					res.push(letra);
				}
			} else {
				val = res.pop(); 
				pos = (val ? letras.indexOf(val) : i) + 1; 
				insert = letra + (letras[pos] || 'M'); 
				res.push(insert);
			}
		} else {
			res.push('');
		}
	}

	console.log("El numero en romano es: ", res.join('')) ;
}