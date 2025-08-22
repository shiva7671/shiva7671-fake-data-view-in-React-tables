import React, { useState,useEffect } from "react";
import { Container, Form,Heading, Input, Button, TableContainer, Table, Th, Td } from "./KnrDealersStyles.js";
import HeaderSection from "../HeaderSection/HeaderSection.js";
import FooterSection from "../FooterSection/FooterSection.js";

const KnrDealers = () => {
  const [dealerData, setDealerData] = useState([]);
  const [form, setForm] = useState({ shopName: "", dealerName: "", dealerMobile: "", shopAddress: "", creditLimit: "", usedLimit: "", paidLimit: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(()=>{
      fetch("http://127.0.0.1:8000/json/knrdealers")
      .then((res)=>res.json())
      .then((data)=>setDealerData(data.knrdealers))
      .catch((err)=>console.log(err))
    },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setDealerData([...dealerData, { ...form }]);
    setForm({ shopName: "", dealerName: "", dealerMobile: "", shopAddress: "", creditLimit: "", usedLimit: "", paidLimit: "" });
  };

  return (
    <Container>
      <HeaderSection />
      <Heading>KNR Dealers</Heading>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Dealer Shop Name" name="shopName" value={form.shopName} onChange={handleChange} required />
        <Input placeholder="Dealer Name" name="dealerName" value={form.dealerName} onChange={handleChange} required />
        <Input placeholder="Dealer Mobile Number" name="dealerMobile" value={form.dealerMobile} onChange={handleChange} required />
        <Input placeholder="Shop Address" name="shopAddress" value={form.shopAddress} onChange={handleChange} required />
        <Input placeholder="Credit Limit" name="creditLimit" value={form.creditLimit} onChange={handleChange} required />
        <Input placeholder="Used Limit" name="usedLimit" value={form.usedLimit} onChange={handleChange} required />
        <Input placeholder="Paid Limit" name="paidLimit" value={form.paidLimit} onChange={handleChange} required />
        <Button type="submit">Add Dealer</Button>
      </Form>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>S.No</Th><Th>Shop Name</Th><Th>Dealer Name</Th><Th>Mobile</Th><Th>Address</Th><Th>Credit Limit</Th><Th>Used Limit</Th><Th>Paid Limit</Th><Th>Total Pending</Th>
            </tr>
          </thead>
          <tbody>
            {dealerData.map((data, index) => (
              <tr key={index}>
                <Td>{index+1}</Td>
                <Td>{data.shopname}</Td>
                <Td>{data.dealerName}</Td>
                <Td>{data.dealerMobile}</Td>
                <Td>{data.shopAddress}</Td>
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

export default KnrDealers;
