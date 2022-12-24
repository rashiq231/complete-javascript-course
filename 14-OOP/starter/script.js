// 'use strict';

// const Person = function (firstName, birthYear) {
//   console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const rashiq = new Person('Rashiq', 1991);

// const farah = new Person('Farah', 1999);

// console.log(rashiq);

// //prototypes

// console.log(Person.prototype);

// Person.prototype.calAge = function () {
//   console.log(2022 - this.birthYear);
// };

// rashiq.calAge();

// farah.calAge();

// console.dir(Person.prototype.constructor);
// // console.log(rashiq.__proto__.__proto__.__proto__);

// Person.prototype.species = 'Homo Sapiens';

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} going at speed ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   if (this.speed > 0) {
//     this.speed -= 5;
//     console.log(`${this.make} going at speed ${this.speed}`);
//   } else {
//     console.log(`${this.make} is at halt`);
//   }
// };

// let bmw = new Car('BMW', 10);
// let mer = new Car('Mercedes', 50);

// bmw.accelerate();
// mer.brake();
// mer.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.brake();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('hi there..');
//     console.log(this);
//   }
// }

// const arham = new PersonCl('Arham Rashiq', 2022);

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };
// arham.greet();

// console.log(arham.fullName);

// PersonCl.hey();

// const account = {
//   owner: 'Rashiq',
//   movements: [200, 50, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calAge: function () {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birthYear = 2020;
// steven.calAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calAge();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} current speed is ${this.speed} km/hr`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} current speed is ${this.speed} km/hr`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// let ford = new Car('Ford', 20);

// ford.accelerate();
// ford.brake();
// console.log(ford.speedUs);

// ford.speedUs = 50;
// console.log(ford.speed);
// ford.brake();
// console.log(ford.speedUs);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}`);
// };

// const mike = new Student('Mike', 2000, 'Coumpter Science');

// mike.calAge();
// mike.introduce();

// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at speed ${this.speed}km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at speed ${this.speed} km/hr`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/hr, with charge of ${this.charge}`
//   );
// };

// let tesla = new EV('Tesla', 140, 50);
// let ford = new Car('Ford', 50);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();
// ford.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('hi there..');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calAge() {
//     console.log(`I'm ${2037 - this.birthYear}`);
//   }
// }

// const martha = new StudentCl('Martha Tesla', 2000, 'CS');
// martha.introduce();
// martha.calAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudnetProto = Object.create(PersonProto);
// StudnetProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudnetProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudnetProto);

// jay.init('Jay', 2010, 'Coumpter Science');
// jay.introduce();
// jay.calcAge();

// class Account {
//   locale = navigator.language;

//   // Private fields
//   #movements = [];
//   #pin;

//   constructor(ownerName, currency, pin) {
//     this.ownerName = ownerName;
//     this.currency = currency;
//     //protected
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${ownerName}`);
//   }
//   // public Interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
//   _approveLoan(val) {
//     return true;
//   }

//   static helper() {
//     console.log('Helper');
//   }
// }

// const acc1 = new Account('Rashiq', 'INR', 2222);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1.getMovements());

// console.log(acc1._approveLoan(100));

// // console.log(acc1.#movements);

// Account.helper();

// //Chaining

// acc1.deposit(100).deposit(200).withdraw(150).requestLoan(2000).deposit(150);

// console.log(acc1.getMovements());
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at speed ${this.speed} km/hr`);
    return this;
  }

  breake() {
    this.speed -= 5;
    console.log(`${this.make} is going at speed ${this.speed} km/hr`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(charge) {
    this.#charge = charge;
    console.log(`${this.make} is charged upto ${this.#charge}`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/hr, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 100, 90);

tesla
  .accelerate()
  .chargeBattery(90)
  .breake()
  .accelerate()
  .accelerate()
  .breake()
  .chargeBattery(50);
