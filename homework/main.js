// exercise 1

/* let peso = prompt('ingresa tu dinero en pesos', '')

let toDollars = peso / 20
alert(`tu dinero es ${toDollars} dolares`)
 */


//exercise 2 

/* let start = prompt('Ingresa tu usuario')

let password = parseInt(prompt('Ingresa tu password'))


if (start === 'victor' && password === 1234) {
    alert(`Acceso permitido!`)
} else {
    alert('Acceso denegado!')
} */

//exercise 3

/* let cash = parseInt(prompt('ingresa la cantidad total'))

if (cash >= 300) {
    let discount = cash * 25 / 100
    let total = cash - discount

    alert(`tu descuento es del 25%: total a pagar es $${total} `)
} else if (cash > 150 && cash < 300) {
    let discount = cash * 20 / 100
    let total = cash - discount
    alert(`tu total a pagar del 20% es $${total}`)
} else if (cash < 150) {
    alert(`no has recibido ningún descuento tu total a pagar es $${cash}`)
} */

//exercise 4
/* 
let calificacion1 = parseInt(prompt('ingresa tu primera calificación'))
let calificacion2 = parseInt(prompt('ingresa tu segunda calificación'))
let calificacion3 = parseInt(prompt('ingresa tu tercera calificación')) */

/* let primera = { from: 0, to: 3 }
let segunda = { from: 4, to: 6 }
let tercera = { from: 7, to: 8 }
let cuarta = { from: 9, to: 10 } */

/* let result = (calificacion1 + calificacion2 + calificacion3) / 3
alert(`${result}`)

if (result > 0 && result <= 3) {
    alert(`eres un alumno Malo`)
} else if (result > 3 && result <= 6) {
    alert(`eres un alumno Regular`)
} else if (result > 6 && result <= 8) {
    alert(`Eres un alumno Bueno`)
} else if (result > 8) {
    alert(`Eres un alumno Muy Bueno!`)
} */

//exercise 5

/* let entero = parseInt(prompt('Introduce un número entero del 1 al 12'))
if (entero > 0 && entero <= 12) {
    for (let result = 1; result <= 9; result++) {
        let multiplicación = result * entero
        console.log(`${entero} x ${result} = ${multiplicación}`)
    }

} else {
    alert('No esta dentro del rango 1-12')
} */

//exercise 6 
/* 
let dato = ''
let contador = 0
let suma = 0


do {
    dato = prompt('ingresar dato') //ingresa y guarda. Prompnt guarda un string
    if (!isNaN(parseInt(dato))) {
        suma = suma + parseInt(dato)
        contador = contador + 1
        console.log(`La suma de los numeros es ${suma}`)
        console.log(`la cantidad de numeros ingresados fue de: ${contador}`)
    }

} while (dato !== 'fin') */

//exercise 7 Fibonacci   0, 1, 1, 2, 3, 5, 8, 13, 21,...

/* let antes = 0
let despues = 1
const next = 0

function fib(n) {
    if (n < 5) {
        return 1
    }
    for (i = 1; i < n; i++) {
        const next = antes + despues
        antes = despues
        despues = next
    }
    return next

} */
/* let fibonacci = function(result, n) {
    let num1 = result[0],
        num2 = result[1],
        next,
        count = 2

    while (count < n) {
        next = num1 + num2
        num1 = num2
        num2 = next
        result.push(next)
        count++
    }
    return result
}
console.log(fibonacci([0, 1], 10)) 
 */

/* function fib(n) {
    if (n < 3) return 1;
    let antes = 1
    let despues = 1

    for (i = 2; i < n; i++) {
        const next = antes + despues
        antes = despues
        despues = next
    }
    return despues;
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10)) */




//calculator with Switch case

/* let operaciones = prompt(`que operacion quieres realizar: Selecciona y presiona enter
1 Suma
2 Resta
3 Multiplicacion
4 Division
5 Potencia\n`)


switch (operaciones) {
    case '1':
        console.log(`elegiste la suma`)
        let suma = parseInt(prompt('Ingresa el primer número para realizar la operacion:'))
        let suma2 = parseInt(prompt('Ahora ingresa el segundo número:'))
        let resultSuma = suma + suma2
        console.log(`tu resultado es ${resultSuma}`)
        break
    case '2':
        console.log(`elegiste la resta`)
        let rest = prompt('Ingresa el primer número para realizar la operacion:')
        let rest2 = prompt('Ahora ingresa el segundo número:')
        let resultRest = rest - rest2
        console.log(`tu resultado es ${resultRest}`)
        break
    case '3':
        console.log(`elegiste la multiplicacion`)
        let mult = prompt('Ingresa el primer número para realizar la operacion:')
        let mult2 = prompt('Ahora ingresa el segundo número:')
        let resultMulti = mult * mult2
        console.log(`tu resultado es ${resultMulti}`)
        break
    case '4':
        console.log(`elegiste la division`)
        let div = prompt('Ingresa el primer número para realizar la operacion:')
        let div2 = prompt('Ahora ingresa el segundo número:')
        let resultDivision = div / div2
        console.log(`tu resultado es ${resultDivision}`)

        break
    case '5':
        console.log(`elegiste la potencia`)
        let pot = prompt('Ingresa el primer número para realizar la operacion:')
        let pot2 = prompt('Ahora ingresa el segundo número:')
        let resultPot = pot ** pot2
        console.log(`tu resultado es ${resultPot}`)
        break
} */

