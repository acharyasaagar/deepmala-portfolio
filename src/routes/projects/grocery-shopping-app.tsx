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
import React from 'react'

const GroceryShoppingAppPage = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <>
      <Topbar />
      <Container ref={containerRef} maxWidth="lg">
        <ScrollToTop />
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

        <Fade bottom>
          <Section>
            <ImageSectionHeader>Persona</ImageSectionHeader>
            <Image
              src="/images/persona_grocery_app.png"
              alt="Grocery app persona image"
            />
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>User journey map</ImageSectionHeader>
            <Image
              src="/images/user_journey_map_grocery_app.png"
              alt="Grocery app user journey map image"
            />
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>Usability test findings</ImageSectionHeader>
            <Image
              src="/images/usability_test_finding_grocery_app.png"
              alt="Image of usability test findings of grocery app"
            />
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>Competitive Audit</ImageSectionHeader>
            <Image
              src="/images/competitive_audit_grocery_app.png"
              alt="Image of competitive audit of grocery app"
            />
            <Typography variant="caption">Check out:</Typography>
            <br />
            <Link
              href="https://docs.google.com/spreadsheets/d/17f3h_MHdKezuNDxtam2Q2lKm1swSc95vMComzv7gFl8"
              target={'_blank'}
            >
              Competitive audit report
            </Link>
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>Low fidelity wireframes</ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_0.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_1.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_2.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_3.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_4.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_5.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_6.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_7.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_8.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_lowfi_9.png"
                  alt="Grocery app low fidelity wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <ImageSectionHeader>High fidelity wireframes</ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_0.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_1.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_2.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_3.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_4.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_5.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_6.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_7.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_8.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_9.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_10.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_11.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_12.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_13.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_14.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/grocery_highfi_15.png"
                  alt="Grocery app high fidelity wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography variant="caption">Check out:</Typography>
            <br />
            <Link
              href="https://www.figma.com/proto/A5zaxWI4BpHNb8PChcxAr7/Deep's-Grocery-Shopping-App--HI-fi-prototype?node-id=117%3A219&scaling=scale-down&page-id=66%3A125&starting-point-node-id=117%3A219"
              target={'_blank'}
            >
              High fidelity prototype
            </Link>
          </Section>
        </Fade>

        <Fade bottom>
          <Section>
            <Typography>
              This is my first project in UX Design, while designing this app, I
              learned the most important things are to understand the user’s
              needs and make the best user experience. So for the best user
              experience, conducting usability studies and iteration of the
              designs are the keys.
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

export default GroceryShoppingAppPage
