import { skill_list } from './SkillList.module.css'

export function SkillList({ children }) {
    return <ul className={skill_list}>{children}</ul>
}
