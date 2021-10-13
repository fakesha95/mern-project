import React,{useEffect} from 'react';
import { useHistory } from 'react-router';

const Protected = (props) => {
   const history=useHistory()
   
    useEffect(() => {
        if(localStorage.getItem('EMAIL')){
            history.push('/login')
        }
     }, [])
   
    let Cmp=props.Cmp

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected
