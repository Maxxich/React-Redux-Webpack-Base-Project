import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    test("Button should not the in document", () => {
        render(<App/>)
        expect(screen.queryByTestId("button")).not.toBeInTheDocument()
    })

    test("After click on h1 button should be in the document", async () => {
        render(<App/>)
        const $h1 = screen.getByTestId("h1")
        fireEvent.click($h1)
        await waitFor(() => expect(screen.queryByTestId("button")).toBeInTheDocument())
        // expect(await screen.queryByTestId("button")).toBeInTheDocument()
    })

    test("H1 should be with text 'dev'", () => {
        render(<App/>)
        expect(screen.queryByTestId("h1")).toHaveTextContent("dev")
    })

    test("Icon in the document", () => {
        render(<App/>)
        expect(screen.queryByTestId("icon")).toBeInTheDocument()
    })

    test("Image in the document", () => {
        render(<App/>)
        expect(screen.queryByTestId("image")).toBeInTheDocument()
    })
})