import { section_head } from './SectionHead.module.css'

export function SectionHead({ number = 0, title = 'Missing title' }) {
    return (
        <h3 className={section_head}>
            <span>{`${number}.`}</span>
            {`${title}`}
        </h3>
    )
}
