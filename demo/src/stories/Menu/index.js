import React from 'react'
import { Menu, MenuItem, MenuHeader, MenuDivider } from '../../../../src/components'

export default () => (
  <Menu style={{ width: 200 }}>
    <MenuHeader>Account</MenuHeader>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Friends</MenuItem>
    <MenuItem>Notifications</MenuItem>
    <MenuDivider />
    <MenuItem>Settings</MenuItem>
    <MenuItem>Logout</MenuItem>
  </Menu>
)
