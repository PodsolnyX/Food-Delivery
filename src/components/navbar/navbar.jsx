import s from './navbar.module.css';
import logo from "./../../img/logo.png";
import basketIcon from "./../../img/basketIcon.svg";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    const showBasket = () => {
        props.showBasket();
    }

    return (
        <header className={s.header}>
            <img src={logo} className={s.logo}/>
            <input className={s.side_menu} type="checkbox" id="side_menu"/>
            <label className={s.hamb} htmlFor="side_menu"><span className={s.hamb_line}></span></label>
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive ? s.activeLink : undefined}>Главная</NavLink>
                    </li>
                    <li><NavLink to="/menu"
                                 className={({isActive}) => isActive ? s.activeLink : undefined}>Меню</NavLink>
                    </li>
                    <li><NavLink to="/q"
                                 className={({isActive}) => isActive ? s.activeLink : undefined}>Акции</NavLink>
                    </li>
                    <li><NavLink to="/q"
                                 className={({isActive}) => isActive ? s.activeLink : undefined}>О нас</NavLink>
                    </li>
                    <li><NavLink to="/q"
                                 className={({isActive}) => isActive ? s.activeLink : undefined}>Заказы</NavLink></li>
                    <li><img src={basketIcon} className={s.btnBasket} onClick={showBasket}/></li>
                    <li><a href="#">Выход</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
