import React, {useState} from 'react';


const Contact = () => {
const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message:"",
});

const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
        return{
            ...preVal,
            [name] : value,
        }
    })
}

const formSubmit = (e) => {
    e.preventDefault();
    alert(
        `${data.fullname}. ${data.phone}. ${data.email}. ${data.message}`)
};
    return(
        <>
    <div className="my-5"><h1 className="text-center">Contact Us</h1></div>
    <div className="container contact_div">
        <div>
            
            <form  className="row g-3" onSubmit={formSubmit}>
            <div className="">
            
             <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" required />
                </div>
                <div className="">
            
             <input type="phone" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile number" required />
                </div>

                <div className="">
           
             <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" required />
                </div>

                <div className="">
                
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Message" value={data.message} onChange={inputEvent} required></textarea>
                </div>

                <div className="mrgn-bttm30px">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>


                </form>
           
            
        </div>
        
    </div>
        </>
    )
}

export default Contact;