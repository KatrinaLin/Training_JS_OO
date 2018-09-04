export default class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;
        } else {
            console.log("It is not one of us.")
        }
    }

    getDisplayName() {
        return `Class ${this.number}`
    }

    appendMember(student) {
        student.klass = this;
    }
}


