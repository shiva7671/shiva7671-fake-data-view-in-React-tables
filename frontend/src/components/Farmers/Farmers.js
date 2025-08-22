import React, { useState,useEffect } from "react";
import { Container,Heading, Form, Input,  Button, TableContainer, Table, Th, Td } from "./FarmersStyles.js";
import HeaderSection from "../HeaderSection/HeaderSection.js";
import FooterSection from "../FooterSection/FooterSection.js";

const Farmers = () => {
  const [farmerData, setFarmerData] = useState([]);
  const [form, setForm] = useState({ name: "", mobile: "", address: "", date: "", productName: "", totalBill: "" });
  const [search, setSearch] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFarmerData([...farmerData, { ...form }]);
    setForm({ name: "", mobile: "", address: "", date: "", productName: "", totalBill: "" });
  };


  useEffect(()=>{
    fetch("http://127.0.0.1:8000/json/farmers")
    .then((res)=>res.json())
    .then((data)=>setFarmerData(data.farmers))
    .catch((err)=>console.log(err))
  },[])
  const filteredData = search
    ? farmerData.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : farmerData;

  const handleDownloadInvoice = (farmer) => {
    const invoiceContent = `
      Farmer Name: ${farmer.name}
      Mobile: ${farmer.mobile}
      Address: ${farmer.address}
      Date: ${farmer.date}
      Product: ${farmer.productName}
      Total Bill: ${farmer.totalBill}
    `;
    const blob = new Blob([invoiceContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${farmer.name}_invoice.txt`;
    link.click();
  };

  return (
    <Container>
      <HeaderSection />
      <Heading>Farmers</Heading>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Farmer Name" name="name" value={form.name} onChange={handleChange} required />
        <Input placeholder="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} required />
        <Input placeholder="Address" name="address" value={form.address} onChange={handleChange} required />
        <Input type="date" name="date" value={form.date} onChange={handleChange} required />
        <Input placeholder="Product Name" name="productName" value={form.productName} onChange={handleChange} required />
        <Input placeholder="Total Bill" name="totalBill" value={form.totalBill} onChange={handleChange} required />
        <Button type="submit">Add Farmer</Button>
      </Form>

      <Input
        placeholder="Search by Farmer Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px" }}
      />

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>S.No</Th><Th>Name</Th><Th>Mobile</Th><Th>Address</Th><Th>Date</Th><Th>Product</Th><Th>Total Bill</Th><Th>Invoice</Th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((farmer, index) => (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{farmer.name}</Td>
                <Td>{farmer.mobile}</Td>
                <Td>{farmer.address}</Td>
                <Td>{farmer.date}</Td>
                <Td>{farmer.productName}</Td>
                <Td>{farmer.totalBill}</Td>
                <Td><Button onClick={() => handleDownloadInvoice(farmer)}>Download</Button></Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <FooterSection />
    </Container>
  );
};

export default Farmers;
