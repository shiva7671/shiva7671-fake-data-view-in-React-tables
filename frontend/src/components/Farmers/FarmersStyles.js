import styled from "styled-components";

/* Main Page Container */
export const Container=styled.body`
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  background-image:url("https://res.cloudinary.com/dykeae34v/image/upload/v1755839386/agri_sqpvzd.jpg");
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  backdrop-filter: blur(2px);          // apply blur effect
  -webkit-backdrop-filter: blur(2px);
  min-height:100vh;
  max-width:100%;

  /* Tablet */
  @media (max-width: 1024px) {
    background-position: center top;
  }

  /* Mobile */
  @media (max-width: 768px) {
    background-position: center;
    background-size: cover; /* ensures image still covers */
  }

  @media (max-width: 480px) {
    background-position: center;
    background-attachment: scroll; /* avoids issues on small phones */
  }
  `
export const Heading = styled.h2`
  color: white;
  font-family: "Calibri", sans-serif;
  font-weight:bold;
  font-style:italic;
  font-size: 36px;
  text-align: center;
`
/* Form Section */
export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: #1f1f2e;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
`;

/* Input Fields */
export const Input = styled.input`
  padding: 12px 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #2a2a3b;
  color: #fff;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px #007bff;
    border: 1px solid #007bff;
  }
`;

/* Buttons */
export const Button = styled.button`
  padding: 12px 25px;
  background: linear-gradient(135deg,#007bff,#00c6ff);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,123,255,0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

/* Search Input */
export const SearchInput = styled(Input)`
  max-width: 400px;
  margin-bottom: 25px;
`;

/* Table Container with Scroll */
export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

/* Table Styling */
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 900px;
`;

/* Table Header */
export const Th = styled.th`
  padding: 14px 20px;
  background: linear-gradient(90deg,#007bff,#00c6ff);
  color: #fff;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
`;

/* Table Data Cells */
export const Td = styled.td`
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid #2a2a3b;
  font-size: 14px;
`;

/* Responsive Adjustments */
export const ResponsiveForm = styled(Form)`
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ResponsiveTable = styled(Table)`
  @media (max-width: 1024px) {
    min-width: 700px;
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

