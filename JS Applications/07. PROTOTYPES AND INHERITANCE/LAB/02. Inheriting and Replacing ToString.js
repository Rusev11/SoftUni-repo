function toStringExtension() {

    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    Person.prototype.toString = function () {
        let printLine = `Person (`;
        let keys = Object.keys(this);
        for (let i = 0; i < keys.length - 1; i++) {
            printLine += `${keys[i]}: ${this[keys[i]]}, `
        }
        printLine += `${keys[keys.length - 1]}: ${this[keys[keys.length - 1]]})`
        console.log(printLine);
        return printLine;
    }

    function Teacher(name, email, subject) {
        Person.call(this, name, email);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);

    Teacher.prototype.toString = function () {
        let printLine = `Teacher (`;
        let keys = Object.keys(this);
        for (let i = 0; i < keys.length - 1; i++) {
            printLine += `${keys[i]}: ${this[keys[i]]}, `
        }
        printLine += `${keys[keys.length - 1]}: ${this[keys[keys.length - 1]]})`
        console.log(printLine);
        return printLine;
    }
        
    function Student(name, email, course) {
        Person.call(this, name, email);
        this.course = course;
    }

    Student.prototype = Object.create(Person.prototype);

    Student.prototype.toString = function () {
        let printLine = `Student (`;
        let keys = Object.keys(this);
        for (let i = 0; i < keys.length - 1; i++) {
            printLine += `${keys[i]}: ${this[keys[i]]}, `
        }
        printLine += `${keys[keys.length - 1]}: ${this[keys[keys.length - 1]]})`
        console.log(printLine);
        return printLine;
    }
    
    // let obj = new Teacher('Pesho', 'mail', 'aaa');
    // obj.toString();
    return {
        Person,
        Teacher,
        Student
    }

}

toStringExtension()

// 'Person (name: Gosho, email: gosh@gosh.com, subject: Graphics)' 
// 'Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)'