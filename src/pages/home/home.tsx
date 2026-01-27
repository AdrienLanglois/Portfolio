import {Container} from '@mui/material'
import Header from '../../components/header'
import AboutMe from './aboutMe'
import ProjectsSection from './projectSection'

function Home() {
  return <Container>
    <Header/>
    <AboutMe/>
    <ProjectsSection/>
  </Container>
}

export default Home