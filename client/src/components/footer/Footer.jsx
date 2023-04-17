import { Link } from "react-router-dom";
import style from "./Footer.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.contenedor}>
                <p>&copy; 2023 <code>Food-MAIN.</code> Creado por Luciano N Gramajo.</p>
                <hr className={style.hr} />
                <ul className={style.lista}>
                    <li><Link className={`${style.links}`} to="/">Política de Privacidad</Link></li>
                    <li><Link className={`${style.links}`} to="/">Dietas</Link></li>
                    <li><Link className={`${style.links}`} to="/">¿Encontró un error?</Link></li>
                    <li><Link className={`${style.links}`} to="/">Contacto</Link></li>
                    <li><Link className={`${style.links}`} to="/">Acerca de Food-MAIN</Link></li>
                </ul>
            </div>
        </div>)
}

export default Footer;