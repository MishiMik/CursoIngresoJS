/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
    var precioLampara;
    var marcaLampara;
    var cantidadPorPrecio;
    var precioFinal;
    var descuento;
    var mensaje= "";
    var ingresosBrutos;

   
    precioLampara= 35;
    cantidad=txtIdCantidad.value;
    marcaLampara=Marca.value;
    cantidadPorPrecio= precioLampara*cantidad;
    ingresosBrutos= 10;
    precioLampara=parseFloat(precioLampara);
    cantidad=parseFloat(cantidad);
    
    if (cantidad>5)
    {
        descuento=50;
        precioFinal= cantidadPorPrecio-(cantidadPorPrecio * 0.5);

    }

    if(cantidad==5) 
    {
        if (marcaLampara== "ArgentinaLuz")
        {
            descuento=40;
            precioFinal= cantidadPorPrecio * 0.4;
        }
        else
        {
            descuento=30;
            precioFinal= cantidadPorPrecio*0.3;}
        }
    
        if(cantidad==4)
        {
            if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
            {
                descuento=25;
                precioFinal= (cantidadPorPrecio * 0.25)- cantidadPorPrecio;
            }
            else
            {
                descuento= 20;
                precioFinal= cantidadPorPrecio-(cantidadPorPrecio* 0.2);
            }
        }

    if (cantidad==3)
    {
        if(marcaLampara=="ArgentinaLuz")
        {
            descuento= 15;
            precioFinal= cantidadPorPrecio-(cantidadPorPrecio*0.15);
        }
        else
        {
            if(marcaLampara=="FelipeLamparas")
            {
                descuento= 10;
                precioFinal= cantidadPorPrecio-(cantidadPorPrecio* 0.1);
            }
            else
            {
                descuento=5;
                precioFinal= cantidadPorPrecio-(cantidadPorPrecio* 0.05);
            }
        }
    }
    mensaje= `usted compró ${cantidad} lamparitas, con un descuento del ${descuento}%, el precio final es ${precioFinal}`
    alert(mensaje);

    if(precioFinal>=120)
    {
        precioFinal= precioFinal*1.1;
        mensaje= alert(`IIBB usted pagó ${precioFinal} con un ${ingresosBrutos}% de impuesto`);
    }


    txtIdprecioDescuento.value=precioFinal;
    precioFinal=parseFloat(precioFinal);
   
}