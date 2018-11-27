
//Pasa de formato EEUU con . a , y pone los puntos de los milles y millones
//llamada --> darFormato("4654654.564"); o darFormato(4654654.564);
//salida  --> "4.654.654,564"
function darFormato(value) {											
	var num2 = value.toString().split('.');
	var thousands = num2[0].split('').reverse().join('').match(/.{1,3}/g).join('.');
	var decimals = (num2[1]) ? ','+num2[1] : '';
	var res =  thousands.split('').reverse().join('')+decimals; 
	return res;
}