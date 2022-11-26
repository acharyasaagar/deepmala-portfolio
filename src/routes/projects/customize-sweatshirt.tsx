import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../../components/Topbar'
import {
  PageHeader,
  Section,
  SectionHeader,
  SectionSubHeader,
} from './__components'

const CustomizeSweatShirtPage = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <PageHeader variant="h3">Customize Sweatshirt</PageHeader>
        <Section>
          <SectionHeader>Project overview</SectionHeader>
          <Typography>
            This is an online shopping website of Customize Sweatshirt, which is
            made to make online shopping of customize sweatshirt simple and
            easy. This project targets the customer who wants to customize their
            sweatshirt by dropping their own design or by choosing form the
            store.
          </Typography>
          <SectionSubHeader>Problems:</SectionSubHeader>
          <Typography>
            Users find hard to get the proper details of sizes and get
            disappointed on the designs not meeting their expectation after
            receiving the deliveries, that too waiting longer than the estimated
            date.
          </Typography>
          <SectionSubHeader>Goal:</SectionSubHeader>
          <Typography>
            Users find hard to get the proper details of sizes and get
            disappointed on the designs not meeting their expectation after
            receiving the deliveries, that too waiting longer than the estimated
            date.
          </Typography>
          <SectionSubHeader>Project duration:</SectionSubHeader>
          <Typography>April 2022 - June 2022</Typography>
        </Section>
        <Section>
          <SectionHeader>Research summary</SectionHeader>
          <Typography>
            I started by conducting interviews, which helped me to create
            empathy maps to understand the needs of the users I am designing
            for. Through research, I find out that the most of the users are
            workers or students, who like to shop online as it is not tiring and
            you can do it anywhere, be it school or work or home. However, users
            find it hard to get the description of the sizes and they are not
            satisfied with the products after being received, where they have to
            wait for the deliveries longer than the estimated date.
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

export default CustomizeSweatShirtPage
