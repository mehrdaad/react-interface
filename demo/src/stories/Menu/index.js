import React from "react"
import { Story, Demo } from "react-story"
import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../../src/components'

const MenuStory = () => (
  <Story>
    <Demo name="Menu Sizes" desc="Pick from any of the theme sizes.">
      <Menu style={{ width: 200 }}>
        <MenuHeader>Account</MenuHeader>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Friends</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuDivider />
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Demo>
  </Story>
)

export default {
  name: "Menu",
  component: MenuStory
}
