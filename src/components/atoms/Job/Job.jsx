import { job_btn, selected_btn } from './Job.module.css'

export function Job({ jobTitle, isSelected, updateSelected }) {
    return (
        <button
            className={`${job_btn} ${isSelected && selected_btn}`}
            onClick={updateSelected}
        >
            {jobTitle}
        </button>
    )
}
