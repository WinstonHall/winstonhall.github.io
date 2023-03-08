import { Link, SectionHead } from '../../'
import { get_intouch } from './GetInTouch.module.css'

export function GetInTouch() {
    return (
        <div className={get_intouch} id='contact'>
            <SectionHead number={3} title='Get In Touch' />
            <div>
                <p>
                    Thanks for taking the time to learn a bit about me and my
                    work. If you have any questions or are interested in
                    discussing a potential project or collaboration, please
                    don't hesitate to get in touch with me. I'm always excited
                    to hear about new opportunities and to help bring innovative
                    ideas to life.
                </p>
                <p>
                    I'm always open to discussing new ideas and sharing my
                    expertise with others in the industry. Looking forward to
                    hearing from you soon!
                </p>
                <Link
                    className='contact_link'
                    isExternal
                    href='mailto:wlhdeveloper@gmail.com'
                    content='Contact Me'
                    border={true}
                />
            </div>
        </div>
    )
}
