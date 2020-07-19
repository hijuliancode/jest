const sum = require('../src/sum')

// Describe : Crea un bloque donde podemos agrupar varias pruebas relacionadas : No es obligatorio pero si muy útil
describe('Pruebas para función de Suma', () => {
  test('1 + 2 is 3', () => {
    expect( sum(1, 2) ).toBe(3)
  })

  // it es un alias/abreviación de test()
  it('should return 3 with 1 + 2', () => {
    expect( sum(1, 3) ).toBe(4)
  })

  test('1 + (-2) is -1', () => {
    expect( sum(1, -2) ).toBe(-1)
  })

  test('-1 + (-2) is -3', () => {
    expect( sum(-1, -2) ).toBe(-3)
  })

})