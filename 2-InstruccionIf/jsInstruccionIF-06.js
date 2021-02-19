function mostrar()
{

	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("usted es mayor de edad o:");
	}
	else
	{
		if(edad>12)
		{alert("usted es adolescente");}
		else
		{alert("usted es infante");}
	}


}//FIN DE LA FUNCIÓN