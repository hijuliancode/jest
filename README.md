## Jest

```describe()``` :
Crea un bloque donde podemos agrupar varias pruebas relacionadas | No es obligatorio pero si muy útil
| Recibe como parametros -> comentario, función que contrenda la suite de pruebas que vamos a escribir | ```describe('descripción', () => {})```

```test()``` o ```it()``` : 
Metodo que se va a encargar de ejecutar la prueba | ```test()``` tiene un alias -> ```it()``` | ```test('descripcion', () => {})``` or ```it('descripcion', () => {})```

```expect()``` :
Se utiliza cada vez que se desea testear un valor, dentro vamos a pasar el elemento, función a evaluar. | ```expect(suma())``` | [documentación](https://jestjs.io/docs/es-ES/expect#expectvalue)

```.toBe()``` :
Lo usamos para comparar valores, llama a object.is para comparar valores, lo cual es incluso mejor para probar que ```===``` | ```expect(suma(1, 2)).toBe(3)```
