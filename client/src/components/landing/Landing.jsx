import style from './Landing.module.css';

function Landing() {
    return (
        <div className={style.divPadre}>
            <section className={style.landing}>
                <h3>Bienvenido a Food-MAIN</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error rem neque, assumenda dignissimos sed deleniti eveniet, consequuntur tenetur fugiat similique corporis ea eos. Explicabo consequatur ratione aliquam, rem, odio quod nisi earum impedit eveniet a enim exercitationem veritatis illum. Cumque aliquid rerum dolore dicta ratione magni natus, impedit dignissimos dolor placeat soluta et cum doloribus fuga dolores possimus neque in ex itaque quibusdam adipisci reiciendis! Repellat voluptatem ipsum corporis ipsa tenetur quo sapiente id deleniti aut, sequi odio sit voluptatum tempora! Optio animi, temporibus impedit quibusdam omnis reiciendis a ut voluptas vitae ipsum minima at mollitia? Amet perferendis blanditiis tenetur id neque quo sequi, necessitatibus veritatis recusandae, nostrum voluptatibus autem ipsum alias explicabo molestias perspiciatis soluta est rerum voluptate voluptates fuga placeat! Eaque, laudantium. Quo libero veritatis architecto vitae aut. Officia itaque recusandae similique, a, delectus voluptatum vel unde quam minima harum fugiat reprehenderit tempore rerum? Delectus a eos modi.</p>

                <div className={style.divEntrarComo}>
                    <button className={`${style.btnEntrar}`}>Entrar como invitado</button>
                    <button className={`${style.btnEntrar}`}>Entrar como administrador</button>
                </div>
            </section>
        </div>
    )
}

export default Landing;