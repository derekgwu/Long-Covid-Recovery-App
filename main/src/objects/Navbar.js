
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/secondpage" activeStyle>
                        SecondPage
                    </NavLink>
                
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;