import { nameSelector } from "./nameSelector"

describe("nameSelector", () => {

	test("should return name", () => {
        const mockedState = {
            name: "Alex"
        }
        expect(nameSelector(mockedState)).toBe("Alex")
    })

    test("should return undefined", () => {
        const mockedState = {
            name: undefined
        }
        expect(nameSelector(mockedState)).toBeUndefined()
    })
})