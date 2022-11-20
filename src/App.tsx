import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner'

const About = React.lazy(() => import('./routes/about'))
const Projects = React.lazy(() => import('./routes/projects'))

function App() {
  return (
    <Routes>
      <Route
        path="/projects"
        element={
          <Spinner>
            <Projects />
          </Spinner>
        }
      />
      <Route
        path="/"
        element={
          <Spinner>
            <About />
          </Spinner>
        }
      />
    </Routes>
  )
}

export default App
