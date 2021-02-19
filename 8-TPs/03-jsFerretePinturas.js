/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    
    //(0 °C × 9/5) + 32 = 32 °F


    var celsius;
    var resultado;

    celsius=txtIdTemperatura.value;
    celsius=parseFloat(celsius);
    resultado= (celsius * 9/5)+ 32;

    alert(celsius+ "° celsius equivalen a "+ resultado+ "° fahrenheit.");

	
}

function CentigradosFahrenheit () 
{
    //(32 °F − 32) × 5/9 = 0 °C
    
    var fahrenheit;
    var resultado;

    fahrenheit=txtIdTemperatura.value;
    fahrenheit=parseFloat(fahrenheit);

    resultado= (fahrenheit - 32)*5/9;

    alert(fahrenheit+"° fahrenheit equivalen a "+resultado+ "° celsius.");
}

// by: Micaela tapia.