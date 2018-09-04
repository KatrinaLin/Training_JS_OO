import Person from '../../src/practice_6/person.js';

export default class Teacher extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let msg = this.klass ? 'Class ' + this.klass : 'No Class';
        return `${super.introduce()} I am a Teacher. I teach ${msg}.`
    }
}

