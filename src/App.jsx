import {
    Footer,
    GetInTouch,
    IntroHead,
    Job,
    List,
    Navbar,
    // Project,
    Section,
} from './components'

const jobs = [
    {
        jobTitle: 'Front-End Engineer',
        companyName: 'Alpha-Tech Consulting',
        startDate: 'Feb 2022',
        endDate: 'June 2022',
        jobDescriptions: [
            'Developing user interfaces using React: I wrote clean and modular code to create responsive and visually appealing web application.',
            'Managing application state using Redux: I designed and implemented the application state management using Redux. This involved defining the state tree, creating reducers, actions, and middleware to handle the application logic, and connecting the Redux store to the React components.',
            'Implementing Redux Toolkit: I used Redux Toolkit to streamline my Redux development process. I leveraged prebuilt tools and configuration options to handle common tasks like creating slices, generating reducers, and middleware.',
            'Styling the user interface using Styled-Components: I implemented the visual design of the application using Styled-Components. This involved writing CSS in JavaScript and using Styled-Components to create reusable and responsive styles.',
        ],
    },
    {
        jobTitle: 'Web Developer Teacher',
        companyName: 'Freelance',
        startDate: 'Aug 2022',
        endDate: 'Present',
        jobDescriptions: [
            'Planning and delivering engaging lectures and tutorials that cover the fundamental concepts of React, as well as more advanced topics.',
            'Design and review assignments and projects that challenge students to apply their knowledge of React to real-world scenarios.',
            'Provide constructive feedback and guidance to students to help them improve their coding skills, as well as their understanding of React best practices and design patterns.',
            'Staying up-to-date with the latest trends and technologies in the React ecosystem to ensure that your teaching materials are relevant and cutting-edge.',
        ],
    },
]
// const projects = [
//     {
//         techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
//         githubRepoLink: '.',
//         hostedProjectLink: '.',
//     },
//     {
//         techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
//         githubRepoLink: '.',
//         hostedProjectLink: '.',
//     },
//     {
//         techStack: ['React', 'Express', 'MongooDB', 'MongooseJS'],
//         githubRepoLink: '.',
//         hostedProjectLink: '.',
//     },
// ]

function App() {
    return (
        <div className='App'>
            <Navbar />
            <IntroHead />
            <Section number={0} title='About Me' id='about'>
                <p>
                    Hi there, my name is Winston Hall, and I'm a software
                    engineer with 2 years of experience in the field. I've
                    always been fascinated by how technology can solve complex
                    problems and make people's lives easier, which is what drew
                    me to software engineering in the first place.
                </p>
                <p>
                    Throughout my career, I've worked on a wide range of
                    projects, from developing enterprise-level software
                    applications to creating mobile apps for small businesses.
                    I'm comfortable working with a variety of programming
                    languages and tools, included below.
                </p>
                <p>
                    As a problem solver at heart, I take pride in my ability to
                    analyze complex issues and come up with effective solutions.
                    I'm constantly learning and keeping up with the latest
                    trends in the industry to ensure that I'm always bringing
                    the best practices and tools to each project I work on.
                </p>
                <p>
                    When I'm not writing code, you can find me reading a book or
                    playing games with my kid, which help me to recharge and
                    approach my work with a fresh perspective. I'm always
                    excited to collaborate with like-minded individuals and
                    organizations to create innovative and impactful software
                    solutions.
                </p>
                <h4>Skills</h4>
                <List
                    className='list_row'
                    listItems={[
                        'HTML5',
                        'CSS3',
                        'JavaScript',
                        'React',
                        'NodeJS',
                        'ExpressJS',
                        'MongoDB',
                    ]}
                />
            </Section>
            <Section number={1} title='Work Experience' id='experience'>
                <Job jobs={jobs} />
            </Section>
            {/* <Section number={2} title={`Things I've built`} id='#projects'>
                {projects.map(function (project, index) {
                    return <Project key={`Project-${index}`} {...project} />
                })}
            </Section> */}
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default App
