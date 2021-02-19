/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var altura=txtIdLargo.value;
    var base=txtIdAncho.value;
    var perímetro;

    altura=parseFloat(altura);
    base=parseFloat(base);

    //se le agrega el alambre al perímetro
    perímetro= (base+ altura) * 6;

    

    alert("Usted necesita: " + perímetro+" metros de alambre");



}
function Circulo () 
{

    var radio;
    var perímetro;

   
    radio=txtIdRadio.value;
    radio=parseFloat(radio);

    perímetro= 2* Math.PI * radio;
    
    resultado= perímetro * 3;

    alert("Usted necesita: " + resultado+" metros de alambre");

     
}
function Materiales () 
{
    
    var area;
    var base;
    var altura;
    var cemento;
    var cal;

    base=txtIdAncho.value;
    altura=txtIdLargo.value;
    
    base=parseFloat(base);
    altura=parseFloat(altura);

    area= base*altura;
    cemento= area* 2;
    cal= area * 3;
   

    alert("Usted necesita de cemento: "+ cemento + " y necesita de cal: "+ cal);

}

/*By: Tapia Micaela.

nota: logré arreglar el error y ahora funciona
correctamente, a excepcion de la ausencia del 
math.ceil, el cual no he logrado entender ni 
emplear. */   