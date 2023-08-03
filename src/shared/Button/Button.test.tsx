import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
    test("button in document", () => {
        render(<Button>ClickMe</Button>)
        expect(screen.getByText("ClickMe")).toBeInTheDocument()
    })

    test("Button have class Button", () => {
        render(<Button>TEST</Button>)
        expect(screen.getByTestId("button")).toHaveClass("Button")
      })
})