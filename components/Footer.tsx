import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import { Grid } from "@mui/material"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Blockchain Energy Systems
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={10}>
            <Copyright />
          </Grid>
          <Grid item xs={2}>
            Powered by Energy Web
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
