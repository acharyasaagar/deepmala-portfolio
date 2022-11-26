import Typography from '@mui/material/Typography'
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
