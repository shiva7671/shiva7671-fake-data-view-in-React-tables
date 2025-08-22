import React, { useState } from "react";
import {FooterContainer,LicensedText,Button,EmailModal} from "./FooterStyles.js"

const FooterSection = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <FooterContainer>
            <LicensedText>© 2025 Varalaxmi Seeds & Pesticides | Licensed</LicensedText>
            <Button onClick={()=>setShowModal(true)}>Contact Us / Email Inquiry</Button>
            {showModal && <EmailModal closeModal={()=>setShowModal(false)}/>}
        </FooterContainer>
    );
};

export default FooterSection;