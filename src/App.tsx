import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner'

const AboutPage = React.lazy(() => import('./routes/about'))
const ProjectsPage = React.lazy(() => import('./routes/projects'))
const GroceryShoppingAppPage = React.lazy(
  () => import('./routes/projects/grocery-shopping-app')
)
const CustomizeSweatShirtPage = React.lazy(
  () => import('./routes/projects/customize-sweatshirt')
)
const ExpenseTrackerPage = React.lazy(
  () => import('./routes/projects/expense-tracker')
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
        path="projects/customize-sweatshirt"
        element={
          <Spinner>
            <CustomizeSweatShirtPage />
          </Spinner>
        }
      />
      <Route
        path="projects/expense-tracker"
        element={
          <Spinner>
            <ExpenseTrackerPage />
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
