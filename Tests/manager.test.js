// Import Manager (require)
const { expect, test } = require("@jest/globals");
const Manager = require("../lib/manager")

describe ('Manager Test', () => {

    // test initialization
    test('Manager initialization', () => {

        // arrange, act
        const managerObj = new manager();

        // assert
        expect(managerObj instanceof manager).toEqual(true)
    })
    // test success(properties, methods)
    describe('Manager Props', () => {
        test('name prop', () => {
            // arrange
            const expectedNameValue = "Karl"

            // act
            managerObj = new manager(expectedNameValue)

            // assert
            expect(managerObj.name).toBe(expectedNameValue)
        })
    })

    // test failures(undefined, errors)
}
)