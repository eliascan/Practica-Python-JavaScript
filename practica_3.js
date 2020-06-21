/*
Calcular la nota máxima, la nota mínima y la nota promedio de la clase de trigonometría utilizando JavaScript.
*/

var datos = {
	"fecha": "02-21-2018",
	"tituloExamen": "Trigonometria",
	"numeroEstudiantes": 6,
	"resultados": [
		{
			"nombre": "Estudiante_1",
			"nota": 82
		},
		{
			"nombre": "Estudiante_2",
			"nota": 65
		},
		{
			"nombre": "Estudiante_3",
			"nota": 89
		},
		{
			"nombre": "Estudiante_4",
			"nota": 74
		},
		{
			"nombre": "Estudiante_5",
			"nota": 55
		},
		{
			"nombre": "Estudiante_6",
			"nota": 78
		},
	]
}


console.log("Examen de: " + datos.tituloExamen);

var estudiante = datos.resultados;
var maxi = []

estudiante.forEach(elemento => {
    maxi.push(elemento.nota);
});

var notaMax = Math.max(...maxi);
var notaMin = Math.min(...maxi);

console.log("La nota maxima: " + notaMax);
console.log("La nota minima: " + notaMin);

let total = 0;
const lar = maxi.length;
for (let i = 0; i < lar; i++) {
    total += maxi[i];
}

let avrg = total / lar;
console.log("La nota promedio es: " + avrg);