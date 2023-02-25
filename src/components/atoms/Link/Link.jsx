export function Link({
    className = '',
    isExternal = false,
    href = '.',
    content = 'Empty',
    position,
}) {
    return isExternal ? (
        <a className={className} href={href} target='_blank' rel='noreferrer'>
            {content}
        </a>
    ) : (
        <a className={className} href={href}>
            <span>{position}.</span>
            {content}
        </a>
    )
}
