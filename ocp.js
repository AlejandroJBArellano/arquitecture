/* 
    Ejercicios para aplicar el OCP
    1. Sistema de pago: 
        Diseña un sistema de pago que admita diferentes métodos de pago (tarjeta de crédito, PayPal, etc.) sin modificar el código existente cuando se agrega un nuevo método de pago.

    2. Sistema de ordenamiento: 
        Crea un sistema que pueda ordenar una lista de objetos según diferentes criterios (nombre, precio, fecha, etc.) sin modificar el código de la función de ordenamiento principal.

    3. Sistema de figuras geométricas: 
        Implementa un sistema que pueda calcular el área y el perímetro de diferentes figuras geométricas (círculo, cuadrado, triángulo, etc.) sin modificar las clases de figuras existentes cuando se agrega una nueva figura.
*/

// 1. Sistema de pago

// Mi respuesta
// class PaymentProcessor {
//     pay(_amount) {
//         throw new Error('Not implemented');
//     }
// }

// class CreditCardPayment extends PaymentMethod {
//     pay(amount) {
//         return `Paying $${amount} using Credit Card`;
//     }
// }

// class PayPalPayment extends PaymentMethod {
//     pay(amount) {
//         return `Paying $${amount} using PayPal`;
//     }
// }

// const creditCardPayment = new CreditCardPayment();

// const payPalPayment = new PayPalPayment();

// respuesta de Gemini

// Interface (o clase abstracta si se requiere un comportamiento común) para métodos de pago
class PaymentMethod {
    pay(amount) {
        throw new Error('El método pay debe ser implementado');
    }
}

// Implementación para tarjeta de crédito
class CreditCardPayment extends PaymentMethod {
    pay(amount) {
        // Aquí iría la lógica real para procesar el pago con tarjeta,
        // que podría incluir validaciones, comunicación con un gateway de pago, etc.
        // Por ahora, simulamos el pago:
        return `Pagando $${amount} usando Tarjeta de Crédito`;
    }
}

// Implementación para PayPal
class PayPalPayment extends PaymentMethod {
    pay(amount) {
        // Aquí iría la lógica real para procesar el pago con PayPal.
        return `Pagando $${amount} usando PayPal`;
    }
}

// Clase PaymentProcessor (ahora más flexible)
class PaymentProcessor {
    processPayment(paymentMethod, amount) {
        if (!(paymentMethod instanceof PaymentMethod)) {
            throw new Error('El método de pago debe ser una instancia de PaymentMethod');
        }
        return paymentMethod.pay(amount);
    }
}

// Ejemplos de uso
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const paymentProcessor = new PaymentProcessor();

console.log(paymentProcessor.processPayment(creditCardPayment, 100)); // Pagando $100 usando Tarjeta de Crédito
console.log(paymentProcessor.processPayment(payPalPayment, 50));   // Pagando $50 usando PayPal


// Añadiendo un nuevo método de pago (ejemplo: Transferencia Bancaria)
class BankTransferPayment extends PaymentMethod {
  pay(amount) {
    return `Pagando $${amount} usando Transferencia Bancaria`;
  }
}

const bankTransferPayment = new BankTransferPayment();
console.log(paymentProcessor.processPayment(bankTransferPayment, 200)); // Pagando $200 usando Transferencia Bancaria

// Ejemplo de uso incorrecto (para demostrar la validación)
// const metodoPagoIncorrecto = {}; // No es instancia de PaymentMethod
// console.log(paymentProcessor.processPayment(metodoPagoIncorrecto, 10)); // Lanza un error

// 2. Sistema de ordenamiento

// Mi respuesta

// class Sorter {
//     sort(list) {
//         return list.sort();
//     }
// }

// class NameSorter extends Sorter {
//     sort(list) {
//         return list.sort((a, b) => a.name.localeCompare(b.name));
//     }
// }

