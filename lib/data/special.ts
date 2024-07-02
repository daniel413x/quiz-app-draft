import { QuizDataObject, QuizMarkdownType } from './types';

// if some of these seem like too much noise, just try to associate them with the study guide section
// like
// interface <----> abstraction

export default {
  name: 'Special',
  slug: 'special',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'What does hierarchical inheritance mean in object-oriented programming?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Multiple subclasses inherit from a single superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A single subclass inherits from multiple superclasses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Classes inherit properties and methods from unrelated classes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Classes do not use inheritance.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In a class hierarchy, what type of structure is formed by the relationships between classes?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A tree-like structure.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A linear structure.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A circular structure.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A tabular structure.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: The term "hierarchical inheritance" implies superiority or rank among subclasses'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it does not imply superiority or rank among subclasses.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it implies a ranking system among subclasses.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it indicates which classes are more important.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it implies a circular relationship.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Interfaces in Java can have static methods'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can have static methods with a body.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot have static methods.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but the methods must be abstract.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, only classes can have static methods.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Interfaces can extend other interfaces in Java'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, interfaces can extend multiple other interfaces.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces cannot extend other interfaces.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, but they can only extend one interface.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, interfaces can only extend classes.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about abstract methods in interfaces?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not have a body and must be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They can have a body and do not need to be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They must be private.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be final.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is true about abstract methods in interfaces?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'They do not have a body and must be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'They can have a body and do not need to be implemented by the class that implements the interface.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'They must be private.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'They can be final.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle allows objects to be treated as instances of their parent class rather than their actual class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which principle allows objects to be treated as instances of their parent class rather than their actual class?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Polymorphism'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Inheritance'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which phenomenon can be seen at play?'],
        [QuizMarkdownType.CODE, `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which of the following is true?'],
        [QuizMarkdownType.CODE, `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Dynamic polymorphism is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Static polymorphism is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Static binding is nullified if myAnimal is typed as a Dog'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'There will be a runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which of the following is true?'],
        [QuizMarkdownType.CODE, `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myAnimal = new Dog();
        myAnimal.sound(); 
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'is resolved at compile time'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'is resolved at runtime'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The method'],
            [QuizMarkdownType.INLINE_CODE, 'myAnimal.sound()'],
            [QuizMarkdownType.TEXT, 'will throw an error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The program will not compile'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Why does contravariance improve type safety in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures that you can add elements of the correct type to a collection.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it allows you to add elements of any type to a collection.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it allows you to add elements of a superclass to a collection.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Because it ensures that collections are immutable.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard allows for covariance in generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T extends ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In the context of inheritance, what does covariant return type mean?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A subclass can override a method and return a type that is a subtype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A subclass can override a method and return a type that is a supertype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return multiple types depending on the input parameters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a superclass can return a type that is a subtype of the return type declared in the subclass.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following method signature:'],
        [QuizMarkdownType.CODE, 'public void addElements(List<? super Integer> list)'],
        [QuizMarkdownType.TEXT, 'Which type of elements can you add to the list within the method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of type Integer or its subtypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add any elements of type Number or its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot add any elements to the list.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code:'],
        [QuizMarkdownType.CODE, 'public static void printNumbers(List<? extends Number> list) {\n  for (Number number : list) {\n    System.out.println(number);\n  }\n}'],
        [QuizMarkdownType.TEXT, 'What types of lists can be passed to the printNumbers method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists of any subclass of Number (e.g., List<Integer>, List<Double>).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Only List<Number>.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Lists of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Only List<Object>.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following method signature:'],
        [QuizMarkdownType.CODE, 'public void processElements(List<? extends Number> list)'],
        [QuizMarkdownType.TEXT, 'Which type of elements can you add to the list within the method?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'You cannot add any elements to the list.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add any elements of type Number or its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of any type.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'You can add elements of the type specified by the wildcard.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it represent?'],
        [QuizMarkdownType.CODE, `class Vehicle {
    void start() {
        System.out.println("Vehicle starts.");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives.");
    }
}

class Bike extends Vehicle {
    void ride() {
        System.out.println("Bike rides.");
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Hierarchical inheritance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Abstraction.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Interface segregation.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Runtime binding.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard allows for contravariance in generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'T super ?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is a covariant return type in Java?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a subclass can return a type that is a subtype of the return type declared in the superclass.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'A method in a superclass can return a type that is a subtype of the return type declared in the subclass.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return multiple types depending on the input parameters.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'A method can return a generic type.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, are arrays covariant? Consider the following code:'],
        [QuizMarkdownType.CODE, 'Integer[] intArray = {1, 2, 3};\nNumber[] numArray = intArray;\nnumArray[0] = 3.14; // What happens here?'],
        [QuizMarkdownType.TEXT, 'What will happen when the above code is executed?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'It will throw an ArrayStoreException.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile and run without any exceptions.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile but throw a ClassCastException.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will not compile.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code involving generics:'],
        [QuizMarkdownType.CODE, 'List<Number> numberList = new ArrayList<Integer>(); // What happens here?'],
        [QuizMarkdownType.TEXT, 'Will this code compile?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'No, it will not compile by virtue of violating covariance.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, it will compile by virtue of complying with covariance.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile but throw a runtime exception.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'It will compile with a warning.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following is not a valid display of covariance?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'Number[] numbers = new Integer[10];'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'Integer[] numbers = new Number[10];'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In Java, arrays are covariant. This means you can assign an array of a ______ to an array reference of a _________? For example,'],
        [QuizMarkdownType.CODE, 'Number[] numbers = new Integer[10];'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'subtype, supertype'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'supertype, subtype'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do covariance and contravariance improve type safety in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that only compatible types are assigned, preventing runtime type errors.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing any type to be assigned, increasing flexibility.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'By ensuring that only unrelated types are assigned, promoting code reusability.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'By allowing type conversions at runtime, improving performance.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which of the following method signatures demonstrates covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<? extends Number> list)'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<? super Integer> list)'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<Number> list)'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.CODE, 'public void processElements(List<?> list)'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Evaluate: Arrays are covariant in Java.'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, arrays are covariant.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'No, arrays are invariant.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Yes, arrays are contravariant.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'No, arrays are not type-safe.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, `public void processElements(List<? extends Number> list) {
    for (Number number : list) {
        System.out.println(number);
    }
}`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Type Safety: Ensures that operations within the method are type-safe and consistent with the expected base type (Number).'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Encapsulation: Ensures that operations within the method are protected through access restriction.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Method overloading: The function guarantees successful runtime by making the type optional.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type Safety: Ensures that operations within the method are of the type Number only.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, 'List<? super Integer> integers = new ArrayList<Number>();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Erroneous code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type overloading'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. What does it illustrate?'],
        [QuizMarkdownType.CODE, 'List<? extends Number> numbers = new ArrayList<Integer>();'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Erroneous code'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Type overloading'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of using contravariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its supertypes, enabling flexibility in method calls.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept only the exact type specified, ensuring strict type safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept unrelated types, increasing the method’s versatility.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its subtypes, enabling flexibility in method calls.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard is used for contravariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T super ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which wildcard is used for covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, '? extends T'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, '? super T'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'T extends ?'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, '?'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is contravariance in the context of Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept a type and its supertypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept a type and its subtypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept only the exact type specified.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Contravariance allows a method to accept unrelated types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is covariance in the context of Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept a type and its subtypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept a type and its supertypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept only the exact type specified.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'Covariance allows a method to accept unrelated types.'],
          ],
        },
      ],
      correctAnswer: '0',
    },

    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the main purpose of using covariance in Java generics?'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its subtypes, enabling flexibility in method calls.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept only the exact type specified, ensuring strict type safety.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept unrelated types, increasing the method’s versatility.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'To allow a method to accept a type and its supertypes, enabling flexibility in method calls.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Covariance is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its subtype.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its supertypes.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with either its subtypes or supertypes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Contravariance is'],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its supertypes.'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with its subtype.'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The property of a type system that allows a type to be replaced with either its subtypes or supertypes.'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'None of the above.'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, `List<? extends Animal> animals = new ArrayList<Cat>();
animals.add(new Cat());
Animal animal = animals.get(0);
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a compile-time error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a compilation error'],
          ],
        },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Consider the following code. Which answer is true?'],
        [QuizMarkdownType.CODE, `List<? super Cat> animals = new ArrayList<Animal>();
animals.add(new Cat()); 
Cat cat = animals.get(0); 
`],
      ],
      answers: [
        {
          id: '0',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a compilation error'],
          ],
        },
        {
          id: '1',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '2',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will cause a compile-time error and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will be valid'],
          ],
        },
        {
          id: '3',
          answer: [
            [QuizMarkdownType.TEXT, 'The call'],
            [QuizMarkdownType.INLINE_CODE, 'animals.add(new Cat())'],
            [QuizMarkdownType.TEXT, 'will be valid and the call'],
            [QuizMarkdownType.INLINE_CODE, 'Animal animal = animals.get(0)'],
            [QuizMarkdownType.TEXT, 'will cause a runtime error'],
          ],
        },
      ],
      correctAnswer: '0',
    },

  ],
} as QuizDataObject;

/*

Covariance: Allows a type to be replaced with its subtype. It is used when you only need to read from a collection, ensuring that you can safely treat elements as a more general type.
Contravariance: Allows a type to be replaced with its supertype. It is used when you only need to write to a collection, ensuring that you can safely add elements of a more specific type to a collection expecting a more general type.

*/
