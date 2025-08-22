import React, { useState,useEffect } from "react";
import { Container, Heading,Form, Input, Button, TableContainer, Table, Th, Td } from "./DirectCompaniesStyles.js";
import HeaderSection from "../HeaderSection/HeaderSection.js";
import FooterSection from "../FooterSection/FooterSection.js";

const DirectCompanies = () => {
  const [companyData, setCompanyData] = useState([]);
  const [form, setForm] = useState({ companyName: "", dealerName: "", dealerMobile: "", address: "", creditLimit: "", usedLimit: "", paidLimit: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/json/companies")
    .then((res)=>res.json())
    .then((data)=>setCompanyData(data.companies))
    .catch((err)=>console.log(err))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyData([...companyData, { ...form }]);
    setForm({ companyName: "", dealerName: "", dealerMobile: "", address: "", creditLimit: "", usedLimit: "", paidLimit: "" });
  };

  return (
    <Container>
      <HeaderSection />
      <Heading>Direct Companies</Heading>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Company Name" name="companyName" value={form.companyName} onChange={handleChange} required />
        <Input placeholder="Dealer Name" name="dealerName" value={form.dealerName} onChange={handleChange} required />
        <Input placeholder="Dealer Mobile Number" name="dealerMobile" value={form.dealerMobile} onChange={handleChange} required />
        <Input placeholder="Company Address" name="address" value={form.address} onChange={handleChange} required />
        <Input placeholder="Credit Limit" name="creditLimit" value={form.creditLimit} onChange={handleChange} required />
        <Input placeholder="Used Limit" name="usedLimit" value={form.usedLimit} onChange={handleChange} required />
        <Input placeholder="Paid Limit" name="paidLimit" value={form.paidLimit} onChange={handleChange} required />
        <Button type="submit">Add Company</Button>
      </Form>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>S.No</Th><Th>Company Name</Th><Th>Dealer Name</Th><Th>Dealer Mobile</Th><Th>Address</Th><Th>Credit Limit</Th><Th>Used Limit</Th><Th>Paid Limit</Th><Th>Total Pending Due</Th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((data, index) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{data.companyname}</Td>
                <Td>{data.dealerName}</Td>
                <Td>{data.dealerMobile}</Td>
                <Td>{data.address}</Td>
                <Td>{data.creditLimit}</Td>
                <Td>{data.usedLimit}</Td>
                <Td>{data.paidLimit}</Td>
                <Td>{data.creditLimit - data.usedLimit}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <FooterSection />
    </Container>
  );
};

export default DirectCompanies;
