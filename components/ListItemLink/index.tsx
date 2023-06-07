import * as MUI from "@mui/material"
import Link from "next/link"

const ListItemLink = (props) => (
  <Link href={props.href} passHref>
    <MUI.ListItem component="a" color="primary" alignItems="center" button>
      <MUI.ListItemText
        primaryTypographyProps={{ color: props.color || "primary" }}
        primary={props.text}
      />
    </MUI.ListItem>
  </Link>
)

export default ListItemLink
