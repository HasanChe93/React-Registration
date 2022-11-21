import React from 'react';
import { useState, useEffect } from "react";


function Content() {
    const intialValues = { email: "", phone: "", password: ""};
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [testa,setCase]=useState('')
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormErrors(validate(formValues));

        setFormValues({ ...formValues, [name]: value });
      };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let caseI = "false";
    
    var inputData="";
    var   arr={};
    for(var i=0;i<data.length;i++){
      arr=data[i];
      inputData=arr.email;


      if( formValues.email ===inputData){

       caseI="true";
       setCase(false)
       const elem = document.getElementById("para1");
                elem.innerHTML ='Email Is Already Exist';



      }
  

    }

    if(caseI==="false"){
        data.push({
            email: formValues.email,
            password: formValues.password,
            phone: formValues.phone,
          });
          localStorage.setItem("data", JSON.stringify(data));
          const elem = document.getElementById("para");
                  elem.innerHTML ='Successful Registration';
                  setCase(true)

    }else{
        console.log("Email Is Already Exist");
    }
  };
  
  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);



  const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email Is Required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a Valid Email";
        }


        if (!values.password) {
            errors.password = "Password Is Required!";
        } else if (values.password.length < 4) {
            errors.password = "Password Must Be More Than 4 Characters!!";
        }
        else if (values.password.length > 12) {
            errors.password = "Password cannot be exceed More Than 12 Characters!!";
        }




        if (!values.phone) {
            errors.phone = "Phone Is Required!";
        } else if (values.phone.length >10) {
            errors.phone = "Phone Number Can't Be Exxeed More Than 10 Numbers!!"
        
    } else if(values.phone.length <10) {
        errors.phone = "Phone Number Can't Be less Than 10 Numbers!!"
    }

        return errors;

    };

    return (


        <div class="col-8">
         
            <div class="row align-items-end">
                <div class="col-3">
                    <img src="Imgs\white.png" alt="" class="img-fluid" />
                </div>
                <div class="col-9">
                    <div class="row d-flex">
                        <nav class="navbar navbar-expand justify-content-end">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="www.google.com" class="nav-link">Help</a>
                                </li>
                                <li class="nav-item">
                                    <a href="www.google.com" class="nav-link">Terms & condeitions</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? ( */}
               {testa===false ?         <h1 id="para" style={{color:"red",textAlign:"center"}}>{''}</h1>
               : <h1 id="para1" style={{color:"green",textAlign:"center"}}>{''}</h1>}
      

             {/* : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )} */}
                <div class="container w-50">
                    <h1 class="h1">Create an account</h1>
                    <form onSubmit={handleSubmit} class="mt-5" >
                        <div>
                        
                            <label for="email" class="form-label"><b>Email address</b></label>
                            <input name="email" value={formValues.email} onChange={handleChange} id="email" class="form-control mb-3" />
                        </div>
                        <p style={{color:'red'}}><b>{formErrors.email}</b></p>
                        <div>
                         
                            <label for="phone" class="form-label"><b>Phone</b></label>
                            <input type="tel" name="phone" id="phone" value={formValues.phone} onChange={handleChange}  class="form-control mb-3" />

                        </div>
                        <p style={{color:'red'}}><b>{formErrors.phone}</b></p>
                        <div>
                        

                            <label for="password" class="form-label"
                            ><b>Create Password</b></label>
                            <div class="input-group col-12">
                                <input type="password" class="form-control" name='password' value={formValues.password} onChange={handleChange} placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" id="pass" />

                                <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <i class="far fa-eye" id="togglePassword"></i>
                                </button>
                            </div>
                            <p style={{color:'red'}}><b>{formErrors.password}</b></p>
                        </div>
                        <br />
                        <div class="mb-3">

                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" onChange={handleChange} value="agree" id="agree" />



                            <label class="form-check-label" for="agree">
                                I agree to the terms & conditions Orange.
                            </label>
                        </div>
                        <div class="form-check mb-5">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value="news"
                                id="news"
                                checked
                            />
                            <label class="form-check-label" for="news">
                                Recieve Coding Academy Newsletter
                            </label>
                        </div>
                        <div class="d-grid gap-2">
                            <input
                                class="btn btn-primary sign-up btn-lg"
                       
                                type="submit"
                            />

                            <button
                                class="btn btn-outline-secondary btn-lg"
                                type="button"
                            >
                                <a href="Login.html"> Already have an account?login </a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>





    )
}

export default Content