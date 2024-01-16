import axios from 'axios';
import React,{useState} from 'react';

const Login = () => {

    let [loginObj, setLoginObj] = useState({password:'',contact: ''});
    let [isFormSubmitted, setisFormSubmitted] = useState(false);

    

    const changeFormValues = (event, key)=>{
        setLoginObj(prevObj => ({...prevObj, [key]:event.target.value}) )
    }

    let isValid = true;
     const SaveLogin = async ()=>{
        setisFormSubmitted(true);
        if (isValid) {
            const result = await axios.post('https://freeapi.miniprojectideas.com/api/EventBooking/Login', loginObj);
            debugger;
            if (result.data.result) {
                alert('Login Successfully')
                debugger;
            } else {
                alert(result.data.message)
            }
        }
    }





    return (
        <div className='container-fluid'>
            <div className='row justify-content-center mt-3'>
                <div className='col-lg-4'>
                    <div className='card  shadow'>
                        <div className='card-header bg-primary text-white text-center'>
                            <h3>Login</h3>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <input type='password'  className='form-control' placeholder='Enter password' value={loginObj.email} onChange={(e)=>changeFormValues(e,'email')} />
                                </div>
                                <div className='text-danger'>
                                    {
                                        isFormSubmitted &&   loginObj.password == '' && <span>Password is Required</span>
                                    }

                                </div>
                                <div className='mb-3'>
                                    <input type='text'  className='form-control' placeholder='Enter contact ' value={loginObj.contact} onChange={(e)=>changeFormValues(e,'contact')} />
                                </div> 
                                <div className='text-danger'>
                                    {
                                        isFormSubmitted &&   loginObj.contact == '' && <span>Number is Required</span>
                                    }
                                     {
                                        isFormSubmitted &&   loginObj.contact >= 10 && <span>Number is too large</span>
                                    }

                                </div>
                               
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <button className='btn btn-primary' type='submit' onClick={SaveLogin} >Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;