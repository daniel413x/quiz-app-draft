/* eslint-disable linebreak-style */
import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'Module III',
  slug: 'module-iii',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `let arr = [true, true, true, true, true, true];
    let [, ...middle, ignore] = arr;
    console.log(middle.findIndex((bool) => bool == true));`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'SyntaxError'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TypeError'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '0'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '3'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid loop construct in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'for each...in'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'for...of'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'for...in'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'do...while'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `console.log(hoistedVar);
    var hoistedVar = "theString";
    console.log(hoistedVar);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `undefined
theString`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `null
theString`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'ReferenceError: hoistedVar is not defined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `theString
theString`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of running the following code?\n\n'],
        [QuizMarkdownType.CODE, `arrow();
    let arrow = () => {
        console.log("an expression");
    }`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'ReferenceError: Cannot access \'arrow\' before initialization'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TypeError: arrow is not a function'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'an expression'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `console.log("1" - 10);
    console.log("1" + 10);
    console.log(10 + "1");
    console.log(10 - "1");`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, `-9
110
101
9`],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, `NaN
110
101
NaN`],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, `-9
110
101
-9`],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, `NaN
NaN
NaN
NaN`],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code output?'],
        [QuizMarkdownType.CODE, `var aName = null;
    
    console.log((aName ?? "unknown").toUpperCase());`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'UNKNOWN'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'unknown'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TypeError: Cannot read property \'toUpperCase\' of null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The following statement will print...'],
        [QuizMarkdownType.CODE, 'console.log(typeof null);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'object'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'boolean'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of this code?'],
        [QuizMarkdownType.CODE, `let aName = null;
    console.log(aName.toUpperCase());`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'TypeError: Cannot read property \'toUpperCase\' of null'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '"" (empty string)'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Animal() {}
Animal.prototype.eat = function() {
  console.log('Eating...');
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const beagle = new Dog();
beagle.eat();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Eating...\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

const bob = new Person('Bob');
console.log(bob.hasOwnProperty('name'));`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `const obj = {};
console.log(obj.toString());`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'[object Object]\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following code?\n\n'],
        [QuizMarkdownType.CODE, `function Animal() {}
Animal.prototype.eat = function() {
  console.log('Eating...');
};

function Dog() {}
Dog.prototype = Animal.prototype;

const beagle = new Dog();
beagle.eat();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Eating...\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Vehicle() {}
Vehicle.prototype.drive = function() {
  console.log('Driving...');
};

function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const tesla = new Car();
tesla.drive();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Driving...\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `function Shape() {}
Shape.prototype.area = function() {
  return this.width * this.height;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle(10, 20);
console.log(rect.area());`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '200'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following code?\n\n'],
        [QuizMarkdownType.CODE, `function Parent() {}
Parent.prototype.greet = function() {
  console.log('Hello from Parent');
};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child();
child.greet();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Hello from Parent\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Animal() {}
Animal.prototype.eat = function() {
  console.log('Eating...');
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const beagle = new Dog();
console.log(beagle instanceof Dog);
console.log(beagle instanceof Animal);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true, true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'true, false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'false, true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'false, false'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following code?\n\n'],
        [QuizMarkdownType.CODE, `function Employee() {}
Employee.prototype.work = function() {
  console.log('Working...');
};

function Manager() {}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

const mgr = new Manager();
mgr.work();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Working...\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Machine() {}
Machine.prototype.start = function() {
  console.log('Machine starting...');
};

function Computer() {}
Computer.prototype = Machine.prototype;

const myComputer = new Computer();
myComputer.start();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Machine starting...\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which prototype do all JavaScript functions inherit properties and methods from?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Function.prototype'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Object.prototype'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Array.prototype'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Object.prototype'],
            [QuizMarkdownType.TEXT, 'and'],
            [QuizMarkdownType.INLINE_CODE, 'Function.prototype'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method is NOT defined on Object.prototype?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'bind()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'toString()'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'hasOwnProperty()'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'isPrototypeOf()'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

const alice = new Person('Alice');
alice.sayHello();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Hello, my name is Alice\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '\'Hello, my name is undefined\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '\'Hello, my name is [object Object]\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '\'Hello, my name is\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the '],
        [QuizMarkdownType.INLINE_CODE, '__proto__'],
        [QuizMarkdownType.TEXT, ' property represent in a JavaScript object?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The prototype of the object'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The constructor function of the object'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The own properties of the object'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The parent class of the object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the relationship between Function.prototype and Object.prototype?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Function.prototype inherits from Object.prototype'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Object.prototype inherits from Function.prototype'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They are completely independent of each other'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They are the same object'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `function Car() {}
Car.prototype.wheels = 4;

const myCar = new Car();
console.log(myCar.wheels);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you create an object that inherits from another object in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using Object.create()'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the new keyword with a constructor function'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using class syntax'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'All of the above'],
          ],
        },
      ],
      correctAnswer: '3',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `function Person(name) {
  this.name = name;
}
Person.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

const alice = new Person('Alice');
alice.sayHello();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'Uncaught TypeError'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '\'Hello, my name is undefined\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '\'Hello, my name is [object Object]\''],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '\'Hello, my name is Alice\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the following code do?'],
        [QuizMarkdownType.CODE, `function Animal() {}
Animal.prototype.eat = function() {
  console.log('Eating...');
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const beagle = new Dog();
beagle.eat();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates a Dog object that inherits from Animal and calls the eat method'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creates an Animal object that inherits from Dog and calls the eat method'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Throws an error because Dog cannot inherit from Animal'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Does nothing because the eat method is not defined on Dog'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following expression?\n\n'],
        [QuizMarkdownType.CODE, 'null ?? \'default\''],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'default\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '\'\''],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'x'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let x = true;
x &&= false;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'y'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let y = false;
y ||= true;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'z'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let z = null;
z ??= 'default';`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'default\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which logical operator would you use to check if both conditions are true?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '!'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which logical operator would you use to provide a default value when the variable is null or undefined?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '!'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which logical operator would you use to invert a boolean value?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '!'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `let x = true;
x &&= false;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'false'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the output of the following code?\n\n'],
        [QuizMarkdownType.CODE, `let x = null;
    if (x === null || undefined) {
        x = Object.create(null);
    }
    x ??= 5;
    console.log(x);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '{}'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '5'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'undefined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      // type coercion
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code log?'],
        [QuizMarkdownType.CODE, `const a = null;
const b = false;
const c = true;
const d = "";

console.log(c + b + d + a);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1null'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'nullfalsetrue'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a static property in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A property that belongs to the class itself, rather than instances of the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A property that belongs to instances of the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A property that can be accessed only within the class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A property that is inherited by subclasses'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you define a static property in a JavaScript class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the static keyword inside the class'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the const keyword inside the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the let keyword inside the class'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the var keyword inside the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, `class Car {
  static wheels = 4;
}

const myCar = new Car();
console.log(myCar.wheels);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '4'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How can you access a static property in a class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the class name followed by the property name'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the this keyword inside the class'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the new keyword'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the instance of the class'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?'],
        [QuizMarkdownType.CODE, `class Animal {
  static kingdom = 'Animalia';
  static showKingdom() {
    console.log(this.kingdom);
  }
}

Animal.showKingdom();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'Animalia\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'ReferenceError'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      // type coercion
      question: [
        [QuizMarkdownType.TEXT, 'What will the following code log?'],
        [QuizMarkdownType.CODE, `const a = null;
const b = false;
const c = true;
const d = "";

console.log(a + d + b + c);`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'nullfalsetrue'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'true'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'null1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The conditional block in the following code is equivalent to which logical operator?'],
        [QuizMarkdownType.CODE, `let x = null;
if (x === null || undefined) {
    x = 4;
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??='],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||='],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&='],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??='],
            [QuizMarkdownType.TEXT, 'or'],
            [QuizMarkdownType.INLINE_CODE, '&&='],
          ],
          order: 3,
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following expression in JavaScript?\n\n'],
        [QuizMarkdownType.CODE, 'console.log(\'5\' + 3);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'53\''],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '\'8\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'NaN'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following expression in JavaScript?\n\n'],
        [QuizMarkdownType.CODE, 'console.log(\'5\' - 3);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '\'53\''],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'NaN'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console?\n\n'],
        [QuizMarkdownType.CODE, 'console.log(true + false);'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'truefalse'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'NaN'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'x'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let x = 10;
x &&= 5;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '5'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '10'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'y'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let y = null;
y ||= 20;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '20'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the value of '],
        [QuizMarkdownType.INLINE_CODE, 'z'],
        [QuizMarkdownType.TEXT, ' after the following code executes?\n\n'],
        [QuizMarkdownType.CODE, `let z = 0;
z ??= 30;`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '0'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '30'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'null'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which logical assignment operator will assign a value only if the variable is falsy?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||='],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&='],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??='],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '='],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which logical assignment operator will assign a value only if the variable is null or undefined?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '??='],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '||='],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '&&='],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '!=='],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of implicit type coercion in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '\'5\' * 1'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Number(\'5\')'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'String(5)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'parseInt(\'5\')'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be the result of the following comparison?\n\n'],
        [QuizMarkdownType.CODE, 'console.log(5 == \'5\');'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'true'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'false'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'undefined'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'NaN'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the scope of a variable declared with '],
        [QuizMarkdownType.INLINE_CODE, 'var'],
        [QuizMarkdownType.TEXT, ' inside a function?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Function scope'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Block scope'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Global scope'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Local scope'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which keyword allows you to declare a block-scoped variable in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'let'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'var'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'function'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'block'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the scope of a variable declared with '],
        [QuizMarkdownType.INLINE_CODE, 'const'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Block scope'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Function scope'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Global scope'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Local scope'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which variable declaration creates a global variable when declared outside of any function or block?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'var'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'let'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'const'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'global'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What will be logged to the console in the following code?\n\n'],
        [QuizMarkdownType.CODE, `function test() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

test();`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '2, 2'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '2, 1'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '1, 2'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '1, 1'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Node.js uses the event loop to achieve non-blocking I/O.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The event loop is only applicable to browser-side JavaScript.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'False'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'True'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Node.js primarily used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To run JavaScript on the server-side'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To render HTML and CSS in the browser'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage databases'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To develop mobile applications'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which engine does Node.js use to execute JavaScript code?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'V8'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'SpiderMonkey'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Chakra'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'JavaScriptCore'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which module in Node.js is used for handling file system operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'fs'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'http'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'path'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'url'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does Node.js handle asynchronous operations?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using an event-driven, non-blocking I/O model'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By creating multiple threads'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using synchronous I/O operations'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By using a blocking I/O model'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which package manager is commonly used with Node.js to manage packages and dependencies?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'npm (Node Package Manager)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'pip'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'composer'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'gem'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the V8 engine primarily used for?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a JavaScript engine used in Google Chrome and Node.js'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a rendering engine for HTML and CSS'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a database engine for managing SQL queries'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is an engine for compiling C++ code'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which company developed the V8 engine?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Google'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Mozilla'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Microsoft'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Apple'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In which programming language is the V8 engine written?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'C++'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'JavaScript'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Java'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Python'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is Just-In-Time (JIT) compilation in the context of the V8 engine?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A technique to improve execution speed by compiling code during execution'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method of interpreting code without compilation'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A process of pre-compiling all code before execution'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method to delay compilation until after execution'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a feature of the V8 engine?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Garbage collection'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic code optimization'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Support for Java bytecode'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Execution of JavaScript code'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which technology uses the V8 engine to run JavaScript on the server-side?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Node.js'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Angular'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'React'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Django'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary role of the V8 engine in Google Chrome?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To execute JavaScript code within web pages'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage network requests'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To render HTML and CSS'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle user interactions'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the V8 engine improve the performance of JavaScript execution?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By using Just-In-Time (JIT) compilation and dynamic code optimization'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By pre-compiling all JavaScript code before execution'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By interpreting JavaScript code without compiling'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By using a single-threaded event loop'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following does the V8 engine NOT directly interact with?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'HTML DOM'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'JavaScript code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Memory management'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Garbage collection'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the role of garbage collection in the V8 engine?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To reclaim memory by removing objects that are no longer in use'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To optimize the execution speed of JavaScript code'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To compile JavaScript code into machine code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To manage network requests and responses'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of a block-level element in HTML?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<div>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<span>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<a>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<strong>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is an example of an inline element in HTML?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<span>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<p>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<header>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<section>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default display property value for a block-level element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'block'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'inline'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'inline-block'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'flex'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the default display property value for an inline element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'inline'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'block'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'inline-block'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'grid'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements is true about block-level elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Block-level elements always start on a new line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Block-level elements do not take up the full width available'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Block-level elements can be nested inside inline elements'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Block-level elements cannot contain other block-level elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following statements is true about inline elements?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements do not start on a new line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements take up the full width available'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements can contain block-level elements'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements always start on a new line'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT an inline element?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<em>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<strong>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<section>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<a>'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the '],
        [QuizMarkdownType.INLINE_CODE, 'display: inline-block'],
        [QuizMarkdownType.TEXT, ' property differ from '],
        [QuizMarkdownType.INLINE_CODE, 'display: block'],
        [QuizMarkdownType.TEXT, ' and '],
        [QuizMarkdownType.INLINE_CODE, 'display: inline'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline-block elements can have width and height set, but do not start on a new line'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline-block elements take up the full width available and start on a new line'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline-block elements cannot have width and height set'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline-block elements behave exactly like block elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is true about the '],
        [QuizMarkdownType.INLINE_CODE, 'display: inline'],
        [QuizMarkdownType.TEXT, ' property?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements with '],
            [QuizMarkdownType.INLINE_CODE, 'display: inline'],
            [QuizMarkdownType.TEXT, ' do not start on a new line and only take up as much width as necessary'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements with '],
            [QuizMarkdownType.INLINE_CODE, 'display: inline'],
            [QuizMarkdownType.TEXT, ' start on a new line and take up the full width available'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements with '],
            [QuizMarkdownType.INLINE_CODE, 'display: inline'],
            [QuizMarkdownType.TEXT, ' can have width and height set'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Elements with '],
            [QuizMarkdownType.INLINE_CODE, 'display: inline'],
            [QuizMarkdownType.TEXT, ' behave exactly like block elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main difference between inline and block elements in HTML?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Block elements start on a new line and take up the full width available; inline elements do not start on a new line and only take up as much width as necessary'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements start on a new line and take up the full width available; block elements do not start on a new line and only take up as much width as necessary'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'There is no difference; they behave the same way'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inline elements can contain block elements, but block elements cannot contain inline elements'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of semantic HTML tags?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the structure and meaning of web content'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To apply styles to web elements'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To handle user interactions'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To link to external resources'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTML tag is an example of a semantic tag?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<div>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<header>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<span>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<b>'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does the <main> tag represent in HTML5?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The primary content of a document'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The navigation links'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The footer content'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A generic container'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which semantic tag would you use to mark up a section of content that is tangentially related to the content around it?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<section>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<aside>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<div>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<article>'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag would you use for the footer content of a webpage?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<footer>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<bottom>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<end>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<closing>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which HTML5 tag is used to define a group of introductory or navigational aids?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<intro>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<header>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<nav>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<guide>'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag is used to define an independent, self-contained piece of content in HTML5?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<section>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<aside>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<article>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<content>'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following tags is considered a non-semantic tag?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<header>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<div>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<footer>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<article>'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the <nav> tag in HTML5?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To create a navigation link'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To wrap navigation links'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To link to external stylesheets'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To define a footer section'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which semantic tag would you use for content that forms the main part of a document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<main>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<body>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<div>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<content>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'All visible content of a web page should be located within which tag?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<head>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<body>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<html>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<content>'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the primary purpose of the <head> tag in an HTML document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To contain metadata and links to external resources'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To contain visible content'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the main structure of the page'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To include JavaScript code'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag within the <head> section is used to specify the character encoding for the HTML document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta charset="UTF-8">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<encoding>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<char>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<meta encoding="UTF-8">'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag in the <head> section is used to link to an external CSS file?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<link rel="stylesheet" href="styles.css">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<style src="styles.css">'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<css link="styles.css">'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<stylesheet href="styles.css">'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the <title> tag within the <head> section?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To set the title of the HTML document, shown in the browser tab'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To define the main heading of the document'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify the author of the document'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To include a subtitle for the document'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag within the <head> section is used to provide metadata such as the author, description, and keywords?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<data>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<info>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<details>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'JavaScript objects have ________ properties.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'enumerable'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'iterable'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'countable'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'symbolic'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT a valid loop construct in JavaScript?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'for each...in'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'for...of'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'for...in'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'do...while'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which meta tag is used to specify the character encoding for an HTML document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta charset="UTF-8">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="encoding" content="UTF-8">'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="charset" content="UTF-8">'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which meta tag is used to control the viewport settings for responsive web design?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="viewport" content="width=device-width, initial-scale=1.0">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="viewport" content="device-width, initial-scale=1.0">'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="responsive" content="width=device-width, initial-scale=1.0">'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="viewport" content="initial-scale=1.0">'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which meta tag is used to provide a brief description of the content of a web page for search engines?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="keywords" content="HTML, CSS, JavaScript">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="description" content="A brief description of the web page content">'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="author" content="John Doe">'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<meta name="content" content="description of the web page">'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'To set the page\'s character encoding, a developer would use the ____ tag'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '<meta>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '<html>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '<body>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '<!DOCTYPE html>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The text contained within a '],
        [QuizMarkdownType.INLINE_CODE, '_______'],
        [QuizMarkdownType.TEXT, ' tag will be displayed in the browser\'s page tabs.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<title>'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<meta>'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<style>'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<head>'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which tag is primarily used to provide a brief description of a web page\'s content for search engines?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<meta name="description" content="...">'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<meta name="keywords" content="...">'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<meta name="author" content="...">'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, '<meta name="robots" content="...">'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the maximum recommended length for a meta description tag for optimal SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '60 characters'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '120 characters'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '160 characters'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '200 characters'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which attribute is used in anchor tags to improve SEO by specifying the relationship between the current document and the linked document?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'rel'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'href'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'target'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.INLINE_CODE, 'title'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is a best practice for improving SEO through URL structure?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Use dynamic parameters in URLs'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Include relevant keywords in URLs'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Use lengthy URLs'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Use underscores instead of hyphens'],
          ],
        },
      ],
      correctAnswer: '1',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the purpose of the'],
        [QuizMarkdownType.INLINE_CODE, '<meta name="robots" content="noindex, nofollow">'],
        [QuizMarkdownType.TEXT, 'tag in SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To prevent search engines from indexing the page and following links'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To encourage search engines to index the page and follow links'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To specify the author of the page'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To provide a description of the page content'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following practices can negatively impact SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using header tags'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating original content'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using excessive keywords'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Overusing alt text in images'],
          ],
        },
      ],
      correctAnswer: '2',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How does the use of heading tags '],
        [QuizMarkdownType.INLINE_CODE, '<h1>'],
        [QuizMarkdownType.TEXT, 'to'],
        [QuizMarkdownType.INLINE_CODE, '<h6>'],
        [QuizMarkdownType.TEXT, 'impact SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They highlight important information'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They have no impact on SEO'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They are used for visual styling'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Properly defined header tags decrease page load times'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the benefit of using alt text for images in the context of SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It helps search engines understand the content of the images'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It explains the content of the image if they can\'t be loaded'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It is a required property when defining images in HTML'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It is registered with the Shadow DOM, which is used to determine SEO'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which technique is used to make a website mobile-friendly and improve its SEO?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Responsive web design'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using fixed-width layouts'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Using tables for layout'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Creating separate mobile and desktop sites'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is considered keyword stuffing, a bad SEO practice?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using the same keyword excessively throughout the content'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using relevant keywords naturally within the content'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Including keywords in headings and subheadings'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using long-tail keywords in the content'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT penalized in determining the SEO ranking of a web page?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Using numerous style sheets'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Using irrelevant keywords to attract more traffic'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'High bounce rates and poor user experience'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Using hidden text or hidden links'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is NOT penalized in determining the SEO ranking of a web page?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Many advertisements'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Slow page loading times'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Buying SEO links'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Lack of semantic tags'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the risk of having a poor mobile experience for your website?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lower search engine rankings and poor user engagement'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Higher search engine rankings'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Increased conversion rates'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Better user engagement and time on site'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;
