import styled from "styled-components"
import { FaBars } from "react-icons/fa";
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding:10px;
    margin:10px;
    flex-wrap: wrap;
    box-sizing:border-box;
    border-radius:12px;
    /* Tablet screens */
    @media (max-width: 1024px) {
        padding: 8px 16px;
        margin: 8px;
    }

    /* Mobile screens */
    @media (max-width: 768px) {
        flex-direction: column;  /* stack items vertically */
        align-items: flex-start;
        padding: 8px 12px;
        margin: 5px;
        overflow:clip;
    }

    /* Small mobile */
    @media (max-width: 480px) {
        padding: 6px 10px;
        margin: 4px;
    }
`;

export const Logo = styled.img`
    height:80px;
    width:80px;
    border:none;
    border-radius:18px;
    background:transparent;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    /* Hide on mobile */
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #f5f5f5;
    cursor: pointer;
    font-weight: bold;
    font-family:"calibri";
    margin-right:10px;
    &:hover { color: #00bfff; }
`;

/* Hamburger icon */
export const MenuIcon = styled(FaBars)`
    display: none;
    font-size: 28px;
    color: white;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block; /* show only on mobile */
    }
`;

/* Mobile dropdown menu */
export const MobileMenu = styled.div`
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background-color: #22223a;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    margin-top: 8px;
    gap: 12px;

    @media (min-width: 769px) {
        display: none; /* hide on tablet & laptop */
    }
`;