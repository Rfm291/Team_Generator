const employee = require('./employee');

class manager extends employee {

    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getName(){
        return "name";
    }
    getId(){
        return "ID";
    }
    getRole(){
        return "manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = manager