//desafio numero primo: 
/* let numeroPrimo = prompt('Ingresa el numero a evaluar')
let bandera = false

for (let divisor = 2; divisor < numeroPrimo; divisor++) {
    let resultado = numeroPrimo % divisor
    if (resultado == 0) {
        bandera = true
    }

}
if (bandera == true) {
    console.log('No es primo')
} else {
    console.log('es primo!')
}
 */
//challenge Figuras
/* 1.- declarar las variables de las operaciones de las 8 figuras
2.-mostrar el menú de las figuras que hay por opciones

3.- pedir al usuario que seleccione una opción
 ejecutar las operaciones de la opcion seleccionada, por ejemplo del triangulo 
                hacer una evaluacion de que tipo de triangulo se trata
                determinar que tipo de triangulo es: equilatero, escaleno, isocsceles
                pedir el valor de los lados al usuario y gardarlos en las respectivas variables (no olvidar convertirlos a enteros ya
                    que al usar el + tiene preferencia de concatenación)
                    pedir el valor de los lados iguales y guardarlo en una variable
                    pedir el valor del lado diferente 
                  	declarar una variable para el resultado 
                  	ejecutar la formula en la variable de resultado 
                  	imprimir el valor de la variable resultado
                ejecutar la operación con la formula para el perimetro del triangulo seleccionado 
                en caso de iniciar el programa y elegir otra opción repetir los pasos anteriores

        y así seguir con las otras figuras
        depues seguir con el perimetro del cuadrado 
        1.1 el cuadrado tiene 4 lados pero como dos de sus lados son iguales en tonces solo se pediran 2 lados
		1.1.1 se declara una variable para almacenar el valor que ingresó el usuario
		se declara otra variable para ejecutar la formula del perimetro del cuadrado
		se imprime el valor del resultado
        
        seguir a continuacion con el rectangulo 
        igual solo se pedirán dos lados y se guardaran en las variables
        se aplicara la formula del perimetro 

        despues se proseguira con el circulo se pedirán los datos para el círculo 
        se piden los datos
        se pregunta con que elemento se quiere calcular el perimetro (perimetro o radio)
        se guardan en una variable
        y nuevamente se aplica la formula 
        se guarda el resultado en una variable 
        se imprime el resultado

        continuamos con la siguiente figura que es el paralelogramo 
        se piden 2 valores y se guardan en 2 variables 
        se aplica la formula del paralelogramo para perimetro p = 2(a+b)

        se procede con el pentagono 
        se hace una valoración por si se quiere calcular un pentagon regular o irregular
        se pide sólo un valor y se guarda en una variable (si es pentagono regular)
        se procede a utilizar la formula p= 5*l
        si es un pentagono irregular  
        se piden cinco valores y se guardan en 5 respectivas variables
         se procede a ejecutar la formula del pentagono irregular p= a+b+c+d+e

         a continuación se sigue con el perimetro del hexagono 
         se valida si se trata de un hexagono regular o irregular 
         si es regular entonces se pide un valor 
         se almacena en una varible
         se ejecuta la formula del hexagono regular p =6L

         si es un hexagono irregular se piden 6valores
         estos se guardan en 6 variables distintas
         se procede a ejecutar la formula del hexxagono irregular p= a+b+c+d+e+f

         y finalmente se calcula el perimetro del trapecio: 
         se piden 4 valores
         se almacenan en 4 diferentes variables
         se procede a jecutar la fomrula p =a+b+c+d
        se guarda en una variable
        se imprime el resultado

4.-meter las opciones dentro de un switch case 
5.- hacer la operacion de acuerdo a la opcion seleccionada */


