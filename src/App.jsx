import './App.css';
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/mainPage/mainPage";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/errorPage/errorPage";
import DishPage from "./components/dishPage/dishPage";
import MenuPageContainer from "./components/menuPage/menuPageContainer";
import BasketModalContainer from "./components/basketModal/basketModalContainer";
import NavbarContainer from "./components/navbar/navbarContainer";

const App = (props) => {

    return (
        <div className="backgroundImg">
            <NavbarContainer/>
            <BasketModalContainer/>
            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/menu" element={<MenuPageContainer/>}/>
                    <Route path="/dish/:id" element={<DishPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </div>
            <div className="footer">
                <p className={"m-auto"}>
                    © 2022 Sakai — Sushi Bar
                </p>
            </div>
        </div>
    );
}

export default App;
