import { styled } from '@mui/material'
import ProjectCard from '../../components/ProjectCard'
import Topbar from '../../components/Topbar'
import Fade from 'react-reveal/Fade'

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 32,
})

const Projects = () => {
  return (
    <div>
      <Topbar />
      <CardsContainer>
        <Fade bottom>
          <ProjectCard
            title="Grocery shopping app"
            imgURL="/images/grocery_app_preview.png"
            projectPageURL="/projects/grocery-shopping-app"
          />
        </Fade>
        <Fade bottom>
          <ProjectCard
            title="Customize sweatshirt"
            imgURL="/images/customize_sweatshirt_preview.png"
            projectPageURL="/projects/customize-sweatshirt"
          />
        </Fade>
        <Fade bottom>
          <ProjectCard
            title="Daily expense tracker app"
            imgURL="/images/expense_tracker_preview_desktop.png"
            projectPageURL="/projects/expense-tracker"
          />
        </Fade>
      </CardsContainer>
    </div>
  )
}

export default Projects
