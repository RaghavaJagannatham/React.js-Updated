import React, {useReducer} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialCount = {
    counter1:0,
    counter2:10
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter1: state.counter1+1};
        case 'decrement':
            return {...state, counter1: state.counter1-1};
        case 'reset':
            return initialCount;
        default:
            return state;
            break;
    }
}
const Counter = () => {
    const[count,setCount] = useReducer(reducer,initialCount);
  return (
    <div>
        <div>Counter : {count.counter1}</div>
        <ButtonGroup>
            <Button color="danger" onClick={() =>setCount({type:'increment'})}>
                Increment
            </Button>
            <Button color="warning" onClick={() => setCount({type:'decrement'})}>
                Decrement
            </Button>
            <Button color="success" onClick={() => setCount({type:'reset'})}>
                Reset
            </Button>
        </ButtonGroup>
    </div>
  )
}

export default Counter