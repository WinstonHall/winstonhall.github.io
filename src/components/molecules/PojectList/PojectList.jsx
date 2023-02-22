import { project_list } from './ProjectList.module.css'

export function ProjectList({ children }) {
    return <ul className={project_list}>{children}</ul>
}
