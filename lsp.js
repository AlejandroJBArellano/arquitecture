// Ejercicio 1

class Figure {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

class Square extends Figure {
    constructor(side) {
        super(side, side);
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }

    getArea() {
        return this.width ^ 2;
    }

    getPerimeter() {
        return this.width * 4;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

// respuesta correcta

class Figure {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

class Square extends Figure {
    constructor(side) {
        super(side, side); // Inicializa width y height con el mismo valor
    }

    getArea() {
        return this.width * this.width; // O this.height * this.height
    }

    getPerimeter() {
        return this.width * 4; // O this.height * 4 
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super(width, height);
    }

    // ... (métodos de la clase Rectangle sin cambios)
}

/*
Ejercicio 2: Vehículos

Crea una clase base Vehiculo con métodos como acelerar(), frenar() y girar().
Crea subclases: Coche, Moto, Bicicleta.
Asegúrate de que:
Cada subclase implemente los métodos heredados de Vehiculo de forma coherente.
No se introduzcan métodos que no tengan sentido para todos los vehículos (por ejemplo, volar() para un coche). 
*/

class Vehicle {
    constructor() {
        this.speed = 0;
    }

    accelerate() {
        this.speed++;
    }

    brake() {
        this.speed--;
    }

    turn(direction) {
        console.log(`Girando a la ${direction}`);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
    }
}

class Bicycle extends Vehicle {
    constructor() {
        super();
    }
}

// mi código es correcto

/**
 * Ejercicio 3: Empleados

Crea una clase base Empleado con atributos como nombre, apellido y salario.
Crea subclases: EmpleadoTiempoCompleto, EmpleadoPorHoras, Contratista.
Asegúrate de que:
Cada subclase implemente los métodos necesarios para calcular el salario de acuerdo a su tipo de contrato.
No se introduzcan métodos que no tengan sentido para todos los empleados (por ejemplo, calcularHorasExtras() solo para empleados por horas).
 */

class Employee {
    constructor(name, lastName, salary) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
    }

    getPaymentPerHour(){
        return this.salary / 160; // 160 horas al mes
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, lastName, salary) {
        super(name, lastName, salary);
    }
}

class HourlyEmployee extends Employee {
    constructor(name, lastName, salary, hours) {
        super(name, lastName, salary);
        this.hours = hours;
    }

    getPayment() {
        return this.hours * this.getPaymentPerHour();
    }
}

class Contractor extends Employee {
    constructor(name, lastName, salary) {
        super(name, lastName, salary);
    }
}

// Respuesta correcta

class Employee {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getPayment() { 
        // Método abstracto que debe ser implementado por las subclases
        throw new Error("Método getPayment() no implementado"); 
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, lastName, monthlySalary) {
        super(name, lastName);
        this.monthlySalary = monthlySalary;
    }

    getPayment() {
        return this.monthlySalary;
    }
}

class HourlyEmployee extends Employee {
    constructor(name, lastName, hourlyRate, hoursWorked) {
        super(name, lastName);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    getPayment() {
        return this.hourlyRate * this.hoursWorked;
    }
}

class Contractor extends Employee {
    constructor(name, lastName, projectFee) {
        super(name, lastName);
        this.projectFee = projectFee;
    }

    getPayment() { 
        return this.projectFee; 
    }
}

/**
 * Ejercicio 4: Animales

Crea una clase base Animal con métodos como comer(), dormir() y hacerRuido().
Crea subclases: Perro, Gato, Pajaro.
Asegúrate de que:
Cada subclase implemente los métodos heredados de Animal de forma coherente.
No se introduzcan métodos que no tengan sentido para todos los animales (por ejemplo, volar() solo para pájaros).
 */

class Animal {
    eat() {
        console.log('Comiendo...');
    }

    sleep() {
        console.log('Durmiendo...');
    }

    makeNoise(noise) {
        console.log(noise);
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    bark() {
        this.makeNoise('Guau guau');
    }
}

// mi código es correcto