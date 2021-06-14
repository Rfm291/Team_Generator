// Import Engineer (require)
const { expect, test } = require("@jest/globals");
const engineer = require("../lib/engineer")

describe ('Engineer Test', () => {

    // test initialization
    test('Engineer initialization', () => {

        // arrange, act
        const engineerObj = new engineer();

        // assert
        expect(engineerObj instanceof engineer).toEqual(true)
    })
    // test success(properties, methods)
    describe('Engineer Props', () => {
        test('name prop', () => {
            // arrange
            const expectedNameValue = "Eric"

            // act
            engineerObj = new engineer(expectedNameValue)

            // assert
            expect(engineerObj.name).toBe(expectedNameValue)
        })
    })

    // test failures(undefined, errors)
}
)