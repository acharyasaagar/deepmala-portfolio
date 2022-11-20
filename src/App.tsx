import React from 'react'
import { Routes, Route } from 'react-router-dom'

const About = React.lazy(() => import('./routes/about'))
const Projects = React.lazy(() => import('./routes/projects'))

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<About />} />
    </Routes>
  )
}

export default App
