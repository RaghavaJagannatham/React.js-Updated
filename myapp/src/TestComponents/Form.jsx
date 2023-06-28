import React, {useState} from 'react';

const Index = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const changeFirstName = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }
    const changeemail = (e) => {
        setemail(e.target.value)
    }
    const changepassword = (e) => {
        setpassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form className='component' onSubmit={handleSubmit}  >
                <div>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={changeFirstName} placeholder="Enter your name" />
                </div>
                <div >
                    <input type="email" name="email" id="email" value={email} onChange={changeemail} placeholder="Enter your Email" />
                </div>
                <div>
                    <input type="password" name="Password" id="password" value={password} onChange={changepassword} placeholder="Enter your Password" />
                </div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}
export default Index;