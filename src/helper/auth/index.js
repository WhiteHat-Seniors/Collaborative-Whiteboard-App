import {API} from '../../backend'

// API means : REACT_APP_BACKEND=http://localhost:8000/api/

export const signup = user => {
    return fetch(`${API}/signup`,{
        method : "POST",
        headers :{
            Accept :"application/json",
            "Content-Type":"application/json" 
        },
         body :JSON.stringify(user)
    })
    .then(respose=>{
        return respose.json();
    })
    .catch(err=> console.log(err))
}

export const login = user => {
    return fetch(`${API}/login`,{
        method : "POST",
        headers :{
            Accept :"application/json",
            "Content-Type":"application/json" 
        },
         body :JSON.stringify(user)
    })
    .then(respose=>{
        return respose.json();
    })
    .catch(err=> console.log(err))
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}