import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom'; 

const Userpost = () => {

    const history=useHistory()
    const callPostPage = async (req,res) => {
        try{
            const res=await fetch('/post',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                Credentials:"include"
            })

            const data=await res.json();
            console.log(data);

            if(!res.status === 200){
                const error=new Error(res.error)
                throw error;
            }
        }catch(err){
            console.log(err)
            history.push('/login')
        }
    }

    useEffect(() => {
        callPostPage()
    }, [])

    return ( 
        <>
           <div class="col-sm-8 offset-4 mt-5 mb-5 col-form-label">
               
           <form method="GET">
                <div class="form-group row" class="form-group w-50">
                    <label for="text" class="col-sm-2 col-form-label">Post title:</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="ADD POST"/>
                    </div>
                </div>

                <br></br>

                <div class="input-group" class="form-group w-50">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Post Description:</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>

                <br></br>

                <div class="form-group w-50">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post category</button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                </div></div>

                <br></br>

                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile"/>
                    <label class="custom-file-label" for="customFile">Choose file</label>
                </div>

                <br></br>

                <button type="submit" class="btn btn-primary">Submit</button> <br></br>
            </form>
           </div>
        </>
    )
}

export default Userpost;
