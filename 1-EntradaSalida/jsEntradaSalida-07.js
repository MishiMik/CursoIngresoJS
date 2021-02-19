/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var unNumero;
	var otroNumero;
	unNumero=txtIdNumeroUno.value;
	otroNumero=txtIdNumeroDos.value;

	unNumero=parseInt(unNumero);
	otroNumero=parseInt(otroNumero);

	suma= unNumero + otroNumero;

	alert("El resultado de la suma es "+ suma);	
}

function restar()
{
	var unNumero;
	var otroNumero;
	unNumero=txtIdNumeroUno.value;
	otroNumero=txtIdNumeroDos.value;

	unNumero=parseInt(unNumero);
	otroNumero=parseInt(otroNumero);

	resta= unNumero - otroNumero;

	alert("El resultado de la resta es "+ resta);	

}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	unNumero=txtIdNumeroUno.value;
	otroNumero=txtIdNumeroDos.value;

	unNumero=parseInt(unNumero);
	otroNumero=parseInt(otroNumero);

	multiplicacion= unNumero * otroNumero;

	alert("El resultado de la multiplicación es "+ multiplicacion);	
	
}

function dividir()
{
	var unNumero;
	var otroNumero;
	unNumero=txtIdNumeroUno.value;
	otroNumero=txtIdNumeroDos.value;

	unNumero=parseInt(unNumero);
	otroNumero=parseInt(otroNumero);

	Division= unNumero / otroNumero;

	alert("El resultado de la division es "+ Division);	
	
}

// by: Mica Tapia