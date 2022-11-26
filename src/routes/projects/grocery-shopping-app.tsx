import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../../components/Topbar'
import Fade from 'react-reveal/Fade'
import {
  PageHeader,
  Section,
  SectionHeader,
  SectionSubHeader,
} from './__components'

const GroceryShoppingAppPage = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <Fade bottom cascade>
          <PageHeader variant="h3">Deep's Grocery Shopping App</PageHeader>
          <Section>
            <SectionHeader>Project overview</SectionHeader>
            <Typography>
              Grocery shopping app makes grocery shopping easy and simple within
              minutes by just sitting at home. This app targets customers who
              cannot go to physical sotres to buy groceries due to busy schedule
              or health related issues.
            </Typography>
            <SectionSubHeader>Problems:</SectionSubHeader>
            <Typography>
              People with busy schedule, health related issues and COVID
              transmission make difficulties to go for grocery shopping.
            </Typography>
            <SectionSubHeader>Goal:</SectionSubHeader>
            <Typography>
              Design simple and easy to use app for grocery shopping.
            </Typography>
            <SectionSubHeader>Project duration:</SectionSubHeader>
            <Typography>September 2021 - March 2022</Typography>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <SectionHeader>Research summary</SectionHeader>
            <Typography>
              I Started by conducting interviews, which helped me to create
              empathy maps to understand the needs of the users I am designing
              for. Research pointed out, most of the users were busy workers who
              do not have time to go to physical stores to do grocery shopping
              and other users were the one who had health related issues so that
              find it difficult to visit the physical stores for grocery
              shopping. Research also revealed that it was not only the time and
              health related issues which were causing problems to do physical
              grocery shopping. Other user problems include COVID which is
              making them worried to to to the public place to buy groceries.
            </Typography>
          </Section>
        </Fade>
        <Fade>
          <Section>
            <SectionHeader>My roles and responsibilities</SectionHeader>
            <Typography>
              UX Designer, conception to the end. (Conducting interviews, paper
              and digital wireframing, low and high-fidelity prototyping,
              conducting usability studies, accounting for accessibility and
              iterating on designs.)
            </Typography>
          </Section>
        </Fade>

        <Section>
          <SectionHeader>Design process</SectionHeader>
        </Section>
      </Container>
    </>
  )
}

export default GroceryShoppingAppPage
