import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}