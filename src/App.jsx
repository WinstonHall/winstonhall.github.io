import {
    Footer,
    GetInTouch,
    IntroHead,
    Job,
    List,
    Navbar,
    Project,
    Section,
} from './components'

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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    ipsa id ratione error placeat facilis, nostrum odio
                    explicabo dolores dolorum quos odit harum suscipit officia
                    ex doloribus, dolor vitae nihil?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    ipsa id ratione error placeat facilis, nostrum odio
                    explicabo dolores dolorum quos odit harum suscipit officia
                    ex doloribus, dolor vitae nihil?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    ipsa id ratione error placeat facilis, nostrum odio
                    explicabo dolores dolorum quos odit harum suscipit officia
                    ex doloribus, dolor vitae nihil?
                </p>
                <h4>Skills</h4>
                <List
                    className='list_row'
                    listItems={[
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                        'dotjs',
                    ]}
                />
            </Section>
            <Section number={1} title='Work Experience'>
                <Job jobs={jobs} />
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
