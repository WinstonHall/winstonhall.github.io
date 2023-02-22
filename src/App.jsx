import {
    AboutMe,
    IntroHead,
    Navbar,
    NoteworthyProjects,
    WorkExperience,
} from './components'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <IntroHead />
            <AboutMe />
            <WorkExperience />
            <NoteworthyProjects />
        </div>
    )
}

export default App
