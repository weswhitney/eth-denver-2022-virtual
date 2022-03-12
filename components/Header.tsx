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

interface HeaderProps {
  handleClickDidOpen: () => void
  handleClickAvatarOpen: () => void
  avatarName: string
}

const Header = ({
  handleClickDidOpen,
  handleClickAvatarOpen,
  avatarName,
}: HeaderProps) => {
  function stringToColor(string: string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = "#"

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.substr(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    }
  }

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
            <Avatar {...stringAvatar(avatarName)} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
