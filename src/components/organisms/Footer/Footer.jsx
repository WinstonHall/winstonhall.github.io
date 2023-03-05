import { FiGithub } from 'react-icons/fi'
import { footer, footer_icons } from './Footer.module.css'

export function Footer() {
    return (
        <footer className={footer}>
            <div className={footer_icons + ' high_light'}>
                <a
                    href='https://github.com/WinstonHall'
                    target='_blank'
                    className='icon_link'
                >
                    <FiGithub />
                </a>
                {/* <a className='icon_link'>
                    <FiTwitter />
                </a> */}
                {/* <a href='' className='icon_link'>
                    <FiLinkedin />
                </a> */}
            </div>
            <p>Designed & Built by Winston Hall</p>
        </footer>
    )
}
