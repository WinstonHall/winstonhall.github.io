import { job_btn, selected_btn } from './JobButton.module.css'

export function JobButton({ jobTitle, isSelected, updateSelected }) {
    return (
        <button
            className={`${job_btn} ${isSelected && selected_btn}`}
            onClick={updateSelected}
        >
            {jobTitle}
        </button>
    )
}
