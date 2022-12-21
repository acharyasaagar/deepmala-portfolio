import Link from './Link'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const NavContainer = styled('nav')({
  padding: '20px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  background: '#fff',
  borderBottom: '1px solid #ffefef',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9,
})

const LogoContainer = styled('div')({
  cursor: 'pointer',
  '&:hover': {
    '& h1, & p': {
      color: '#0D70D3',
    },
  },
  '& h1': {
    fontWeight: 400,
    fontSize: 128,
    transition: 'color 0.2s',
  },
  '& p': {
    marginLeft: 12,
    transition: 'color 0.2s',
  },
})

const NavList = styled('div')({})
const NavLink = styled(Link)({
  padding: 12,
  fontSize: 24,
  textDecoration: 'none',
  color: 'black',
  transition: 'color 0.2s, text-decoration 0.2s',
  '&:hover': {
    color: '#0D70D3',
    textDecoration: 'underline',
  },
})

const ReplacementDiv = styled('div')({
  height: 213,
})

const Topbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavContainer>
        <LogoContainer onClick={() => navigate('/')}>
          <Typography variant="h1">DS</Typography>
          <Typography>Deep Mala Shrestha</Typography>
        </LogoContainer>
        <NavList>
          <NavLink to="/" activeClassName="activeLink">
            About
          </NavLink>
          <NavLink activeClassName="activeLink" to="/projects">
            Projects
          </NavLink>
        </NavList>
      </NavContainer>
      <ReplacementDiv />
    </>
  )
}

export default Topbar
