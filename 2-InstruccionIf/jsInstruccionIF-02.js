function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>=18)
	{
		alert("usted es mayor de edad");
	}
	else if(edad<18)
	{
		alert("usted no es mayor de edad qnq");
	}


}//FIN DE LA FUNCIÓN