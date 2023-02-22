import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { footer, footer_icons } from './Footer.module.css'

export function Footer() {
    return (
        <div className={footer}>
            <div className={footer_icons + ' high_light'}>
                <FiGithub />
                <FiTwitter />
                <FiLinkedin />
            </div>
            <p>Designed & Built by Winston Hall</p>
        </div>
    )
}
