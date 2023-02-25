import { useMemo, useState } from 'react'
import { JobButton, JobDescription } from '../../'

export function Job({
    jobs = [
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
    ],
}) {
    const [selectedJobIndex, setSelectedJobIndex] = useState(0)

    const selectedJobDescription = useMemo(
        () => <JobDescription {...jobs[selectedJobIndex]} />,
        [selectedJobIndex]
    )

    return (
        <>
            <div className='job_selector'>
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
            </div>
            {selectedJobDescription}
        </>
    )
}
