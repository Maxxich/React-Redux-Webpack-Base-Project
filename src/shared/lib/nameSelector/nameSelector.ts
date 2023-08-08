interface State {
    name: string | undefined
}

export const nameSelector = (state: State) => state.name
