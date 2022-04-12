import Banner from "./Components/Banner";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Start from "./Pages/Start"
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="./Pages.Start">
          <Start/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
