export function Link({
    className = '',
    isExternal = false,
    href = '.',
    content = 'Empty',
    position,
    closeNav = null,
}) {
    return isExternal ? (
        <a className={className} href={href} target='_blank' rel='noreferrer'>
            {content}
        </a>
    ) : (
        <a className={className} href={href} onClick={closeNav}>
            <span>{position}.</span>
            {content}
        </a>
    )
}
