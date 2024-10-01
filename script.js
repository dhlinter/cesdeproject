
let nota1 = parseFloat(prompt("Ingresa la nota de la materia 1:"));
let nota2 = parseFloat(prompt("Ingresa la nota de la materia 2:"));
let nota3 = parseFloat(prompt("Ingresa la nota de la materia 3:"));
let nota4 = parseFloat(prompt("Ingresa la nota de la materia 4:"));
let nota5 = parseFloat(prompt("Ingresa la nota de la materia 5:"));


let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

let rendimiento;

if (nota1 >= 90 && nota2 >= 90 && nota3 >= 90 && nota4 >= 90 && nota5 >= 90) {
    rendimiento = "Sobresaliente";
} else if (nota1 < 60 || nota2 < 60 || nota3 < 60 || nota4 < 60 || nota5 < 60) {
    rendimiento = "Reprobado";
} else if (promedio >= 70 && promedio < 90) {
    rendimiento = "Rendimiento Satisfactorio";
} else if (promedio >= 60 && promedio < 70) {
    rendimiento = "Regular";
}


console.log('su promedio es: ',promedio);
console.log('Evaluación Final: ',rendimiento);
