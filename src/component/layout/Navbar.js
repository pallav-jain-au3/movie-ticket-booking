import React from 'react'
import {AppBar, Tabs, Tab, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Search} from '../Search'
const styles = {}

class Nav extends React.Component {
  render() {
    return (
      <AppBar title="My App" position = "static">
        <Tabs>
          <Tab label="home"  component = {Link} to = '/'/>
          <Tab label="city" component = {Link} to = '/city'/>
          <Tab label="movies" component = {Link} to = '/movies' />
          <Search />
        </Tabs>
      </AppBar>
    )
  }
}

export  default withStyles(styles)(Nav);