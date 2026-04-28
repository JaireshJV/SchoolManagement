import React, { Fragment, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import Routers from "./router"
import { useSelector } from "react-redux"
import GlobalStyle from "@theme/GlobalStyle"
import { selectCurrentToken } from "@modules/Auth/authSlice"
import './App.css'
// import { getDecryptedLanguage } from "@utils/cryptoUtils"

function App() {

  const location = useLocation()

  const token = useSelector(selectCurrentToken);
  // const Language = getDecryptedLanguage();
// console.log(Language.primaryLanguage,'Language');

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Fragment>
      <GlobalStyle />
      <Routers token={token} />
    </Fragment>
  )
}

export default App
