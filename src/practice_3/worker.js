import Person from '../../src/practice_3/person.js';

export default class Worker extends Person{
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        return `I am a Worker. I have a job.`;
    }
}

