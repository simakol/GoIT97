/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class User {
  static userCounter = 0;
  static incrementUserAmount() {
    this.userCounter += 1;
    console.log(`Created new User. User amount: ${this.userCounter}`);
  }

  #password;

  constructor(firstName, secondName, birthDate, password) {
    console.log(
      "Увага! Ви створюєте екземпляр за допомогою оператора new та конструктора"
    );
    User.incrementUserAmount();
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthDate = birthDate;
    this.#password = password;
  }

  getUserAge() {
    return new Date().getFullYear() - this.birthDate;
  }

  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }

  #chechPassword() {
    const userPass = prompt("Enter a passwod:");
    return userPass === this.#password;
  }

  get password() {
    if (this.#chechPassword()) {
      return this.#password;
    } else {
      return undefined;
    }
  }

  set password(newPassword) {
    if (this.#chechPassword() && newPassword.trim().length >= 4) {
      this.#password = newPassword;
    } else {
      alert("Incorrect data!");
    }
  }
}

// клас студент розширює клас юзер, тобто, в ланцюгу прототипів вони повʼязані в в прототипі класу Student буде знаходитись клас User
class Student extends User {
  constructor(firstName, secondName, birthDate, password, points) {
    super(firstName, secondName, birthDate, password); // викликає конструктор батьківського класу, тобто User. Неможливо створити дочірній клас без виклику конструктора батьківського класу

    this.points = points;
  }
}

const student = new Student("Oleg", "Davidson", 1987, "qwerty", 87);

console.log(student);
console.log(student.getFullName())
console.log(student.getUserAge())
