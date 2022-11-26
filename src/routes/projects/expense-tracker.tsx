import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../../components/Topbar'
import {
  PageHeader,
  Section,
  SectionHeader,
  SectionSubHeader,
} from './__components'

const ExpenseTrackerPage = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <PageHeader variant="h3">Daily expense tracker</PageHeader>
        <Section>
          <SectionHeader>Project overview</SectionHeader>
          <Typography>
            Daily expense is created to track the daily expenses in very few
            steps. This product helps people who like to know where their money
            is going by keeping the records of the expenses. Daily expense
            target users of all generation, who are concerned about their
            expenses.
          </Typography>
          <SectionSubHeader>Problems:</SectionSubHeader>
          <Typography>
            Some users find the available expense trackers are lengthy and take
            many steps to track their expenses.
          </Typography>
          <SectionSubHeader>Goal:</SectionSubHeader>
          <Typography>
            To provide daily expense tracking platform in very simple and few
            steps.
          </Typography>
          <SectionSubHeader>Project duration:</SectionSubHeader>
          <Typography>August 2022 - September 2022</Typography>
        </Section>
        <Section>
          <SectionHeader>Research summary</SectionHeader>
          <Typography>
            I started by conducting interviews, which helped me to create
            empathy maps to understand the needs of the users I am designing
            for. Research showed that, most of the people want to track their
            expenses to know where their money is going. However, study also
            finds out that most of the people feel, keeping the track of the
            expenses is time consuming as the process is long. People want to
            track their expenses in a very simple way, which takes few steps.
          </Typography>
        </Section>
        <Section>
          <SectionHeader>My roles and responsibilities</SectionHeader>
          <Typography>
            UX Designer, conception to the end. (Conducting interviews, paper
            and digital wireframing, low and high-fidelity prototyping,
            conducting usability studies, accounting for accessibility and
            iterating on designs.)
          </Typography>
        </Section>
      </Container>
    </>
  )
}

export default ExpenseTrackerPage
