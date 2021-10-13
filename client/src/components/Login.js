import React,{useState,useEffect} from 'react';
import {NavLink,useHistory} from 'react-router-dom';

const getLocalItems = () => {
    const list = localStorage.getItem('EMAIL');

    if(list){
        return JSON.parse(localStorage.getItem('EMAIL'))
    }else{
        return [];
    }
}

const getLocalItemsTwo = () => {
    const list = localStorage.getItem('PASSWORD');

    if(list){
        return JSON.parse(localStorage.getItem('PASSWORD'))
    }else{
        return [];
    }
}

const Login = () => {
    
    const history=useHistory();

    const [email,setEmail]=useState(getLocalItems())
    const [password,setPassword]=useState(getLocalItemsTwo())

    const loginUser = async (e) => {
        e.preventDefault(e)

        const res =await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })

        const data=await res.json();

        if(res.status === 422 || !data){
            window.alert('INVALID CREDENTIALS')
        }else{
            window.alert('LOGIN SUCCESSFULL')

            history.push('/')
        }

        // if(res.status === 201 || !data){
        //     window.alert('welcome to admin panel')
        //     history.push('/admin')
        // }else{
        //     window.alert('welcome to user panel')

        //     history.push('/user')
        // }
    }

    useEffect(() => {
       localStorage.setItem('EMAIL',JSON.stringify(email))
    }, [email])

    useEffect(() => {
        localStorage.setItem('PASSWORD',JSON.stringify(password))
     }, [password])
 
    return (
    <>
    <div class="col-sm-8 offset-4 mt-5 mb-5 col-form-label">
    <form method="POST">
            
            <h1> LOGIN HERE</h1> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email"/>
            </div> 
            
            <br></br>
    
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Password"/>
            </div> <br></br>
    
            <br></br>
                        
                    <button type="submit" class="btn btn-primary" onClick={loginUser}>Submit</button> <br></br>
                    <NavLink to='/Signup'>Not registered yet?</NavLink>
        </form>
    </div>  
    </>
    )
}

export default Login
