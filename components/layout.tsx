import React, { useEffect, useState } from "react"
import Header from "./Header"
import Container from "@mui/material/Container"
import Footer from "./Footer"
import { Dialog, DialogContent, Typography } from "@mui/material"
import { Box } from "@mui/system"
import DidForm from "./DidForm"
import CeramicClient from "@ceramicnetwork/http-client"
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver"

import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect"
import { DID } from "dids"
import { IDX } from "@ceramicstudio/idx"

const endpoint = "https://ceramic-clay.3boxlabs.com"

export default function Layout({ children }) {
  const [openDid, setOpenDid] = useState(false)
  const [openAvatar, setOpenAvatar] = useState(false)
  const [name, setName] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [didLocal, setDidLocal] = useState("")

  useEffect(() => {
    readProfile()
  }, [])

  async function connect() {
    const addresses = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    return addresses
  }

  async function readProfile() {
    const [address] = await connect()
    const ceramic = new CeramicClient(endpoint)
    const idx = new IDX({ ceramic })

    try {
      const data = await idx.get("basicProfile", `${address}@eip155:1`)

      console.log("data: ", data)
      if (data.name) setName(data.name)
    } catch (error) {
      console.log("error: ", error)
      setLoaded(true)
    }
  }

  async function updateProfile(name: string) {
    setOpenDid(false)

    const [address] = await connect()
    const ceramic = new CeramicClient(endpoint)
    const threeIdConnect = new ThreeIdConnect()
    const provider = new EthereumAuthProvider(window.ethereum, address)

    await threeIdConnect.connect(provider)

    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: {
        ...ThreeIdResolver.getResolver(ceramic),
      },
    })

    ceramic.setDID(did)
    await ceramic.did.authenticate()

    const idx = new IDX({ ceramic })

    await idx.set("basicProfile", {
      name,
    })
    const readDid = await idx.caip10ToDid(threeIdConnect.accountId)
    setDidLocal(readDid)
  }

  const handleClickDidOpen = () => {
    setOpenDid(true)
  }

  const handleClickDidClose = () => {
    setOpenDid(false)
  }

  const handleClickAvatarOpen = () => {
    setOpenAvatar(true)
    readProfile()
  }

  const handleClickAvatarClose = () => {
    setOpenAvatar(false)
  }
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Header
          readProfile={readProfile}
          handleClickDidOpen={handleClickDidOpen}
          handleClickAvatarOpen={handleClickAvatarOpen}
          avatarName={name}
        />
        {children}
      </Container>
      <Dialog open={openDid} onClose={handleClickDidClose}>
        <DialogContent>
          <Box noValidate sx={{ mt: 1, textAlign: "center" }}>
            <DidForm updateProfile={updateProfile} />
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog open={openAvatar} onClose={handleClickAvatarClose}>
        <DialogContent>
          <Box noValidate sx={{ mt: 1, textAlign: "center" }}>
            <Typography>Digital Identity</Typography>
            <Typography>{didLocal}</Typography>
          </Box>
        </DialogContent>
      </Dialog>
      <Footer />
    </>
  )
}
