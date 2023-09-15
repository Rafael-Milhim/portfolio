import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'

import Avatar from '../img/foto-perfil.png'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Rafael Milhim" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <p>informações de contato</p>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}

export default Sidebar