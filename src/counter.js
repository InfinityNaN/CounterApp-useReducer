import React, {useReducer} from 'react'


const intialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return intialState
        default:
            return state
    }

}

function CounterApp(){
    
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter</h1>
            <h3>  </h3>
            <button onClick={()=> dispatch("INCREMENT")}> Increment </button>
            <button onClick={()=> dispatch("DECREMENT")}> Decrement </button>
            <button onClick={()=> dispatch("RESET")}> Reset </button>
        </div>
    )
}

export default CounterApp