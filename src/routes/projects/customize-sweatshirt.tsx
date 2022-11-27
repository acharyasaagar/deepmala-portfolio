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

const CustomizeSweatShirtPage = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <ScrollToTop />
        <Fade bottom cascade>
          <PageHeader variant="h3">Customize Sweatshirt</PageHeader>
          <Section>
            <SectionHeader>Project overview</SectionHeader>
            <Typography>
              This is an online shopping website of Customize Sweatshirt, which
              is made to make online shopping of customize sweatshirt simple and
              easy. This project targets the customer who wants to customize
              their sweatshirt by dropping their own design or by choosing form
              the store.
            </Typography>
            <SectionSubHeader>Problems:</SectionSubHeader>
            <Typography>
              Users find hard to get the proper details of sizes and get
              disappointed on the designs not meeting their expectation after
              receiving the deliveries, that too waiting longer than the
              estimated date.
            </Typography>
            <SectionSubHeader>Goal:</SectionSubHeader>
            <Typography>
              Users find hard to get the proper details of sizes and get
              disappointed on the designs not meeting their expectation after
              receiving the deliveries, that too waiting longer than the
              estimated date.
            </Typography>
            <SectionSubHeader>Project duration:</SectionSubHeader>
            <Typography>April 2022 - June 2022</Typography>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <SectionHeader>Research summary</SectionHeader>
            <Typography>
              I started by conducting interviews, which helped me to create
              empathy maps to understand the needs of the users I am designing
              for. Through research, I find out that the most of the users are
              workers or students, who like to shop online as it is not tiring
              and you can do it anywhere, be it school or work or home. However,
              users find it hard to get the description of the sizes and they
              are not satisfied with the products after being received, where
              they have to wait for the deliveries longer than the estimated
              date.
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
              src="/images/customize_persona.png"
              alt="Customize sweatshirt app persona image"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>User journey map</ImageSectionHeader>
            <Image
              src="/images/customize_user_journey_map.png"
              alt="Customize sweatshirt app user journey map image"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Sitemap</ImageSectionHeader>
            <Image
              src="/images/customize_sitemap.png"
              alt="Customize sweatshirt app user site map image"
            />
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <ImageSectionHeader>Low fidelity wireframes</ImageSectionHeader>
            <WireframesContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_0.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_1.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_2.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_3.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_4.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_5.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_6.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_7.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_8.png"
                  alt="customize app low fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_lowfi_9.png"
                  alt="customize app low fidelity wireframe"
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
                  src="/images/customize_highfi_0.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_1.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_2.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_3.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_4.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_5.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_6.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_7.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_8.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_9.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_10.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_11.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_12.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_13.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
              <WireframeContainer>
                <Image
                  src="/images/customize_highfi_14.png"
                  alt="customize app high fidelity wireframe"
                />
              </WireframeContainer>
            </WireframesContainer>
            <br />
            <Typography variant="caption">Check out:</Typography>
            <br />
            <Link
              href="https://www.figma.com/proto/wqvE8apPbULZmFoXlrdouA/Hi-fi-Prototype?node-id=13%3A97&scaling=min-zoom&page-id=333%3A1033&starting-point-node-id=13%3A97"
              target={'_blank'}
            >
              High fidelity prototype
            </Link>
          </Section>
        </Fade>
        <Fade bottom>
          <Section>
            <Typography>
              This is my second project in UX Design, while designing this app,
              I learned the most important things are to understand the user’s
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

export default CustomizeSweatShirtPage
