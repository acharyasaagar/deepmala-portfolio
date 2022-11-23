import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const NavContainer = styled('nav')({
  padding: '20px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const LogoContainer = styled('div')({
  '& h1': {
    fontWeight: 400,
    fontSize: 128,
  },
  '& p': {
    marginLeft: 12,
  },
})

const NavList = styled('div')({})
const NavLink = styled(Link)({
  padding: 12,
  fontSize: 24,
})

const Topbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Typography variant="h1">DS</Typography>
        <Typography>Deep Mala Shrestha</Typography>
      </LogoContainer>
      <NavList>
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </NavList>
    </NavContainer>
  )
}

export default Topbar
