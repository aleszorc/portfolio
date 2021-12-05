import React, { FC } from 'react';
import HomePage from './pages/HomePage';
import * as Styled from './styled';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Styled.GlobalStyle />
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
};

export default App;
