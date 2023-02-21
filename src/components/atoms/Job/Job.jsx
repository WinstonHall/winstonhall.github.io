import { job_btn, selected_btn } from './Job.module.css'

export function Job({ job, isSelected }) {
    return (
        <button className={`${job_btn} ${isSelected && selected_btn}`}>
            {job}
        </button>
    )
}
