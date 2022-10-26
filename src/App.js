
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayResults from "./components/DisplayResults"
import PersonalInfo from "./components/PersonalInfo";
import AcademicInfo from "./components/AcademicInfo";

const App = () => (
  <div className="app">
          <BrowserRouter>
          <Routes> 
            <Route  path='/' element= {<PersonalInfo />} />
            <Route  path='/academic' element= {<AcademicInfo />} />
            <Route  path='/results' element= {<DisplayResults/>} />
          </Routes>
          </BrowserRouter>
          </div>       
)

export default App