// class PriceSorter extends Sorter {
//     sort(list) {
//         return list.sort((a, b) => a.price - b.price);
//     }
// }

// respuesta de Gemini

class Sorter {
    sort(list, comparator) {
      if (typeof comparator !== 'function') {
        return list.sort(); // Ordenamiento por defecto si no se proporciona comparador
      }
      return list.sort(comparator);
    }
  }
  
  // Comparadores (ahora definidos como funciones separadas)
  const compareByName = (a, b) => a.name.localeCompare(b.name);
  const compareByPrice = (a, b) => a.price - b.price;
  const compareByDate = (a, b) => new Date(a.date) - new Date(b.date); // Ejemplo para fechas
  
  // Ejemplos de uso
  const sorter = new Sorter();
  const items = [
    { name: "Charlie", price: 20, date: "2024-01-15" },
    { name: "Alice", price: 10, date: "2024-02-20" },
    { name: "Bob", price: 30, date: "2024-01-05" },
  ];
  
  console.log(sorter.sort(items, compareByName));
  console.log(sorter.sort(items, compareByPrice));
  console.log(sorter.sort(items, compareByDate));
  console.log(sorter.sort(items)); // Ordenamiento por defecto
  
  // Añadiendo un nuevo criterio de ordenamiento (ejemplo: por precio descendente)
  const compareByPriceDescending = (a, b) => b.price - a.price;
  console.log(sorter.sort(items, compareByPriceDescending));
  
  // Incluso podrías crear comparadores "sobre la marcha" con funciones anónimas:
  console.log(sorter.sort(items, (a, b) => a.name.length - b.name.length)); // Ordena por la longitud del nombre

// 3. Sistema de figuras geométricas

// Mi respuesta

// class Figure {
//     area() {
//         throw new Error('Not implemented');
//     }
//     perimeter() {
//         throw new Error('Not implemented');
//     }
// }

// class Circle extends Figure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius ** 2;
//     }
//     perimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// class Square extends Figure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     area() {
//         return this.side ** 2;
//     }
//     perimeter() {
//         return 4 * this.side;
//     }
// }

// respuesta de Gemini

// Interface (o clase abstracta si se requiere comportamiento común) para figuras
class Figure {
    area() {
        throw new Error('El método area debe ser implementado');
    }
    perimeter() {
        throw new Error('El método perimeter debe ser implementado');
    }
}

// Implementación para círculos
class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Implementación para cuadrados
class Square extends Figure {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
    perimeter() {
        return 4 * this.side;
    }
}

// Clase para calcular áreas y perímetros (ahora más genérica)
class FigureCalculator {
  calculateArea(figure) {
    if (!(figure instanceof Figure)) {
      throw new Error('El argumento debe ser una instancia de Figure');
    }
    return figure.area();
  }

  calculatePerimeter(figure) {
    if (!(figure instanceof Figure)) {
      throw new Error('El argumento debe ser una instancia de Figure');
    }
    return figure.perimeter();
  }
}



// Ejemplos de uso
const circle = new Circle(5);
const square = new Square(4);
const calculator = new FigureCalculator();

console.log(calculator.calculateArea(circle));    // 78.53981633974483
console.log(calculator.calculatePerimeter(circle)); // 31.41592653589793
console.log(calculator.calculateArea(square));    // 16
console.log(calculator.calculatePerimeter(square)); // 16


// Añadiendo una nueva figura (ejemplo: Triángulo)
class Triangle extends Figure {
    constructor(base, height, side1, side2, side3) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    area() {
        return (this.base * this.height) / 2;
    }
    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

const triangle = new Triangle(3, 4, 3, 4, 5);
console.log(calculator.calculateArea(triangle));    // 6
console.log(calculator.calculatePerimeter(triangle)); // 12

// Ejemplo de uso incorrecto (para demostrar la validación)
// const figuraIncorrecta = {}; // No es instancia de Figure
// console.log(calculator.calculateArea(figuraIncorrecta)); // Lanza un error