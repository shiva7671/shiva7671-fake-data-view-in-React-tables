import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, FormContainer, InputField, Button } from "./LoginStyles";

const LoginRoute = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username==="admin" && password==="admin123") navigate("/home");
    else alert("Invalid Credentials");
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputField placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <InputField placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginRoute;
