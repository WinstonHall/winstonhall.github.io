import { skill } from './Skill.module.css'

export function Skill({ text = 'Missing skill text' }) {
    return <li className={skill}>{text}</li>
}
