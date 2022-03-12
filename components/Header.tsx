import {
  Grid,
  Card,
  CardMedia,
  Button,
  IconButton,
  Avatar,
} from "@mui/material"
import { Box } from "@mui/system"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import React from "react"
import { deepPurple } from "@mui/material/colors"

interface HeaderProps {
  handleClickDidOpen: () => void
  handleClickAvatarOpen: () => void
}

const Header = ({ handleClickDidOpen, handleClickAvatarOpen }: HeaderProps) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Card sx={{ maxWidth: 116, boxShadow: 0 }} raised={false}>
          <CardMedia
            component="img"
            image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
          />
        </Card>
      </Grid>
      <Grid item>
        <h1>Colorado Aware</h1>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item>
        <Box>
          <IconButton aria-label="wallet" onClick={handleClickDidOpen}>
            <AccountBalanceWalletOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <IconButton onClick={handleClickAvatarOpen}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>WW</Avatar>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
