import { SectionHead } from '../../'
import { section } from './Section.module.css'

export function Section({ number, title, children, id }) {
    return (
        <section className={section} id={id}>
            <SectionHead number={number} title={title} />
            {children}
        </section>
    )
}
