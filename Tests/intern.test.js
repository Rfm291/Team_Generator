// Import Intern (require)
const { expect, test } = require("@jest/globals");
const intern = require("../lib/intern");


describe ('Intern Test', () => {

    // test initialization
    test('intern initialization', () => {

        // arrange, act
        const internObj = intern();

        // assert
        expect(internObj instanceof intern).toEqual(true)
    })
    // test success(properties, methods)
    describe('Intern Props', () => {
        test('name prop', () => {
            // arrange
            const expectedNameValue = "Liem"

            // act
            internObj = intern(expectedNameValue)

            // assert
            expect(internObj.name).toBe(expectedNameValue)
        })
    })

    // test failures(undefined, errors)
}
)