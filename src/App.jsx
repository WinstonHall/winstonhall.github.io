import { useMemo, useState } from 'react'
import {
    Footer,
    GetInTouch,
    IntroHead,
    JobButton,
    JobDescription,
    List,
    Navbar,
    Project,
    Section,
} from './components'

const aboutMe = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa id ratione error placeat facilis, nostrum odio explicabo dolores dolorum quos odit harum suscipit officia ex doloribus, dolor vitae nihil?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa id ratione error placeat facilis, nostrum odio explicabo dolores dolorum quos odit harum suscipit officia ex doloribus, dolor vitae nihil?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa id ratione error placeat facilis, nostrum odio explicabo dolores dolorum quos odit harum suscipit officia ex doloribus, dolor vitae nihil?',
]
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
const projects = [
    {
        techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
        githubRepoLink: '.',
        hostedProjectLink: '.',
    },
    {
        techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
        githubRepoLink: '.',
        hostedProjectLink: '.',
    },
    {
        techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
        githubRepoLink: '.',
        hostedProjectLink: '.',
    },
]

function App() {
    return (
        <div className='App'>
            <Navbar />
            <IntroHead />
            <Section number={0} title='About Me'>
                <List listItems={aboutMe} isWrapped rows={1} />
                <h4>Skills</h4>
                <List
                    listItems={[
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                    ]}
                    isWrapped
                    rows={3}
                />
            </Section>
            <Section number={1} title='Work Experience'>
                <Job />
            </Section>
            <Section number={2} title={`Things I've built`}>
                {projects.map(function (project, index) {
                    return <Project key={`Project-${index}`} {...project} />
                })}
            </Section>
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default App

function Job() {
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
