import React from 'react';
import { Layout } from 'antd';
import './navbar.css';

const { Header, Footer, Content } = Layout;
const Navbar = () => {
  return (
    <Layout>
      <Header><h2>Event List</h2></Header>
    </Layout>
  );
};

export default Navbar;