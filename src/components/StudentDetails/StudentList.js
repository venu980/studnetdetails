import { useSelector } from "react-redux";


function StudentList(){
     const stud = useSelector((state) => state.newStudent.studentsList)

     return(
         <div>
         <ul>
             {
                 stud.map((text) => {
                     return(
                         <div>
                             <h1> Personal Details </h1>
                             <li> Full name: {text.name} </li>
                             <li> Email : {text.email} </li>
                             <li> Date of Birth: {text.dateofbirth} </li>
                             <li> Country: {text.country} </li>
                             <li> State: {text.state} </li>
                         </div>
                     )})
             }
         </ul>
         </div>
     )
}

export default StudentList