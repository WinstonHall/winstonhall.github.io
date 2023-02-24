import { SectionHead, Skill } from '../../index.js'
import { about_me } from './AboutMe.module.css'

export function AboutMe() {
    return (
        <div className={about_me}>
            <SectionHead number={0} title='About Me' />
            <List>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dolores necessitatibus consequatur saepe!
                    Necessitatibus provident odit minus, consectetur esse ullam
                    magni harum error est rerum repellendus corporis
                    reprehenderit accusantium velit?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dolores necessitatibus consequatur saepe!
                    Necessitatibus provident odit minus, consectetur esse ullam
                    magni harum error est rerum repellendus corporis
                    reprehenderit accusantium velit?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dolores necessitatibus consequatur saepe!
                    Necessitatibus provident odit minus, consectetur esse ullam
                    magni harum error est rerum repellendus corporis
                    reprehenderit accusantium velit?
                </li>
            </List>

            <List>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </List>
        </div>
    )
}
