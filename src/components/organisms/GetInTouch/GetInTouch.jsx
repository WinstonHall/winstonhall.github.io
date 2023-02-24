import { ExternalLink, SectionHead } from '../../'
import { get_intouch } from './GetInTouch.module.css'

export function GetInTouch() {
    return (
        <div className={get_intouch}>
            <SectionHead number={3} title='Get In Touch' />
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti, ipsam eaque! Dolor officiis dolore sit ex enim
                    numquam exercitationem culpa amet, saepe dicta molestiae
                    quaerat ut tempore eligendi harum possimus.
                </p>
                <ExternalLink
                    href='mailto:wlhdeveloper@gmail.com'
                    content='Contact Me'
                    border={true}
                />
            </div>
        </div>
    )
}
