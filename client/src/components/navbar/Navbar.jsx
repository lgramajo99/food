import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHamburger } from '../../redux/actions/navbar.action';

function Navbar() {
    const isOpen = useSelector(state => state.navbar.isOpen);
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch(toggleHamburger(!isOpen));
    };

    return (
        <nav className={style.navbar}>
            <Link className={style.logo} to='/inicio'>LOGO</Link>
            <div className={style.menu}>
                <button className={style.btnHamburger} onClick={handleHamburgerClick}>
                    {isOpen ? 'Χ' : 'Ξ'}
                </button>

                <ul className={style.lista} style={{ display: isOpen && 'block' }}>

                    <Link className={`${style.link}`} to='/'><li>Inicio</li></Link>
                    <Link className={`${style.link}`} to='/*'><li>Colección</li></Link>
                    <Link className={`${style.link}`} to='/admin'><li>⚙</li></Link>
                    <Link className={`${style.link}`} to='/landing'><li>🚪</li></Link>
                </ul>

            </div>
        </nav >
    )
}

export default Navbar;