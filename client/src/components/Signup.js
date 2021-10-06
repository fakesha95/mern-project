import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';

const Signup = () => {

    const history=useHistory()

    const [user,setData]=useState({
        email:"",password:"",phone:""
    });

    let name,value;

    const handleInputs = (e) => {
        console.log(e)

        name=e.target.name;
        value=e.target.value;

        setData({...user,[name]:value})
    }

    const PostData =  async (e) => {
        e.preventDefault();

        const {email,password,phone}=user;

        const res=await fetch("/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password,phone
            })
        })

        const data=await res.json();

        if(data.status === 422 || !data){
            window.alert("INVALID REGISTRATION")
        }else{
            window.alert("REGISTRATION SUCCESSFUL")

            history.push('/login')
        }
    }

    return (
        <>
          <form method="POST">
            <h1> REGISTER HERE</h1> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter email" autoComplete="off"/>
            </div> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" 
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter Password" autoComplete="off"/>
            </div> <br></br>
            <div class="form-group" class="form-group w-25">
                <label for="exampleInputPassword1">Phone</label>
                <input type="number" name="phone" class="form-control" id="exampleInputPassword1" 
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter Phone" autoComplete="off"/>
            </div><br></br>

            
            <button type="submit" onClick={PostData} class="btn btn-primary">Submit</button> <br></br>
            <NavLink to='/login'>Already have an account?</NavLink>
        </form>
        </>
    )
}

export default Signup
