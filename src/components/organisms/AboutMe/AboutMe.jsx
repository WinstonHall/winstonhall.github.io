import { SectionHead, Skill, SkillList } from '../../index.js'
import { about_me } from './AboutMe.module.css'

export function AboutMe() {
    return (
        <div className={about_me}>
            <SectionHead number={0} title='About Me' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dolores necessitatibus consequatur saepe!
                Necessitatibus provident odit minus, consectetur esse ullam
                magni harum error est rerum repellendus corporis reprehenderit
                accusantium velit?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dolores necessitatibus consequatur saepe!
                Necessitatibus provident odit minus, consectetur esse ullam
                magni harum error est rerum repellendus corporis reprehenderit
                accusantium velit?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dolores necessitatibus consequatur saepe!
                Necessitatibus provident odit minus, consectetur esse ullam
                magni harum error est rerum repellendus corporis reprehenderit
                accusantium velit?
            </p>
            <SkillList>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </SkillList>
        </div>
    )
}
