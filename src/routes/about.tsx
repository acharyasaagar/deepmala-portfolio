import Button from '@mui/material/Button'
import MuiContainer from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Topbar from '../components/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faDribbbleSquare,
} from '@fortawesome/free-brands-svg-icons'
import { styled } from '@mui/material/styles'
import Fade from 'react-reveal/Fade'

const Container = styled(MuiContainer)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'hidden',
  overflowX: 'visible',
  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const Title = styled(Typography)({
  fontSize: 40,
  fontWeight: 600,
  margin: 16,
})

const ImageContainer = styled('div')({
  height: 500,
  '& img': {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})

const Greeting = styled(Typography)({
  fontSize: 40,
  fontWeight: 600,
  margin: 16,
})

const AboutText = styled(Typography)({
  fontSize: 24,
  fontWeight: 400,
  margin: 16,
})

const Footer = styled('footer')({
  background: '#0D70D3',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  height: 180,
  minWidth: '100vw',
  overflow: 'hidden',
})

const DownloadCVButton = styled(Button)({
  marginTop: 16,
  marginBottom: 40,
  fontSize: 20,
  textTransform: 'none',
})

const EmailText = styled('a')({
  fontSize: 24,
  color: '#fff',
  textDecoration: 'none',
  transition: 'opacity 0.3s',
  '&:hover': {
    opacity: 0.8,
  },
})

const SocialContainer = styled('div')({
  padding: 20,
})

const SocialIconContainer = styled('a')({
  color: '#fff',
  padding: 12,
  textDecoration: 'none',
  '& svg:hover': {
    cursor: 'pointer',
  },
})

const About = () => {
  return (
    <div>
      <Topbar />
      <Container maxWidth="md">
        <Fade bottom>
          <Title variant="h3"> User Experience Designer</Title>
          <ImageContainer>
            <img src="/profile.jpg" alt="A photo of deep mala" />
          </ImageContainer>
          <Greeting variant="h3">Hello, I am Deep Mala.</Greeting>
        </Fade>
        <AboutText variantMapping={{ body1: 'div' }}>
          <Fade bottom>
            <p>
              I am a UX Designer, currently looking for an entry level position
              in UX Design, who loves music, cycling, traveling and swimming
              (not a good swimmer though).
            </p>
          </Fade>
          <Fade bottom>
            <p>
              I completed my bachelor in business studies, which after
              completing I realised that I am not interested in this field at
              all.
            </p>
          </Fade>
          <Fade bottom>
            <p>
              After struggling in odd jobs for years and getting confused on
              questions like ‘ what am I interested at or what am I good at or
              what to do next?’, in 2021, I joined Coursera, Google’s Online
              Platform to learn User Experience Design and then I never stopped
              learning. Now, I know what I am interesed and good at. I love what
              I am now, a UX Designer. After completing the course, I have the
              confidence to work in the position of an entry level UX Designer.
            </p>
          </Fade>
        </AboutText>
        <Fade bottom>
          <DownloadCVButton
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faDownload} />}
            LinkComponent="a"
            href="/deep_mala_shrestha_CV.pdf"
            // @ts-ignore
            download="deep_mala_shrestha_CV.pdf"
          >
            Download my CV
          </DownloadCVButton>
        </Fade>
      </Container>
      <Footer>
        <Fade bottom>
          <EmailText href="mailto:dipsana20@gmail.com">
            dipsana20@gmail
          </EmailText>
        </Fade>
        <Fade bottom>
          <SocialContainer>
            <SocialIconContainer
              href="https://www.linkedin.com/in/deep-mala-shrestha"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} fontSize="48" />
            </SocialIconContainer>
            <SocialIconContainer
              href="https://dribbble.com/DeepuShrestha"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDribbbleSquare} fontSize="48" />
            </SocialIconContainer>
          </SocialContainer>
        </Fade>
      </Footer>
    </div>
  )
}

export default About
