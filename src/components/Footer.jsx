import { footerLinks } from "../constants"

const Footer = () => {
    return(
        <footer>
            <div className="info">
                <p>Mais formas de comprar: encontre uma Apple Store ou revendedor autorizado perto de você. Ou ligue para 0800-761-0867.</p>
                <img src="/logo.svg" alt="apple logo" />
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>

                <ul>
                    {footerLinks.map(({label, link}) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul> 

            </div>
        </footer>
    )
}

export default Footer