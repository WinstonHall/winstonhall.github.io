import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ExternalLink } from '../'
import {
    project,
    project_foot,
    project_head,
    project_stack,
    project_links,
} from './Project.module.css'

export function Project({
    title = 'Missing Project Title',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore, necessitatibus voluptates debitis delectus error, dignissimos cupiditate esse officia quis dolorum, quod ducimus porro laboriosam exercitationem voluptas rem unde sit.',
    techStack = ['DotJS', 'DotJS', 'DotJS'],
    githubRepoLink,
    hostedProjectLink,
}) {
    return (
        <div className={project}>
            <div className={project_head}>
                <p className='high_light'>Featured Project</p>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className={project_foot}>
                {techStack.length > 0 && (
                    <ul className={project_stack}>
                        {techStack.map(function (name, index) {
                            return <p key={`Tech-${index}`}>{name}</p>
                        })}
                    </ul>
                )}
                {(githubRepoLink || hostedProjectLink) && (
                    <div className={project_links}>
                        {githubRepoLink && (
                            <ExternalLink
                                href={githubRepoLink}
                                content={<FiGithub size='2rem' />}
                            />
                        )}
                        {hostedProjectLink && (
                            <ExternalLink
                                href={hostedProjectLink}
                                content={<FiExternalLink size='2rem' />}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
