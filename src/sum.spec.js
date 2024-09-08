// toBeCloseTo(3141.59, 2) -> (nº esperado, decimales a redondear)

const { sum, pin, calcularVolumen, calcularSiglo} = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Ejercicio 1
test('validate PIN code', ()=>{
    expect(pin("1234")).toBe(true);    
    expect(pin("123456")).toBe(true);  
    expect(pin("123")).toBe(false);    
    expect(pin("12345a")).toBe(false); 
    expect(pin("1234567")).toBe(false);
    expect(pin("12a4")).toBe(false);
});

// Ejercicio 2
test('calculate volume of water tank', () => {
    // Valores en centímetros
    expect(calcularVolumen(100, 200, 1)).toBeCloseTo(1570.8, 1); // 100 cm diámetro, 200 cm altura
    expect(calcularVolumen(50, 100, 1)).toBeCloseTo(196.35, 2);
    
    // Valores en metros
    expect(calcularVolumen(1, 2, 2)).toBeCloseTo(1570.8, 1); // 1 m diámetro, 2 m altura
    expect(calcularVolumen(0.5, 1, 2)).toBeCloseTo(196.35, 2);
    
    // Datos inválidos
    expect(calcularVolumen(null, 200, 1)).toBe(-1);
    expect(calcularVolumen(100, null, 1)).toBe(-1);
    expect(calcularVolumen(100, 200, 3)).toBe(-1); // Unidad no válida
    
});

// Ejercicio 4
test('calculate century from year', () => {
    expect(calcularSiglo(1705)).toBe(18); 
    expect(calcularSiglo(1900)).toBe(19); 
    expect(calcularSiglo(1601)).toBe(17); 
    expect(calcularSiglo(2000)).toBe(20);
    expect(calcularSiglo(1)).toBe(1);
    expect(calcularSiglo(101)).toBe(2);
});