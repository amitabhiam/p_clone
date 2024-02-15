import ForgotPassword from "./Dashboard/ForgotPassword";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<Login />}
        />

        <Route 
        path="/forgot-password"
        element={<ForgotPassword />}
        />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}