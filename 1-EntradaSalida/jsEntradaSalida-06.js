/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var unNumero;
	var otroNumero;
	var suma;

	unNumero=txtIdNumeroUno.value;
	otroNumero=txtIdNumeroDos.value;

	unNumero=parseInt(unNumero)
	otroNumero=parseInt(otroNumero)

	/* parseInt los numeros reconocidos como
	texto se transforman en números enteros.
	para que no sean enteros se usa: parseFloat (numeros
		con coma)*/


	suma=unNumero+otroNumero

	alert("la suma es " + suma);
}

