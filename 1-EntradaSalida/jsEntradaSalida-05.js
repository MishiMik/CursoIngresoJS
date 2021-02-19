/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre
	nombre=prompt("ingrese su nombre porfi", "ejemplo: miau");
	txtIdNombre.value= nombre

	var apellido
	apellido= prompt("ingrese su apellido también", "ejemplo: miaau")

	var edad
	edad=prompt("ahora ingrese su edad, por favor", "ejemplo:20");
	txtIdEdad.value=edad

	



	alert("Su nombre y apellido es " + nombre + " "+ apellido + " y su edad es " + edad + " , gracias por los datos, saludos");
}

