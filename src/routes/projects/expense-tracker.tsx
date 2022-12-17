import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../../components/Topbar'
import Fade from 'react-reveal/Fade'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import PlaceIcon from '@mui/icons-material/Place'
import EventNoteIcon from '@mui/icons-material/EventNote'
import {
  BeforeAfterHeader,
  Image,
  ImageSectionHeader,
  Link,
  PageHeader,
  Panel,
  ScrollToTop,
  Section,
  SectionHeader,
  SectionSubHeader,
  WireframeContainer,
  WireframesContainer,
} from './__components'
import { styled } from '@mui/material'

const userResearchPainPointPanelItems = [
  {
    listMarker: 1,
    title: 'Long steps',
    text: 'In most of the available websites, they have long process to add the expenses.',
  },
  {
    listMarker: 2,
    title: 'Complicated trackers',
    text: `Most of the available websites are complicated and do not indicated clear steps.`,
  },
]
const usabilityStudyParameterPanelItems = [
  {
    listMarker: <EventNoteIcon fontSize="inherit" />,
    title: 'Study type',
    text: 'Moderated usability study',
  },
  {
    listMarker: <PlaceIcon fontSize="inherit" />,
    title: 'Location',
    text: 'Finland, Remote',
  },
  {
    listMarker: <PeopleIcon fontSize="inherit" />,
    title: 'Participants',
    text: '3 participants',
  },
  {
    listMarker: <AccessTimeIcon fontSize="inherit" />,
    title: 'Length',
    text: '10 - 20 minutes',
  },
]
const accessibilityConsiderationsPanelItems = [
  {
    listMarker: 1,
    text: 'Provided access for users in multi languages, with detailed imaginary, description and icons to help users for better understanding and help navigation easier.',
  },
  {
    listMarker: 2,
    text: 'Initial focus of the home screen on enter amount, help define the primary task or action for the user.',
  },
  {
    listMarker: 3,
    text: 'Clear labels for interative elements that can be read by screen readers.',
  },
]

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
            <ImageSectionHeader>Design process</ImageSectionHeader>
            <Image
              src="/images/design_process.png"
              alt="Customize sweatshirt app design process image"
            />
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>User research: Pain points</ImageSectionHeader>
            <Panel items={userResearchPainPointPanelItems} />
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
            <ImageSectionHeader>Usability study: parameters</ImageSectionHeader>
            <Panel items={usabilityStudyParameterPanelItems} />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Initial paper wireframe</ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_paper_wireframe_1.png"
                  alt="Expense tracker app paper wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>
              Usability study finding 1: Enter amount
            </ImageSectionHeader>
            <WireframesContainer style={{ flexWrap: 'nowrap' }}>
              <WireframeContainer>
                <BeforeAfterHeader>Before</BeforeAfterHeader>
                <Image
                  src="/images/et_finding_1_before.png"
                  alt="Expense tracker app enter amount findings before"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image src="/images/arrow.png" />
              </WireframeContainer>
              <WireframeContainer>
                <BeforeAfterHeader>After</BeforeAfterHeader>
                <Image
                  src="/images/et_finding_1_after.png"
                  alt="Expense tracker app enter amount findings after"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography>
              In the initial design, users got confused in adding amount and
              they want to add amount in 2-3 steps. So based on the insights of
              usability study 1, I made changes in adding amount and
              highlighting the selected category.
            </Typography>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>
              Usability study finding 2: Amount and others
            </ImageSectionHeader>
            <WireframesContainer style={{ flexWrap: 'nowrap' }}>
              <WireframeContainer>
                <BeforeAfterHeader>Before</BeforeAfterHeader>
                <Image
                  src="/images/et_finding_2_before.png"
                  alt="Expense tracker app amount and others findings before"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image src="/images/arrow.png" />
              </WireframeContainer>
              <WireframeContainer>
                <BeforeAfterHeader>After</BeforeAfterHeader>
                <Image
                  src="/images/et_finding_2_after.png"
                  alt="Expense tracker app amount and others findings after"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography>
              Based on the insights from usability study 2, I made some changes
              by adding the date and add note options, so that the users can be
              more clear about the required form and other options, which also
              made the tracking expenses even less time consuming.
            </Typography>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>
              High fidelity wireframes - mobile version
            </ImageSectionHeader>
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
            <Link
              target="_blank"
              href="https://www.figma.com/proto/moZ9a7OEL8jBCTl8L4ASG9/Hi-fi-Expense-tracker?node-id=197%3A13795&scaling=min-zoom&page-id=309%3A3751&starting-point-node-id=197%3A13795"
            >
              High fidelity prototype - mobile version
            </Link>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>
              High fidelity wireframes - desktop version
            </ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_0.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_1.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_2.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_3.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_4.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_5.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/et_highfi_lg_6.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography variant="caption">Check out:</Typography>
            <br />
            <Link
              target="_blank"
              href="https://www.figma.com/proto/moZ9a7OEL8jBCTl8L4ASG9/Hi-fi-Expense-tracker?node-id=197%3A3502&scaling=min-zoom&page-id=167%3A2499&starting-point-node-id=197%3A3502&show-proto-sidebar=1"
            >
              High fidelity prototype - desktop version
            </Link>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>
              Accessibility considerations
            </ImageSectionHeader>
            <Panel items={accessibilityConsiderationsPanelItems} />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>What I learned</ImageSectionHeader>
            <Typography>
              This is my third project in UX Design, while designing this app, I
              learned that your first design is not your final design, you need
              to understand the user’s need and make best users experience. And
              also I realized that to understand the feasibility of an app, the
              more research and usability study we conduct, the better a service
              can be.
            </Typography>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>My next steps</ImageSectionHeader>
            <ListContainer>
              <li>
                <Typography>
                  Conduct another round of usability studies to validate whether
                  the pain points users experienced have been efficetively
                  addressed.
                </Typography>
              </li>
              <li>
                <Typography>
                  Conduct more user research to determine any new areas of need.
                </Typography>
              </li>
              <li>
                <Typography>
                  Conduct research on how successful the app is for users, who
                  want to track their expenses.
                </Typography>
              </li>
            </ListContainer>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Impact</ImageSectionHeader>
            <Typography>
              This daily expense tracker is a very easy to use, to keep record
              in just 2-3 steps. I helps people to maintain their expenses by
              showing clear record about where thier money going.
            </Typography>
            <br />
            <br />
            <Typography variant="h6">
              Thank you for your time to review my work on daily expense
              tracker. I am very happy to share my project with you.
            </Typography>
          </Section>
        </Fade>
      </Container>
    </>
  )
}

export default ExpenseTrackerPage
const ListContainer = styled('ol')({
  paddingLeft: 20,
  '& li': {
    marginBottom: 12,
  },
})
