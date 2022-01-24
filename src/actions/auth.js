import axios from "axios";
import {setAlert} from "./alert";
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";


export const loadUser = () => async(dispatch) =>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get("https://attendancebackend.herokuapp.com/faculty/dummy/det")
        dispatch({
            type:USER_LOADED,
            payload:res.data,
        })
    }catch(err){
        dispatch({
            type:AUTH_ERROR,
        })
    }
}

export const loadAdmin = () => async(dispatch) =>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get("https://attendancebackend.herokuapp.com/admin/getAdmin")
        dispatch({
            type:USER_LOADED,
            payload:res.data,
        })
    }catch(err){
        dispatch({
            type:AUTH_ERROR,
        })
    }
}

export const loadSubjects = () => async(dispatch) =>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get("https://attendancebackend.herokuapp.com/faculty/getSubjects")
        dispatch({
            type:USER_LOADED,
            payload:res.data,
        })
    }catch(err){
        dispatch({
            type:AUTH_ERROR,
        })
    }
}

export const loadAttendance = () =>async(dispatch)=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get("https://attendancebackend.herokuapp.com/faculty/getAttendance")
       
        dispatch({
            type:USER_LOADED,
            payload:res.data,
        })
       
    }catch(err){
        dispatch({
            type:AUTH_ERROR,
        })
    }
}


//Admin add Admin
export const adminAdd = ({name,email,password,registrationNumber,department,dob,joiningYear,contactNumber})=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },
    };
    const body = JSON.stringify({name,email,password,registrationNumber,department,dob,joiningYear,contactNumber});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/admin/create",body,config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
        
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:REGISTER_FAIL,
        })
    }
}

//Admin add faculty
export const adminAddFaculty = ({name,email,password,registrationNumber,gender,designation,department,facultyMobileNumber,dob,joiningYear,subjectsCanTeach})=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },
    };
    const body = JSON.stringify({name,email,password,registrationNumber,gender,designation,department,facultyMobileNumber,dob,joiningYear,subjectsCanTeach});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/admin/createFaculty",body,config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
        
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:REGISTER_FAIL,
        })
    }
}



//Attendance
export const atte = ({dates,ins})=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },

    };
    const body = JSON.stringify({dates,ins});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/faculty/addAttendance",body,config);
        if(res.data == "Already there")
            alert("Already you marked an attendance for the day")
        else
            alert("You presence saved successfully")
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })
        dispatch(loadAttendance());
    }catch(err){
            const errors = err.response.data.errors;
            if(errors){
                errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
            }
            dispatch({
                type:REGISTER_FAIL,
            })
        }
    }

//Register user
export const register = ({staffName,email,password,dept,gender,contactAddress,subject})=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },

    };
    const body = JSON.stringify({staffName,email,password,dept,gender,contactAddress,subject});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/faculty/create",body,config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:REGISTER_FAIL,
        })
    }
}

//LOGIN USER
export const login = (registrationNumber,password)=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },
        

    };
    const body = JSON.stringify({registrationNumber,password});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/faculty/login",body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:LOGIN_FAIL,
        })
    }
}

//ADMIN LOGIN

export const Adminlogin = (email,password)=>
async(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        },
        

    };
    const body = JSON.stringify({email,password});
    try{
        const res = await axios.post("https://attendancebackend.herokuapp.com/admin/login",body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(loadAdmin());
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach((error)=>dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:LOGIN_FAIL,
        })
    }
}


//LOGOUT  USER

export const logout = () => (dispatch) =>{
    dispatch({type:LOGOUT});
}


