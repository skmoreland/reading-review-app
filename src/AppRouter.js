import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={
                <NavBar />
            }/>
            <Route path="/profile" element={
               <NavBar />
            }/>
            <Route path="/log" element={
                <NavBar />
            }/>
            <Route path="/explore" element={
               <NavBar />
            }/>
        </Routes>
    )
}

export default AppRouter;