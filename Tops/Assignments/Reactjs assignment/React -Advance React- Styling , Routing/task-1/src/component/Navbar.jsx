import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

const NavLink = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  &:hover {
    color: #27ae60;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #27ae60;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Nest Mart & Grocery</Logo>
      <div>
        <NavLink href="/">About Us</NavLink>
        <NavLink href="/">My Account</NavLink>
        <NavLink href="/">Wishlist</NavLink>
        <NavLink href="/">Order Tracking</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;