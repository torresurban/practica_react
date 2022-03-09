import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Users from "./pages/Users";

export default function App() {
    return(
        <BrowserRouter>
        <Navbar/> 
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/about' element={<About /> } />
                <Route path='/user/:id' element={<User /> } />
                <Route path='/usuarios' element={<Navigate to={'/users'} />} />
                <Route path='/*' element={<NotFound /> } />
                <Route path='/users' element={<Users /> } />
                <Route path='/dashboard/*' element={<Dashboard /> } >
                    <Route path="welcome" element={<p>Welcome!!!</p>} />
                    <Route path="goodbye" element={<p>Goodbye!!!</p>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
        
    )
}