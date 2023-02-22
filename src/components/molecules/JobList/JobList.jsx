import { job_list } from './JobList.module.css'

export function JobList({ children }) {
    return <ul className={job_list}>{children}</ul>
}
