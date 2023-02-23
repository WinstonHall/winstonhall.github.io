import {
    AboutMe,
    Footer,
    GetInTouch,
    IntroHead,
    List,
    Navbar,
    NoteworthyProjects,
    Section,
    WorkExperience,
} from './components'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Section number={100} title='Reusable Section'>
                <List />
            </Section>
            <IntroHead />
            <AboutMe />
            <WorkExperience />
            <NoteworthyProjects />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default App
