import React from "react"
import { Route, Routes } from "react-router-dom"
import { HOME, LOGIN, PROFILE, REGISTRATION, SETTINGS } from "./constants/pathConstants"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Profile from "./pages/Profile/Profile"
import Settings from "./pages/Settings/Settings"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { commonTheme } from "./theme"
import ProtectedRoute from "./utils/ProtectedRoute"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {
  return (
    <ThemeProvider theme={createTheme(commonTheme)}>
      <CssBaseline />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTRATION} element={<Registration />} />
        <Route path={`${PROFILE}/:username`} element={<Profile />} />

        {/*  AUTHORIZED USER ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path={SETTINGS} element={<Settings />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
