import Person from '../../src/practice_7/person.js';

export default class Teacher extends Person{
    // TODO: refactor
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    intro_basic() {
        return `${super.introduce()} I am a Teacher.`;
    }

    introduce() {
        let msg = this.klass ? 'Class ' + this.klass.number : 'No Class';
        return `${this.intro_basic()} I teach ${msg}.`
    }

    introduceWith(student) {
        let teachMsg = student.klass.number === this.klass.number ? "" : "don't ";
        return `${this.intro_basic()} I ${teachMsg}teach ${student.name}.`;
    }
}



