/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno= txtIdPrecioUno.value;
    precioDos= txtIdPrecioDos.value;
    precioTres= txtIdPrecioTres.value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultado= precioUno + precioDos + precioTres;

    alert("el resultado de la suma es: " + resultado);


	
}
function Promedio () 
{

    var precioUno= txtIdPrecioUno.value;
    var precioDos= txtIdPrecioDos.value;
    var precioTres= txtIdPrecioTres.value;
    var resultado;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultado= (precioUno + precioDos + precioTres)/3;

    alert("el promedio es de: " + resultado);

	
}
function PrecioFinal () 
{
	var precioUno= txtIdPrecioUno.value;
    var precioDos= txtIdPrecioDos.value;
    var precioTres= txtIdPrecioTres.value;
    var resultado;
  

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);
    resultado= (precioUno + precioDos + precioTres)*1.21;

    alert("el precio final es de: " + resultado);
}

// by: micaTapia