import React, {useReducer} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialCount = 0;
const reducer = (state,action) => {
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
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
        <div>Counter : {count}</div>
        <ButtonGroup>
            <Button color="danger" onClick={() =>setCount('increment')}>
                Increment
            </Button>
            <Button color="warning" onClick={() => setCount('decrement')}>
                Decrement
            </Button>
            <Button color="success" onClick={() => setCount('reset')}>
                Reset
            </Button>
        </ButtonGroup>
    </div>
  )
}

export default Counter