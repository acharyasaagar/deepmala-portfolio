import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner'

const AboutPage = React.lazy(() => import('./routes/about'))
const ProjectsPage = React.lazy(() => import('./routes/projects'))
const GroceryShoppingAppPage = React.lazy(
  () => import('./routes/projects/grocery-shopping-app')
)

function App() {
  return (
    <Routes>
      <Route
        path="projects/grocery-shopping-app"
        element={
          <Spinner>
            <GroceryShoppingAppPage />
          </Spinner>
        }
      />
      <Route
        path="projects"
        element={
          <Spinner>
            <ProjectsPage />
          </Spinner>
        }
      />
      <Route
        path="/"
        element={
          <Spinner>
            <AboutPage />
          </Spinner>
        }
      />
    </Routes>
  )
}

export default App
