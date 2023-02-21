import { Job, JobList, SectionHead } from '../../index.js'
import { work_experience } from './WorkExperience.module.css'

export function WorkExperience() {
    return (
        <div className={work_experience}>
            <SectionHead number={2} title='WorkExperience' />
            <JobList>
                <Job job={'Placeholder Job Title'} isSelected={true} />
                <Job job={'Placeholder Job Title'} />
                <Job job={'Placeholder Job Title'} />
            </JobList>
        </div>
    )
}
