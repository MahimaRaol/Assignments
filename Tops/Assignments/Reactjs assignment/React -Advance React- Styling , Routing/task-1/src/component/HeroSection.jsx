import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  background-color: #e8f5e9;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  color: #2d3436;
  margin-left:-1000px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #27ae60;
  margin-bottom: 1.5rem;
  margin-left:-1000px;

`;

const SubscribeInput = styled.input`
  padding: 0.5rem;
  width: 300px;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left:-140px;
  
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroTitle>Fresh Vegetables, Big Discount</HeroTitle>
      <HeroSubtitle>Save up to 50% off on your first order</HeroSubtitle>
      
      <div>
        <SubscribeInput type="email" placeholder="Your email address" />
        <SubscribeButton>Subscribe</SubscribeButton>
        <img src='https://img.freepik.com/free-photo/fresh-apples-shopping-mesh-bag-with-branch-apples_127032-1865.jpg?t=st=1727502486~exp=1727506086~hmac=3ccbdd2c43b0a355be5d5b6dff2bdd4ab255e22922f4cac9b600ea3d0fd53c01&w=1060' height={"190px"} width={"350px"} style={{marginLeft:"500px",marginTop:"-150px"}}></img>
        
      </div>
    </Hero>
  );
};

export default HeroSection;