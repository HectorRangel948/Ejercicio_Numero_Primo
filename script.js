//Escribir un programa que pida al usuario un número entero y mueste por pantalla si es un número primo o no.
//Un número primo es un numero mayor que 1, que solo se puede dividir entre 1 y entre si mismo.
//Ejemplos de numeros primos: 2, 3, 5, 7, 11, 13, 17, 19, etc

var entrada;

function encontrarNumeroPrimo(entrada)
{
    let respuesta;
    let contador=0;

    //Si el numero es 0 o 1 por default es compuesto
    if(entrada<=1)
    {
        respuesta = false;
        return respuesta;
    }

    //Si el numero es 2 o mayor se evalua para saber si es primo o compuesto
    else if (entrada>=2)
    {
        for(let i=2; i<=10; i++) //Se hace una serie de divisiones para saber si hay más de un residuo que dé 0
        {
            if(i == entrada) //Por default todos los números cuando se dividen entere sí mismos el resultado será 1, así que lo evitamos (claro que si el número seleccionado es mayor a 10 no se encontrará a sí mismo por default)
            {i++;}//Una ves que saltamos esa opción se continúa con las demás operaciones

            else if(entrada%i===0) //Si la división de la entrada entre algún otro valor (que no sea los ya descartados, 1 o entre sí mismo) da 0, entonces, se suma 1 al contador. Ya que los números primos solo son divisibles entre sí mismos, mientras que los compuestos son divisibles entre otros números. y entre 1 así como cualquier otro número, el hecho de que su residuo sea 0 divisible entre algún otro valor lo vluelve compuesto.
            {
                contador++;
            }
        }
    }
    if(contador==0){respuesta = true;}
    return respuesta;
}

while(true)
{
    entrada = prompt("Agregue un número");
    
    if(encontrarNumeroPrimo(entrada)== true)
    {
        prompt("El número que elegiste es primo");
    }
    else
    {
        prompt("El número que elegiste es un número compuesto");
    }

}