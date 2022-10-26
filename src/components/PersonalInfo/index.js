import React, {useEffect, useState} from "react";
import './index.css'
import {useDispatch, useSelector} from "react-redux"
import { addStudent } from "../Redux/StudReducer";
import {useNavigate} from "react-router-dom"

import moment from "moment";

function PersonalInfo(){

const [formData, setFormData] = useState({
    name:"", email:"", dateofbirth:"" ,country:"" ,state:""
})

const studDetails = useSelector(state => state.newStudent.studentsList)
console.log(studDetails)
     
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit]= useState(false);
const [emptyArray, setEmptyArray] = useState([]) 

    const dispatch = useDispatch()
    const history = useNavigate()

    const changeData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

            const submittingData = (e) => {
                e.preventDefault()
                setFormErrors(validate(formData))
                setIsSubmit(true)
               
            }

            const validate = (values) => {
                const errors = {}
                if (!values.name){
                    errors.name = "Enter Your Name"
                }else if (!values.email){
                    errors.email = "Enter Your email"
                }else if (!values.dateofbirth){
                    errors.dateofbirth = "Select your Date of Birth"
                }else if (!values.country){
                    errors.country = "Select your Country"
                }else if (!values.state){
                    errors.state = "Select your State"
                }else{
                    setEmptyArray([...emptyArray, formData])
                    dispatch(addStudent(formData))
                    history('/academic')
                }
                return errors
            }

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit){
         //console.log(formData)
    }
},[formErrors, isSubmit])
            
return(
         <div>
             <h1> STUDENT DETAILS FORM </h1> 
             <form onSubmit={submittingData}>
                 <div className="label-container">
                     <label htmlFor="name"> Name</label>
                     <input type="text" name= "name" value={formData.name} onChange={changeData} id="name" />
                      <p> {formErrors.name} </p>
                 </div>
                 <div className="label-container">
                     <label htmlFor="email"> Email </label>
                     <input type="email" name = "email" value={formData.email} onChange={changeData} id="email" />
                     <p> {formErrors.email} </p>
                 </div>
                 <div className="label-container">
                     <label htmlFor="dateofbirth"> Date of Birth</label>
                     <input type="date" name ="dateofbirth" max= {moment().format("YYYY-MM-DD")} value={formData.dateofbirth} onChange={changeData} id="dateofbirth" />
                     <p> {formErrors.dateofbirth} </p> 
                 </div>
                 <div className="label-container">
                    <label> Country </label>
                    <select name="country" onChange={changeData} value= {formData.country}>
                        <option value="USA"> USA </option>
                        <option value="INDIA"> INDIA </option>
                        <option value="UAE"> UAE </option>
                    </select>
                    <p> {formErrors.country} </p>
                 </div>
                 <div className="label-container">
                    <label> State </label>
                    <select name="state" onChange={changeData} value= {formData.state}>
                        <option value="Andhara Pradesh"> Andhra Pradesh </option>
                        <option value="West Bengal"> West Benagal </option>
                        <option value="kerala"> Kerala </option>
                    </select>
                    <p> {formErrors.state} </p>
                 </div>
                 <button type="Submit"> NEXT </button>
             </form>
         </div>
     )       

}

export default PersonalInfo