import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Container from "@mui/material/Container"

export default function Layout({ children }) {
  const [openDid, setOpenDid] = React.useState(false)

  const handleClickDidOpen = () => {
    setOpenDid(true)
  }
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Header handleClickDidOpen={handleClickDidOpen} />
        {children}
      </Container>
      <Footer />
    </>
  )
}
