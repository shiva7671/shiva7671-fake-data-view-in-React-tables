import styled from "styled-components";

export const HomeContainer=styled.body`
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
export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;       // vertical centering
  justify-content: center;   // horizontal centering
`;

export const HeadingName = styled.h1`
  font-family: "Caveat", cursive;  // use proper font
  font-size: 36px;
  color: white;
  text-align: center;       // optional now, but safe
`;



