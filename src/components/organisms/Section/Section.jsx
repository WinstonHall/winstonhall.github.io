import { SectionHead } from '../../'
import { section } from './Section.module.css'

export function Section({ number, title, children }) {
    return (
        <section className={section}>
            <SectionHead number={number} title={title} />
            {children}
        </section>
    )
}
