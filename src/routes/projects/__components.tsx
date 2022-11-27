import React from 'react'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material'

export const PageHeader = styled(Typography)({
  textAlign: 'center',
  fontSize: 40,
  fontWeight: 600,
  paddingBottom: 80,
})

export const Section = styled('section')({
  paddingBottom: 32,
})

export const SectionHeader = styled(Typography)({
  fontSize: 32,
  fontWeight: 600,
  paddingBottom: 16,
})

export const SectionSubHeader = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  paddingTop: 24,
  paddingBottom: 8,
  textTransform: 'uppercase',
})

export const Image = styled('img')({
  width: '100%',
})

export const ImageSectionHeader = styled(Typography)({
  fontSize: 32,
  fontWeight: 600,
  paddingBottom: 24,
  marginTop: 80,
})

export const Link = styled('a')({
  color: '#0D70D3',
  textDecoration: 'none',
  fontSize: 24,
  '&:hover': {
    textDecoration: 'underline',
  },
})

export const WireframesContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#D0E5FA',
  borderRadius: 2,
})

export const WireframeContainer = styled('div')({
  padding: 16,
  borderRadius: 7,
})

const PositionedFab = styled(Fab)({
  position: 'fixed',
  right: 32,
  bottom: 32,
  display: 'none',
})

export const ScrollToTop = (props: any) => {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const scrollToTop = () => document.scrollingElement?.scrollTo({ top: 0 })
  const handleScroll = () => {
    if (
      document.scrollingElement?.scrollTop &&
      document.scrollingElement.scrollTop > 1050
    ) {
      if (buttonRef.current) {
        if (buttonRef.current.style.display !== 'block') {
          buttonRef.current.style.display = 'block'
        }
      }
    }

    if (
      document.scrollingElement?.scrollTop &&
      document.scrollingElement.scrollTop < 1050
    ) {
      if (buttonRef.current) {
        if (buttonRef.current.style.display !== 'none') {
          buttonRef.current.style.display = 'none'
        }
      }
    }
  }

  React.useEffect(() => {
    handleScroll()
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PositionedFab
      ref={buttonRef}
      color="primary"
      aria-label="add"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </PositionedFab>
  )
}
