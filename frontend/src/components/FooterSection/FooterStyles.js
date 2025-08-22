import styled from "styled-components";
import {useState} from "react"

export const FooterContainer = styled.div`
  background:transparent;
  text-align: center;
  border-radius:12px;
  box-sizing:border-box;
  padding:5px;
  wdith:100%

`;
export const LicensedText=styled.p`
  font-family:"calibri";
  color:white;
  font-weight:bold;
  font-size:20px;
  font-style:italic;
  `
export const Button = styled.button`
  background-color: #00bfff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover { background-color: #009acd; }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Use viewport width for full coverage */ /* Use viewport height for full coverage */
  background: rgba(0, 0, 0, 0.41); /* semi-transparent */
  backdrop-filter: blur(10px); /* apply blur effect */
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:12px;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: transparent;
  padding: 30px;
  border-radius: 12px;
  font-family: "calibri";
  font-size: 18px;
  width: 400px;
  max-width: 90vw; /* Ensure it scales with viewport */
  color: white;
  font-weight:bold;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: slight shadow for depth */
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

export const EmailModal = ({ closeModal }) => {
  const [image,setImage]=useState(null)

  const handleImageChange=(e)=>{
    const file =e.target.files[0]
    if (file){
      setImage(URL.createObjectURL(file))
    }
  }
  return(
  <ModalOverlay>
    <ModalContent>
      <h2>Email Inquiry</h2>
      <Input placeholder="Name" />
      <Input placeholder="Contact" />
      <Input type="file" accept="image/*" onChange={handleImageChange} placeholder="Crop Disease Image" />
      {image && <PreviewImage src={image} alt="Preview" />}
      <Input placeholder="No.of Acres" />
      <Button onClick={closeModal}>Send</Button>
    </ModalContent>
  </ModalOverlay>
)};
