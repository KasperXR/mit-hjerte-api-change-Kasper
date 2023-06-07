// This is the header component
import * as MUI from "@mui/material"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import * as React from "react"
import Link from "../wrappers/LinkWrapper"
import PageTabs from "../Tabs"

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl]: [
    null | Element,
    React.Dispatch<React.SetStateAction<null | Element>>
  ] = React.useState(null as null | Element)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <MUI.IconButton
        color="primary"
        size="large"
        sx={{ position: "fixed", float: "right", right: 6, top: 6 }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon path={mdiMenu} size={1.5} />
      </MUI.IconButton>
      <MUI.Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MUI.MenuItem href="/" component={Link} onClick={handleClose}>
          Forside
        </MUI.MenuItem>
      </MUI.Menu>
      <MUI.Typography align="center" color="primary" variant="h1">
        MIT HJERTE
      </MUI.Typography>
      <PageTabs />
    </>
  )
}

export { Header }
