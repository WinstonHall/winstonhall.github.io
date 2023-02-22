import { external_link, external_link_border } from './ExternalLink.module.css'

export function ExternalLink({
    href = '/',
    content = 'Missing Content',
    border = false,
}) {
    return (
        <a
            className={`${external_link} ${border ? external_link_border : ''}`}
            href={href}
            target='_blank'
            rel='noreferrer'
        >
            {content}
        </a>
    )
}
