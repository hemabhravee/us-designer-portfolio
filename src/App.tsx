import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import './fonts.css'
import HomePage from './pages/home-page'
import PageNotFoundPage from './pages/page-not-found-page'
import { RouteConstants } from './constants/route-constants'
import AboutMe from './pages/about-me'
import UxCaseStudies from './pages/ux-case-studies'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
            path={RouteConstants.home.path}
            element={ <HomePage /> }
        />
        <Route
            path={RouteConstants.aboutMe.path}
            element={ <AboutMe /> }
        />
        <Route
            path={RouteConstants.uxCaseStudies.path}
            element={ <UxCaseStudies /> }
        />
        <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
