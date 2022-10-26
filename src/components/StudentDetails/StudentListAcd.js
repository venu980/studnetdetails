import { useSelector } from "react-redux";


function StudentListAcd (){
     const stud = useSelector((state) => state.newStudentAcd.studentsListAcd)

     return(
         <ul>
             {
                  stud.map((text) => {
                     return(
                         <div>
                             <h1> Education Details </h1>
                             <li> SSC: {text.ssc}  </li>
                             <li> School Name : {text.schoolname} </li>
                             <li> SSC Percentage: {text.sscpercentage} </li>
                         </div>
                     )
                 })
             }
         </ul>
     )
}

export default StudentListAcd