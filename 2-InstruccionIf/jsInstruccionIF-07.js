function mostrar()
{
	var edad;
	var estado;
	edad=txtIdEdad.value;
	estado=estadoCivil.value;
	edad=parseInt(edad);

	if (edad<18 && estado != "Soltero")
	{
		alert("Usted es muy jóven como para no ser solterx");
	}
	


}//FIN DE LA FUNCIÓN