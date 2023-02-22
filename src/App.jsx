import {
   AboutMe, Footer,
   GetInTouch,
   IntroHead,
   Navbar,
   NoteworthyProjects,
   WorkExperience
} from './components';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <IntroHead />
            <AboutMe />
            <WorkExperience />
            <NoteworthyProjects />
            <GetInTouch />
            <Footer/>
        </div>
    )
}

export default App
