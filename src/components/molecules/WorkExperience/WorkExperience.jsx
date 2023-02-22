import { useMemo, useState } from 'react'
import { JobButton, JobDescription, JobList, SectionHead } from '../../'
import { work_experience } from './WorkExperience.module.css'

export function WorkExperience() {
    const jobs = [
        {
            jobTitle: 'Placeholder Job Title',
            companyName: 'Placeholder Company Name',
            startDate: 'Jan 1911',
            endDate: 'Present',
            jobDescriptions: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
            ],
        },
        {
            jobTitle: 'Placeholder Job Title2',
            companyName: 'Placeholder Company Name2',
            startDate: 'Jan 1960',
            endDate: 'Present',
            jobDescriptions: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
            ],
        },
    ]

    const [selectedJobIndex, setSelectedJobIndex] = useState(0)

    const currentJobDescription = useMemo(
        function () {
            return <JobDescription {...jobs[selectedJobIndex]} />
        },
        [selectedJobIndex]
    )

    return (
        <div className={work_experience}>
            <SectionHead number={1} title='WorkExperience' />
            <JobList>
                {jobs.map(function ({ jobTitle }, index) {
                    return (
                        <JobButton
                            key={`job-${index}`}
                            jobTitle={jobTitle}
                            isSelected={selectedJobIndex === index}
                            updateSelected={function () {
                                setSelectedJobIndex(index)
                            }}
                        />
                    )
                })}
            </JobList>
            {currentJobDescription}
        </div>
    )
}
