/*
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE

*/

let peso = prompt('Qual o seu peso? ')
let altura = prompt('Qual a sua altura')

let IMC = peso / altura ** 2

if (IMC < 18.5) {
  alert(IMC + ' MAGREZA')
} else if (IMC > 18.5 && IMC < 24.9) {
  alert(IMC + ' NORMAL')
} else if (IMC > 24.9 && IMC < 29.9) {
  alert(IMC + ' SOBREPESO')
} else if (IMC > 29.9 && IMC < 39.9) {
  alert(IMC + ' SOBREPESO')
} else {
  alert(IMC + ' OBESIDADE GRAVE')
}
