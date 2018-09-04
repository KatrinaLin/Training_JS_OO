import Person from '../../src/practice_10/person.js';

export default class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    intro_basic() {
        return `${super.introduce()} I am a Teacher.`;
    }

    introduce() {
        let msg = (this.klasses && this.klasses.length !== 0) ? 'Class ' + this.getClasses(this.klasses) : 'No Class';
        return `${this.intro_basic()} I teach ${msg}.`
    }

    getClasses() {
        return this.klasses.map(x => x.number).join(", ");
    }
}
