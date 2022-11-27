import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../../components/Topbar'
import Fade from 'react-reveal/Fade'
import {
  Image,
  ImageSectionHeader,
  Link,
  PageHeader,
  ScrollToTop,
  Section,
  SectionHeader,
  SectionSubHeader,
  WireframeContainer,
  WireframesContainer,
} from './__components'

const ExpenseTrackerPage = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <ScrollToTop />
        <Fade bottom cascade>
          <PageHeader variant="h3">Daily expense tracker</PageHeader>
          <Section>
            <SectionHeader>Project overview</SectionHeader>
            <Typography>
              Daily expense is created to track the daily expenses in very few
              steps. This product helps people who like to know where their
              money is going by keeping the records of the expenses. Daily
              expense target users of all generation, who are concerned about
              their expenses.
            </Typography>
            <SectionSubHeader>Problems:</SectionSubHeader>
            <Typography>
              Some users find the available expense trackers are lengthy and
              take many steps to track their expenses.
            </Typography>
            <SectionSubHeader>Goal:</SectionSubHeader>
            <Typography>
              To provide daily expense tracking platform in very simple and few
              steps.
            </Typography>
            <SectionSubHeader>Project duration:</SectionSubHeader>
            <Typography>August 2022 - September 2022</Typography>
          </Section>
        </Fade>
        <Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Persona</ImageSectionHeader>
            <Image
              src="/images/et_persona.png"
              alt="Expense tracker app persona images"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>User journey map</ImageSectionHeader>
            <Image
              src="/images/et_user_journey_map.png"
              alt="Expense tracker app user journey map image"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Sitemap</ImageSectionHeader>
            <Image
              src="/images/et_sitemap.png"
              alt="Expense tracker app user site map image"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>High fidelity wireframes</ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_0.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_1.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_2.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_3.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_4.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_5.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_sm_6.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography variant="caption">Check out:</Typography>
            <br />
            <Link href="">High fidelity prototype - mobile version</Link>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <Typography>
              This is my third project in UX Design, this is the project which I
              personally feel that this is the one I am looking for and the one
              I can use to record my daily expenses. So conducting usability
              studies and iteration of the app’s designs many times, this is the
              high fidelity prototype I made.
            </Typography>
            <br />
            <Typography>
              Thank you for taking your time to review my work. I am very happy
              to share my project with you. 🙂
            </Typography>
            <br />
          </Section>
        </Fade>
      </Container>
    </>
  )
}

export default ExpenseTrackerPage
