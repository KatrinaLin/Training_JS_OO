import Person from '../../src/practice_4/person.js';

export default class Worker extends Person{
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        return `${this.basic_introduce()} I am a Worker. I have a job.`
    }
}


