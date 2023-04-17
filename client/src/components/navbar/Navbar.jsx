import { Link } from 'react-router-dom';
import style from './Navbar.module.css';


function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link className={style.logo} to='/inicio'>LOGO</Link>
            <div className={style.menu}>
                <button className={style.btnHamburges}>
                    Ξ Χ
                </button>

                {/* empieza el acordeon */}
                <ul className={style.lista}>
                    <Link className={`${style.link}`} to='/'><li>Inicio</li></Link>
                    <Link className={`${style.link}`} to='/*'><li>Colección</li></Link>
                    <Link className={`${style.link}`} to='/admin'><li>⚙</li></Link>
                    <Link className={`${style.link}`} to='/landing'><li>🚪</li></Link>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;