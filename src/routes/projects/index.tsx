import { styled } from '@mui/material'
import ProjectCard from '../../components/ProjectCard'
import Topbar from '../../components/Topbar'
import Fade from 'react-reveal/Fade'

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Projects = () => {
  return (
    <div>
      <Topbar />
      <CardsContainer>
        <Fade bottom>
          <ProjectCard
            title="Grocery shopping app"
            imgURL="/photo.jpg"
            projectPageURL="/projects/grocery-shopping-app"
          />
        </Fade>
        <Fade bottom>
          <ProjectCard
            title="Customize sweatshirt"
            imgURL="/photo.jpg"
            projectPageURL="/projects/customize-sweatshirt"
          />
        </Fade>
        <Fade bottom>
          <ProjectCard
            title="Daily expense tracker app"
            imgURL="/photo.jpg"
            projectPageURL="/projects/expense-tracker"
          />
        </Fade>
      </CardsContainer>
    </div>
  )
}

export default Projects
