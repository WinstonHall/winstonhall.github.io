import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ExternalLink } from '../'
import { project, project_links } from './Project.module.css'

export function Project({
    title = 'Missing Project Title',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore, necessitatibus voluptates debitis delectus error, dignissimos cupiditate esse officia quis dolorum, quod ducimus porro laboriosam exercitationem voluptas rem unde sit.',
    techStack = ['DotJS', 'DotJS', 'DotJS'],
    githubRepoLink,
    hostedProjectLink,
}) {
    return (
        <div className={project}>
            <h3>{title}</h3>
            <p>{description}</p>
            {techStack.length > 0 && (
                <ul className='wrap_list'>
                    {techStack.map(function (name, index) {
                        return <li key={`Tech-${index}`}>{name}</li>
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
    )
}
