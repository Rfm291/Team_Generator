// Import Employee (require)
const { expect } = require("@jest/globals");
const employee = require("../lib/employee")

describe ('Employee Test', () => {

    // test initialization
    test('employee initialization', () => {

        // arrange, act
        const employeeObj = new employee();

        // assert
        expect(employeeObj instanceof employee).toEqual(true)
    })
    // test success(properties, methods)

    // test failures(undefined, errors)
}
)