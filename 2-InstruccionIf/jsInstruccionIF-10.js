function mostrar()
{
	var calificacion;
	
	calificacion = Math.floor(Math.random()*10)+1;

	if (calificacion>8)
	{
		alert (calificacion+ " excelente");
	}
    else if (calificacion<4)
		{
			alert(calificacion+ " vamos, la próxima se puede")
		}
	
	else
	{
		alert(calificacion+" aprobado");
	}
}