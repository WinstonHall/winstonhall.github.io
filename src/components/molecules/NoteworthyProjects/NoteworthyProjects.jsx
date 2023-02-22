import { Project, ProjectList, SectionHead } from '../../'
import { noteworthy_project } from './NoteworthyProjects.module.css'

export function NoteworthyProjects() {
    return (
        <div className={noteworthy_project}>
            <SectionHead number={3} title={`Things I've Built`} />
            <ProjectList>
                <Project
                    techStack={['React', 'Express', 'MongooDB', 'MongooseJS']}
                    githubRepoLink='.'
                    hostedProjectLink='.'
                />
                <Project
                    techStack={['React', 'Express', 'MongooDB', 'MongooseJS']}
                    githubRepoLink='.'
                    hostedProjectLink='.'
                />
                <Project
                    techStack={['React', 'Express', 'MongooDB', 'MongooseJS']}
                    githubRepoLink='.'
                    hostedProjectLink='.'
                />
            </ProjectList>
        </div>
    )
}
