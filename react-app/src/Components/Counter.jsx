import React, {useReducer} from 'react'
import {Badge, Button, ButtonGroup} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialCount = {
    counter1:0,
    counter2:10
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter1: state.counter1 + action.payload};
        case 'decrement':
            return {...state, counter1: state.counter1 - action.payload};
        case 'reset':
            return initialCount;
        case 'increment2':
            return {...state, counter2: state.counter2 + action.payload};
        case 'decrement2':
            return {...state, counter2: state.counter2 - action.payload};
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
        <ButtonGroup>
            <Button color='primary' outline>
                Counter 1 <Badge color='secondary'> {count.counter1} </Badge>
            </Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button color='primary' outline>
                Counter 2 <Badge color='secondary'> {count.counter2} </Badge>
            </Button>
        </ButtonGroup>
        <p></p>
        <ButtonGroup>
            <Button color="danger" onClick={() =>setCount({type:'increment',payload:1})}>
                Increment
            </Button>
            <Button color="warning" onClick={() => setCount({type:'decrement',payload:1})}>
                Decrement
            </Button>
        </ButtonGroup>
        <p></p>
        <ButtonGroup>
            <Button color="danger" onClick={() =>setCount({type:'increment', payload : 5})}>
                Increment Payload
            </Button>
            <Button color="warning" onClick={() => setCount({type:'decrement', payload:5})}>
                Decrement Payload
            </Button>
        </ButtonGroup>
        <p></p>
        <ButtonGroup>
            <Button color="danger" onClick={() =>setCount({type:'increment2', payload:10})}>
                Counter Increment2
            </Button>
            <Button color="warning" onClick={() => setCount({type:'decrement2', payload:10})}>
                Counter Decrement2
            </Button>
        </ButtonGroup>
        <p></p>
        <Button color="success" onClick={() => setCount({type:'reset'})}>
                Reset
        </Button>
    </div>
  )
}

export default Counter