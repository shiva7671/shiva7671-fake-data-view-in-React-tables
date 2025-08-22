import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #1e1e2f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  background-color: #2c2c3f;
  padding: 40px;
  border-radius: 12px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
  }
`;

export const InputField = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #00bfff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #009acd;
  }
`;
