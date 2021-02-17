import React, {useState} from 'react';

const ContactNew = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allentry, setallEntry] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();
        if(email && password){
            const newEntry = {id: new Date().getTime().toString(), email, password};
            setallEntry([...allentry, newEntry]);
            console.log(allentry);
            setEmail("");
            setPassword("");
        }else{
            alert("pls fill the form");
        }
    }
    return (
        <>
        <form action="" onSubmit={submitForm}>
            <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>

        <div>
            {
                allentry.map((curElem) => {
                    const {id, email, password} = curElem;
                    return(
                        <div key={id}>
                            <p>{email}</p>
                            <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default ContactNew;
