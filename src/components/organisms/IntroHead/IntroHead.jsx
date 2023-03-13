import { Link } from '../../atoms'

export function IntroHead() {
    return (
        <div className={'intro_head'}>
            <p className='high_light'>Hi, my name is</p>
            <h1>Winston Hall.</h1>
            <h2>Software Engineer </h2>
            <p>
                As a software engineer, I specialize in designing, developing,
                and testing software applications to meet the needs of
                businesses and individuals. With a passion for problem-solving
                and a dedication to staying up-to-date with the latest
                technologies, I am committed to creating efficient and effective
                software solutions that help my clients achieve their goals.
            </p>
            <Link
                className='resume_link'
                isExternal
                href={'/Resume.pdf'}
                content='Resume'
            />
        </div>
    )
}
