import React from 'react';
import {SideNav, 
        Button,
        SideNavItem} from 'react-materialize'
import './SideNavBar.css'

const SideNavBar = (props) => {
   return (
            <div className="menuBar">
                <SideNav
                    trigger={<Button className='menuBtn'>Menu</Button>}
                    options={{ closeOnClick: true }}
                >
                    <SideNavItem href='/homepage' icon='keyboard_backspace'>Back</SideNavItem>
                    <SideNavItem href='/planner' icon='create'>New Flight</SideNavItem>
                    <SideNavItem href='/map' icon='local_airport'>Google Maps</SideNavItem>
                    <SideNavItem divider></SideNavItem>
                    <SideNavItem icon='account_circle'>My Account</SideNavItem>
                    <SideNavItem href='/' icon='not_interested' onClick={props.handleLogout}>Log Out</SideNavItem>
                </SideNav>
            </div>
   )
}

export default SideNavBar;