export default class Class {
    constructor(number) {
        this.number = number;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;
            if (this.teacher) {
                console.log(`I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`)
            }
        } else {
            console.log("It is not one of us.")
        }
    }

    getDisplayName() {
        return `Class ${this.number}`
    }

    appendMember(student) {
        student.klass = this;
        if (this.teacher) {
            console.log(`I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`)
        }
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }
}
