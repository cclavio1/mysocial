import Banner from "./Components/Banner";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Start from "./Pages/Start"
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
