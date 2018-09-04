export default class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;
        }
    }

    getDisplayName() {
        return `Class ${this.number}`
    }
}
