import React,{useState} from "react";
import AdvUseState from "./AdvUseState";

const UseStateComponent = () =>{
    // const[state, setState] = useState(0);

    // const Increment = () => {
    //     setState((prevCount) => {
    //         return prevCount+1;
    //     });
    // }

    // const Decrement = () => {
    //     setState((prevCount) => {
    //         return prevCount-1;
    //     })
    // }
    
    
    return (
        <>
            {/* <div className="component"> */}
                    {/* <button onClick={Increment} >+</button>
                    <span>{state}</span>
                    <button onClick={Decrement} >-</button> */}
                    <AdvUseState />
            {/* </div> */}
        </>
    );
}

export default UseStateComponent;