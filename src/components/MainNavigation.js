import {Link, NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="/" className={({isActive}) => isActive ? classes.actice : ''}> Home </NavLink></li>
                <li><NavLink to="/products"
                             className={({isActive}) => isActive ? classes.actice : ''}>Products</NavLink></li>
                <li></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;