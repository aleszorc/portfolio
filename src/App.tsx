import React, { FC } from 'react';
import HomePage from './pages/HomePage';
import * as Styled from './styled';

const App: FC = () => {
  return (
    <>
      <Styled.GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
