import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Spinner from './components/Spinner'
import AboutPage from './routes/about'
import ProjectsPage from './routes/projects'
import GroceryShoppingAppPage from './routes/projects/grocery-shopping-app'
import CustomizeSweatShirtPage from './routes/projects/customize-sweatshirt'
import ExpenseTrackerPage from './routes/projects/expense-tracker'

function App() {
  useScrollToTop()
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

const useScrollToTop = () => {
  const location = useLocation()
  React.useEffect(() => {
    document.documentElement.scrollTo({
      left: 0,
      top: 0,
      behavior: 'auto',
    })
  }, [location.pathname])
}
