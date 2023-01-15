import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login() {

    const history = useHistory();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""

    })
    console.log(inpval);


    const getData = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            //console.log(value,name);
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const [data, setData] = useState([])

    const addData = (e) => {
        e.preventDefault();


        const getuserArr = localStorage.getItem("userinfo");
        console.log(getuserArr);

        //console.log(inpval);
        const { email, password } = inpval;
        if (email === "") {
            alert("email is required");
        } else if (!email.includes("@")) {
            alert("plz enter valid email address");
        } else if (password === "") {
            alert("password is required");
        } else {
            // console.log("data is added successfully");
            // localStorage.setItem("userinfo",JSON.stringify([...data,inpval]));


            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, i) => {
                    return el.email === email && el.password === password
                }
                )
                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login successfully");
                    history.push('/home');
                }

            }
        }


    }


    return (
        <>     <div className="container">
            <div className='row align-items-center'>
                <div className="col-6 align-items-center">
                    <div className="container">
                        <div className="row m-5 p-5 rounded-5  border border-dark border-4">
                            <button type="submit" className="btn btn-danger btn-lg mt-5 rounded  
                             d-flex align-items-center justify-content-center">
                                Login with Google
                            </button>
                            <button type="submit" className="btn btn-danger btn-lg  mt-5 rounded  
                  d-flex align-items-center justify-content-center">
                                Login With GitHub
                            </button>
                            <button type="submit" className="btn btn-danger btn-lg  mt-5 rounded 
                  d-flex align-items-center justify-content-center">
                                Login with facebook
                            </button>
                            <button type="submit" className="btn btn-danger btn-lg  mt-5 rounded 
                  d-flex align-items-center justify-content-center">
                                Login with linkedIn
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-6 align-items-center">
                    <form className='container bg-dark mt-5 p-5 rounded-5 '>
                        <h3 className="text-danger text-center">Sign In</h3><hr className="text-danger" />
                        <div className="mt-5" >
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={getData}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={getData}
                            />
                        </div>

                        <div className="grid">
                            <button onClick={addData} className="btn btn-danger btn-lg mt-4 rounded p-9 
               d-flex align-items-center justify-content-center">
                                Login
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>



        </>
    );
}

export default Login;