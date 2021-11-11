import { BrowserRouter,Routes,Route } from "react-router-dom";
import Update from "./components/Update";
import Form from "./components/Form";
import Show from "./components/Show";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Show/>}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
