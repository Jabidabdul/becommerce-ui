import React from 'react'
import axios from 'axios'

export const SignUp = () => {

    const [userData , setUserData] = React.useState({
        fullName : '',
        userName : '',
        email : '',
        password : '',
        reEnterPass : ''
    })
    
    function handleChange(e) {
        setUserData({
            ...userData,[e.target.name] : e.target.value
        })
    }
    
    const handleSubmit=()=>{

        if(!userData.fullName || !userData.userName || !userData.email || !userData.password || !userData.reEnterPass){
            alert('Fields are missing')
            return
        }
        if(userData.reEnterPass !== userData.password){
            alert('Password did not match')
            return
        }
        const userDetails = {
            fullName : userData.fullName,
            userName : userData.userName,
            email : userData.email,
            password : userData.password
        }
        var config = {
            method: 'post',
            url: 'http://localhost:3001/posts/signup',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : userData
          };
          
          axios(config)
          .then(function (response) {
            console.log((response.data));
            if(response.data == "Registered"){
                alert("Email already registered")
                return
            }
            alert("Registration Successful") 
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div class="d-flex flex-row justify-content-center" style={{marginTop:'10px'}}>
            <div class="card text-black col-7" style={{borderRadius: '25px'}}>
            <div class="card-body md-4">
              <div class="row justify-content-center">
                <div class="col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-3 mt-4">Sign up</p>
                  <form onSubmit={(e)=>e.preventDefault()}> 

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <input type="text" id="form3Example1c" class="form-control" 
                        placeholder="Full Name" name="fullName" value={userData.fullName} 
                        onChange={handleChange}/>
                        <div class="form-notch"><div class="form-notch-leading" style={{width: '9px'}}></div>
                        <div class="form-notch-trailing"></div></div>
                    </div>
                    
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fa fa-book fa-lg me-3 fa-fw"></i>
                        <input type="text" id="form3Example1c" class="form-control"
                        placeholder="User Name" name="userName" value={userData.userName} 
                        onChange={(e)=>handleChange(e)}/>
                        <div class="form-notch"><div class="form-notch-leading" style={{width: '9px'}}></div>
                    <div class="form-notch-trailing"></div></div></div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <input type="email" id="form3Example3c" class="form-control"
                        placeholder="Email" name ="email" value={userData.email} 
                        onChange={handleChange} />
                        <div class="form-notch"><div class="form-notch-leading" style={{width: '9px'}}></div>
                    <div class="form-notch-trailing"></div></div></div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <input type="password" id="form3Example4c" class="form-control"
                        placeholder="Password" name="password" value={userData.password} 
                        onChange={handleChange} />
                        <div class="form-notch"><div class="form-notch-leading" style={{width: '9px'}}></div>
                    <div class="form-notch-trailing"></div></div></div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <input type="password" id="form3Example4cd" class="form-control"
                        placeholder="Re-enter Password" name="reEnterPass" value={userData.reEnterPass} 
                        onChange={handleChange}/>
                        <div class="form-notch"><div class="form-notch-leading" style={{width: '9px'}}></div>
                    <div class="form-notch-trailing"></div></div></div>

                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" 
                        value="" id="form2Example3c" autocompleted="" />
                        <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Register</button>
                    </div>
                  </form>
                </div>
                <div class="col d-flex align-items-center order-1 order-lg">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />
                </div>
              </div>
            </div>
          </div>
         </div>
    )
}