/* let figuras = prompt(`selecciona una figura para calcular su perímetro:
1.-triangulo
2.- cuadrado
3.- rectangulo
4.- circulo
5.- parelologramo
6.- pentagono
7.- hexágono
8.- trapecio`)

switch (figuras) {
    case '1':
        alert(`Has elegido el triangulo`)
        let triangulosOpcion = prompt(`que tipo de triangulo deseas calcular? 
        1.- equilatero
        2.-isosceles
        3.-escaleno`)
        switch (triangulosOpcion) {
            case '1':
                alert('has elegido calcular el  perimetro del triangulo equilatero')
                let ladoa = parseInt(prompt('dame el primer valor:'))
                let ladob = parseInt(prompt('dame el segundo valor'))
                let ladoc = parseInt(prompt('dame el tercer lado'))

                let perimetroEquilatero = ladoa + ladob + ladoc
                console.log(`el perimetro del triangulo equilatero es: ${perimetroEquilatero}`)
                break

            case '2':
                alert(`has elegido calcular el triangulo isosceles: recuerda que este
                        triangulo tiene dos lados iguales y uno diferente...
                        `)
                let ladoIgual = parseInt(prompt('dame el valor de los lados iguales'))
                let diferente = parseInt(prompt('dame el valor diferente'))
                let resultadoIsosceles = 2 * ladoIgual + diferente
                console.log(`el perimetro del triangulo escaleno es: ${resultadoIsosceles}`)
                break

            case '3':
                alert(`has elegido calcular el perimetro del triangulo escaleno:
                 este triangulo no tiene las mismas medidas como el equilatero pero se calcula de la misma manera ;) `)
                let escalenoA = parseInt(prompt('dame el primer valor:'))
                let escalenoB = parseInt(prompt('dame el segundo valor'))
                let escalenoC = parseInt(prompt('dame el tercer lado'))
                let perimetroEscaleno = escalenoA + escalenoB + escalenoC
                console.log(`el perimetro del triangulo escaleno es: ${perimetroEscaleno}`)
                break

        }
        break
    case '2':
        alert(`has elegido calcular el  perimetro del cuadrado. como un caudrado tiene todos sus lados iguales,
        solo basta con que me des el valor de una sola medida`)
        let perCuadrado = prompt('Introduce el valor de uno de los lados del cuadrado:')
        let resultCuadrado = 4 * perCuadrado
        console.log(`el perimetro del cuadrado es de : ${resultCuadrado}`)
        break

    case '3':
        alert(`Has elegido el rectangulo`)
        let base = parseInt(prompt('dame el valor de la base'))
        let altura = parseInt(prompt('dame el valor de la altura'))
        let perimetroRectangulo = 2 * (base + altura)
        console.log(`el perimetro del rectangulo es: ${perimetroRectangulo}`)
        break

    case '4':
        alert(`Has elegido calcular el perimetro del circulo. Bien el calculo del perimetro se puede conocer
        por medio de su radio o su diametro.`)
        let opcionesCirculo = prompt(`¿cómo te gustaría calcularlo?
        1.- Radio
        2.- Diametro`)
        switch (opcionesCirculo) {
            case '1':
                let radio = prompt('Muy bien. Ingresa el valor del radio:')
                let resultRadio = 2 * (3.1416) * radio
                console.log(`el perimetro del circulo por medio de su radio es: ${resultRadio}`)
                break

            case '2':
                let diametro = prompt('Por favor ingresa el valor del diametro:')
                let diametroResult = (3.1416) * diametro
                console.log(`El valor del perimetro del circulo por medio del su diametro es : ${diametroResult}`)
                break

        }
        break

    case '5':
        alert(`Has elegido el paralelogramo`)
        let baseParalelogramo = parseInt(prompt('dame el valor de la base'))
        let alturaParalelogramo = parseInt(prompt('dame el valor de la altura'))
        let resultParalelogramo = 2 * (baseParalelogramo + alturaParalelogramo)
        console.log(`El perimetro del paralelogramo es: ${resultParalelogramo}`)
        break

    case '6':
        alert(`Has elegido el pentagono. Existen pentagonos regulares e irregulares y cada uno se calcula de manera
        diferente.`)
        let tiposPentagono = prompt(`Dime ¿Qué tipo de pentagono te gustaria conocer su perimetro?
        1.- regular
        2.- irregular`)
        switch (tiposPentagono) {
            case '1':
                let ladoPentagono = prompt('Con un pentagono regular basta con que me des uno de sus valores para calcular su perimetro:')
                let perimetroRegular = 5 * ladoPentagono
                console.log(`El perimetro del pentagono regular es: ${perimetroRegular}`)
                break

            case '2':
                alert('Con un pentagono irregular necesitaremos los valores de los 5 lados:')
                let lado1 = parseInt(prompt('dame el primer valor'))
                let lado2 = parseInt(prompt('dame el segundo valor'))
                let lado3 = parseInt(prompt('dame el valor del lado 3: '))
                let lado4 = parseInt(prompt('ingresa el valor numero 4'))
                let lado5 = parseInt(prompt('finalmente ingresa el valor numero 5'))
                let resultPentagonoI = lado1 + lado2 + lado3 + lado4 + lado5
                console.log(`el perimetro del pentagono irregular es: ${resultPentagonoI}`)
                break


        }
        break

    case '7':
        alert(`Has elegido calcular el perimetro del hexagono:`)
        let ladoHexagono = prompt('el hexagono se calcula con el valor de uno de sus lados: introduce el valor')
        let resultHexagono = 6 * ladoHexagono
        console.log(`el perimetro del hexagono es: ${resultHexagono}`)
        break

    case '8':
        alert(`Has elegido calcular el perimetro del trapecio: este se calcula con los 4 valores de sus respectivos lados`)
        let lado1Trapecio = parseInt(prompt('dame el primer valor'))
        let lado2Trapecio = parseInt(prompt('dame el segundo valor'))
        let lado3Trapecio = parseInt(prompt('dame el tercer valor: '))
        let lado4Trapecio = parseInt(prompt('ingresa el cuarto valor'))
        let perimetroTrapecio = lado1Trapecio + lado2Trapecio + lado3Trapecio + lado4Trapecio
        console.log(`El valor del perimetro del trapecio es: ${perimetroTrapecio}`)
        break
} */

