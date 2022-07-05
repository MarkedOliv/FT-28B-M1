
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
//Las diferencias entre una variable declarada y otra sin declarar son: 1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {//a,b,c son los parámetros de la función
  var x = 10;//crea una variable x en el contexto de la función
  console.log(x);//10
  console.log(a);//Vendria siendo el valor que se de al llamar la función
  var f = function(a, b, c) {//a,b,c son los parámetros de la función pero no se heredan
    b = a;//b adquiere el valor de a
    console.log(b);//el valor de b es a así que seria lo que se pase por parámetro
    b = c;//b cambia su valor por el valor de c
    var x = 5;// se crea otra variable x
  }
  f(a,b,c);//se llama a la función con las variables adquiridas de la función c
  console.log(b);//se muestra el valor de b en consola
}
c(8,9,10);//se llama a la función con determinados numeros
console.log(b);//se muestra 10
console.log(x);//se muestra 1
```

```javascript
console.log(bar);//undefined
console.log(baz);//Para la ejecución porque no esta declarado
foo();//Hola!
function foo() { console.log('Hola!'); }
var bar = 1;//Declaración e asignación
baz = 2;// asignación
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";//Esto solo esta disponible en su contexto
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//"$45"
"4" - 2//2
"4px" - 2//NaN
7 / 0// Infinity
{}[0]// [ 0 ]
parseInt("09")//09 en enteros
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//?
3>2>1//false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
//las variables al ser llamadas antes de ser declaradas e inicializadas solo toma el nombre de la variable y crea un espacio vacio que no esta definido
//en cambio cuando JavaScript nota que hay funciones en el código las "traspasa" hacia el principio de este para tener el código de estas y poder usarlo
function test() {
   console.log(a);//Undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';//Declara e inicializa la variable

function getFood(food) {
    if (food) {
        var snack = 'Friskies';//si food es true se cambia y retorna
        return snack;
    }
    return snack;
}

getFood(false);//No hace nada debido a que no tiene parámetros para la función
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';//Se declara e inicializa la variable global fullname
var obj = {
   fullname: 'Natalia Nerea',//El obj tiene una propiedad llamada fullname
   prop: {
      fullname: 'Aurelio De Rosa',//El objeto prop de el obj tiene una prop llamada fullname
      getFullname: function() {
         return this.fullname;//deberia retornar el fullname Aurelio De Rosa
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());//Retorna Juan Perez ya que su contexto ahora es el global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//Primero
   setTimeout(function() { console.log(2); }, 1000);//Cuarto y último ya que tiene un temporizador
   setTimeout(function() { console.log(3); }, 0);//Tercero Aunque tenga un temporizador de 0 JS espera para procesarlo
   console.log(4);//Segundo
}

printing();//1 4 3 2
```
