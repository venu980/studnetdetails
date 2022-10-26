import React, {useState} from "react";

import {useDispatch} from "react-redux"
import { addStudentAcd } from "../Redux/StudReducerAcd";
import {useNavigate} from "react-router-dom"

function AcademicInfo(){
        const [formData, setFormData] = useState({
            ssc:"", schoolname:"", sscpercentage:""
        })

        const [emptyArray, setEmptyArray] = useState([]) 

            const changeData = (e) => {
                setFormData({...formData, [e.target.name]: e.target.value})
            }

            const dispatch = useDispatch()
            const history = useNavigate()

            const submittingData = (e) => {
                e.preventDefault()
                history('/results')
                setEmptyArray([...emptyArray, formData])
                dispatch(addStudentAcd(formData))
               
            }

             const backBtn = () => {
                 history('/')
             } 

     return(
         <div>
             <h1> student Detail Form</h1> 
             <form onSubmit={submittingData}>
                 <div>
                     <label htmlFor="ssc"> SSC </label>
                     <select name="ssc" value={formData.ssc} onChange={changeData}>
                         <option value="ssc"> SSC </option>
                         <option value="cbse"> CBSE </option>
                     </select>
                 </div>
                 <div>
                     <label htmlFor="schoolname"> School Name</label>
                     <input type="text" name= "schoolname" value={formData.schoolname} onChange={changeData} id="schoolname" />
                 </div>
                 <div>
                     <label htmlFor="sscpercentage"> ssc percentage</label>
                     <input type="number" name="sscpercentage" value={formData.sscpercentage} onChange={changeData} id="sscpercentage" />
                 </div>
                 <button onClick={backBtn}> Back </button>
                 <input type="Submit" name="Submit" />
             </form>
         </div>
     )       

}

export default AcademicInfo