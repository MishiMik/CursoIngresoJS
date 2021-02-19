/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var unNumero;
	var otroNumero;

	unNumero=txtIdNumeroDividendo.value;
	otroNumero=txtIdNumeroDivisor.value;

	unNumero=parseInt(unNumero);
	otroNumero=parseInt(otroNumero);

	resultado= unNumero % otroNumero

	alert("el resto da como resultado "+ resultado);
}
