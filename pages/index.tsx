import React from "react"
import Layout from "../components/layout"
import InfoBox from "../components/InfoBox"
import SignupForm from "../components/SignupForm"
import { Grid } from "@mui/material"
import DidForm from "../components/DidForm"

function App() {
  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <InfoBox />
        <SignupForm />
      </Grid>
      <DidForm />
    </Layout>
  )
}

export default App
