import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

const ProgressContainer = styled('div')({
  height: '100vh',
  width: '100vw',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Spinner = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Suspense
      fallback={
        <ProgressContainer>
          <CircularProgress />
        </ProgressContainer>
      }
    >
      {children}
    </React.Suspense>
  )
}

export default Spinner
