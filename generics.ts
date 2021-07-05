type numOrStr = number | string

const useState = <S extends numOrStr = string> () => {
    let state: S

    const getState = () => {
        return state
    }

    const setState = (newState: S) => {
        state = newState
    }

    return { getState, setState }
}

const newState = useState()

newState.setState("foo")
// newState.setState(123)

console.log(newState.getState())