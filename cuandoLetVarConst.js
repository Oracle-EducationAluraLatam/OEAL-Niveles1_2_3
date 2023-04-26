
/*  Escopo global:
        Es cuando declaramos una variable afuera de una función como while, if,
        for, como por ejemplo:
    
var miNombre = "Andrés";
console.log(miNombre);
cosole.log(window);
window.alert("Hola");

function mostrarMiNombre() {
    console.log(miNombre);
}

mostrarMiNombre();
*/

/*  Escopo local:
        Es cuando declaramos una variable dentro de una función o un bloque, 
        como por ejemplo:

    function mostrarMiApellido() {
        var miApellido = "Arteaga";
        console.log(miApellido);
    }

    mostrarMiApellido();    

    if(true) {
        var animal = "Gato";
    }
    console.log(animal);

        En el console.log(animal) no debería de imprimir nada pero pasa porque el
        comando reservado 'var' no respeta el escopo de bloque; para resolver esto
        utilizamos 'let'. Para 'const' no se pueden modificar los valores, es como
        si fuesen únicos.
        
        Como conclusión, es mejor usar 'var' cuando sea una situación en la que se
        necesite mucho añadir algo al objeto global 'objeto window', sino 
        utilizamos 'let' en casos de que la variable sea flexible, cuando la 
        variable necesite cambiar y si nada de esto pasa siempre vamos a usar
        'const' es lo mejor para que nuestro programa sea menos confuso y más
        fácil de leer.

*/