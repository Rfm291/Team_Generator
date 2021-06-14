// Import Employee (require)
const { expect, test } = require("@jest/globals");
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
    describe('Employee Props', () => {
        test('name prop', () => {
            // arrange
            const expectedNameValue = "Jacob"

            // act
            employeeObj = new employee(expectedNameValue)

            // assert
            expect(employeeObj.name).toBe(expectedNameValue)
        })
    })

    // test failures(undefined, errors)
}
)