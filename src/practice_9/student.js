import Person from '../../src/practice_9/person.js';

export default class Student extends Person{
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    intro_basic() {
        return `${super.introduce()} I am a Student.`;
    }

    introduce() {
        let msg = (this.klass.leader && this.klass.leader.id === this.id) ? "Leader of" : "at";
        return `${this.intro_basic()} I am ${msg} Class ${this.klass.number}.`
    }
}



