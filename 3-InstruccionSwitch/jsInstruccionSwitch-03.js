function mostrar() {
	var mesDelAño = txtIdMes.value;
	var mensaje = "";
	switch (mesDelAño) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29";
			break;
		default:
			mensaje = "Este mes tiene 30 días o más";
	}
	alert(mensaje);
}