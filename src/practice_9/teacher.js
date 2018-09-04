import Person from '../../src/practice_9/person.js';

export default class Teacher extends Person{
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    intro_basic() {
        return `${super.introduce()} I am a Teacher.`;
    }

    introduce() {
        let msg = this.klass ? 'Class ' + this.klass.number : 'No Class';
        return `${this.intro_basic()} I teach ${msg}.`
    }
}




