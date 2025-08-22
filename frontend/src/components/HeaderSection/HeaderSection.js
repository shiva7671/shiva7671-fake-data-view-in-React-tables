import { 
HeaderContainer, 
NavLinks, 
NavLink, 
Logo, 
MenuIcon,
MobileMenu
} from "./HeaderStyles.js";

import { FaHome,FaBuilding, FaUserTie, FaUserFriends, FaFileInvoice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const HeaderSection = () => {
const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false);

return (
<HeaderContainer>
    {/* Logo */}
    <Logo
    src="https://res.cloudinary.com/dykeae34v/image/upload/v1755849289/Logo_rhhchk.png"
    alt="varalaxmi"
    />

    {/* Desktop + Tablet Nav */}
    <NavLinks>
    <NavLink onClick={() => navigate("/home")}><FaHome />Home </NavLink>
    <NavLink onClick={() => navigate("/direct-companies")}><FaBuilding /> Direct Companies</NavLink>
    <NavLink onClick={() => navigate("/knr-dealers")}><FaUserTie /> KNR Dealers</NavLink>
    <NavLink onClick={() => navigate("/farmers")}><FaUserFriends /> Farmers</NavLink>
    <NavLink onClick={() => navigate("/invoices")}><FaFileInvoice /> Invoices</NavLink>
    </NavLinks>

    {/* Mobile Hamburger */}
    <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />

    {/* Mobile Dropdown */}
    <MobileMenu open={menuOpen}>
    <NavLink onClick={() => { navigate("/direct"); setMenuOpen(false); }}>
        <FaBuilding /> Direct Companies
    </NavLink>
    <NavLink onClick={() => { navigate("/knr-dealers"); setMenuOpen(false); }}>
        <FaUserTie /> KNR Dealers
    </NavLink>
    <NavLink onClick={() => { navigate("/farmers"); setMenuOpen(false); }}>
        <FaUserFriends /> Farmers
    </NavLink>
    <NavLink onClick={() => { navigate("/invoices"); setMenuOpen(false); }}>
        <FaFileInvoice /> Invoices
    </NavLink>
    </MobileMenu>
</HeaderContainer>
);
};

export default HeaderSection;
