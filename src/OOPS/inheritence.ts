class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  cycle() {
    console.log(`${this.fullName} Is 🚲 Cycling`);
  }

  bath() {
    console.log(`${this.fullName} Is 🛁 Bathing`);
  }
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  study() {
    console.log(`${this.fullName} Is 📖 Studying`);
  }

  takeTest() {
    console.log(`${this.fullName} Is 📝 Taking Test`);
  }
}

let student = new Student(1, "Praabindh", "Pradeep");

student.bath();
student.study();
student.takeTest();
student.cycle();

/*
Output :
Praabindh Pradeep Is 🛁 Bathing
Praabindh Pradeep Is 📖 Studying
Praabindh Pradeep Is 📝 Taking Test
Praabindh Pradeep Is 🚲 Cycling
*/

class Teacher extends Person {
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
    override get fullName(): string {
      return "Principal " + super.fullName;
    }
  }


let teacher = new Teacher("Pradeep", "Kumar");
// Output : Professor Pradeep Kumar
console.log(teacher.fullName);

let principal = new Principal("Minoo", "Agarwal");
// Output : 'Principal Minoo Agarwal'
console.log(principal.fullName);

function printNames(peoples: Person[]) {
  for (let person of peoples) {
    console.log(person.fullName);
  }
}

printNames([
    new Person("Praabindh", "Pradeep"),
    new Student(1, "Jai", "Prathyush"),
    new Teacher("Minoo", "Agarwal"),
    new Principal("Pradeep", "Kumar")
])

/*
Output :
Praabindh Pradeep
Jai Prathyush
Professor Minoo Agarwal
Principal Pradeep Kumar
*/