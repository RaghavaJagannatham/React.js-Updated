import React, {useState} from 'react'

const AdvUseState = () => {
    // const objdata = {
    //     firstName:"Raghava",
    //     lastName:"Jagannatham",
    // }

    const [data, setData] = useState([
        {
            id:101,
            firstName:"Raghava",
            lastName:"jagannatham",
            age:23
        },
        {
            id:102,
            firstName:"Emma",
            lastName:"watson",
            age:27
        }
    ]);
    const handleDelete = (comingId) => {
        const filterData = data.filter((eachItem) => {
            return eachItem.id !== comingId;
        });
        setData(filterData);
    }

    // const dataChange = () => {
    //     setData({
    //         ...data,
    //         firstName:"Emma",
            
    //     })
    // } 
  return (
    <div>
        {/* my Name is {data.firstName} {data.lastName} <br></br>
        <button onClick={dataChange} >Change my first name</button><br></br>
        my updated Name is {data.lastName} */}
        <ul>
            {data.map((eachItem, index) => {
                const {firstName,lastName, age, id} = eachItem;
                console.log(data);
                return(
                    <li key={index}>
                        <h1>My firstname is {firstName} </h1>
                        <h1>My lastname is {lastName} </h1>
                        <h1>My age is {age} </h1>
                        <button onClick={()=> handleDelete(id)} >Delete me</button>
                    </li>
                );
            })}
        </ul>
    
    </div>
  )
}

export default AdvUseState