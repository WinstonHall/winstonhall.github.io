import { job_list } from './JobList.module.css'

export function JobList({ children }) {
    return <div className={job_list}>{children}</div>
}
