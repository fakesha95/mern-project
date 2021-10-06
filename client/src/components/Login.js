import React from 'react';
import {NavLink} from 'react-router-dom'

const Login = () => {
    return (
        <>
             <form method="POST">
            <h1> LOGIN HERE</h1> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
            </div> <br></br>


            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    user
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label" for="flexCheckChecked">
                    admin
                </label>
            </div>

            <br></br>
            
            <button type="submit" class="btn btn-primary">Submit</button> <br></br>
            <NavLink to='/Signup'>Not registered yet?</NavLink>
        </form>  
        </>
    )
}

export default Login
