import { Link } from '../../atoms'

export function IntroHead() {
    return (
        <div className={'intro_head'}>
            <p className='high_light'>Hi, my name is</p>
            <h1>Winston Hall.</h1>
            <h2>I build things for the web</h2>
            <p>
                I'm a software engineer specializing in building exceptional
                digital experiences.
            </p>
            <Link
                className='resume_link'
                isExternal
                href={'.'}
                content='Resume'
            />
        </div>
    )
}
