import React from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import Categories from './component/Categories';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <Categories />
    </AppContainer>
  );
};

export default App;