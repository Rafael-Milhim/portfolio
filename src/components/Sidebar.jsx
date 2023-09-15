import Avatar from '../img/foto-perfil.png'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Rafael Milhim" />
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}

export default Sidebar