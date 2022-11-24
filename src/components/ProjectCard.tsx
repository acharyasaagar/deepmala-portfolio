import MuiCard from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Card = styled(MuiCard)({
  backgroundColor: '#D0E5FA',
  height: 'calc(100vh - 255px)',
  width: '100%',
  maxWidth: 960,
  marginBottom: 40,
  '&:hover': {
    '& svg': {
      opacity: 1,
    },
  },
})

const CardHeader = styled(Typography)({
  textAlign: 'center',
  marginTop: 16,
  color: '#0D70D3',
  '& svg': {
    marginTop: 2,
    marginLeft: 24,
    fontSize: 24,
    opacity: 0,
    transition: 'opacity 0.3s',
  },
})

const ImageContainer = styled('div')({
  padding: 32,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Image = styled('img')({
  maxWidth: '100%',
  borderRadius: 7,
})

const ProjectCard = (props: any) => {
  const navigate = useNavigate()
  return (
    <Card elevation={0} onClick={() => navigate(props.projectPageURL)}>
      <CardActionArea>
        <CardHeader variant="h4">
          {props.title}
          <FontAwesomeIcon icon={faArrowRight} />
        </CardHeader>
        <ImageContainer>
          <Image src={props.imgURL}></Image>
        </ImageContainer>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