// reto 3:

/* let usuario = '';
let password = ''

usuario = prompt('hola cual es tu nombre?')
password = parseInt(prompt('hola cual es tu constraseña?'))
if (usuario === 'v' && password === 1) {
    let opciones = prompt(`bienvenido señor vic
    ¿Qúe desea hacer?
    1.- Consulta de saldo
    2.- Depósito de efectivo
    3.- Retiro de dinero`)
    switch (opciones) {
        case '1':
            alert('su saldo es de $5000.00')
            break
        case '2':
            alert(`Usted ha elegido depósito en efectivo: Por favor seleccione el el monto y el servicio:`)
            let tipoDeposito = prompt('Monto:')
            let tipoServicio = prompt('Nombre del servicio:')

            alert(`su deposito es de :$${tipoDeposito} y el servicio es de: ${tipoServicio}`)
            alert('es correcto?: presione enter para aceptar o esc para salir')
            alert('Usted ha enviado su depósito! fue un placer atenderle')
            break

        case '3':
            let opcionesRetiro = prompt(`¿Cúal es la cantidad que desea retirar?
            1.-$500.00
            2.- $1000.00
            3.-$1500.00
            4.-$2000.00
            5.- $2500.00
            6.-$3000.00`)
            switch (opcionesRetiro) {
                case '1':
                    alert('Usted ha retirado $500.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break
                case '2':
                    alert('Usted ha retirado $1000.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break
                case '3':
                    alert('Usted ha retirado $1500.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break
                case '4':
                    alert('Usted ha retirado $2000.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break
                case '5':
                    alert('Usted ha retirado $2500.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break
                case '6':
                    alert('Usted ha retirado $3000.00 pesos ')
                    alert('Fue un placer atenderle. Vuelva pronto')
                    break

            }
            break



    }
} else {

    alert('usuario o contraseña incorrecto por favor vuelve a intentarlo')
    for (let i = 3; i >= 1; i--) {

        alert(`te quedan ${i} intentos`);
        prompt('hola cual es tu nombre?')
        prompt('hola cual es tu constraseña?')
    }
    alert('Tarjeta bloqueada')

} */

//reto= 4 el factorial

/* let enteroP = parseInt(prompt('dame el numero entero'))
let r = 1
if (enteroP > 0) {
    console.log(`El factorial de ${enteroP} es:`)
    for (let factorial = 1; factorial <= enteroP; factorial++) {

        r *= factorial

        console.log(`${r}`)

    }
} else console.log('No es un entero positivo') */

//reto especial

/* let multiplo = parseInt(prompt('dame un numero para obtener sus multiplos'))
let residuoTres = multiplo % 3
let residuoCinco = multiplo % 5


console.log(`los multiplos de ${multiplo} son:`)
for (let result = 1; result < 7; result++) {
    let multiplication = multiplo * result
    console.log(` ${multiplication}`)
}

if (residuoTres == 0 && residuoCinco == 0) {
    alert(`${multiplo} es multiplo de 3 y de 5 a la vez: es "trescinco"`)
} else if (residuoTres == 0) {
    alert(`${multiplo} es multiplo de 3`)
} else if (residuoCinco == 0) {
    alert(`${multiplo} es multiplo de 5`)
} */